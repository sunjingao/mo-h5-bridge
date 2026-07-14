#!/bin/bash

# ========== npm 登录检查 ==========
echo "========== 检查 npm 登录状态 =========="

# 用本地 token 检查登录状态，避免网络超时卡住
check_npm_auth() {
    npm whoami &>/dev/null &
    local pid=$!
    (sleep 15 && kill $pid 2>/dev/null) &
    wait $pid 2>/dev/null
}

if ! check_npm_auth; then
    echo "npm 未登录，正在打开浏览器登录页面..."
    echo "登录完成后回到终端继续"
    npm login --auth-type=web
    if ! check_npm_auth; then
        echo "npm 登录失败，退出"
        exit 1
    fi
fi
echo "npm 已登录"

# ========== GitHub 认证检查 ==========
echo "========== 检查 GitHub 认证状态 =========="
check_github_auth() {
    if command -v gh &>/dev/null; then
        gh auth status &>/dev/null && return 0
    fi
    return 1
}

if ! check_github_auth; then
    echo "GitHub 未认证或无法访问，将跳过 git push 步骤"
    echo "可稍后手动推送: git push -u origin main"
fi

# ========== 确认文档更新 ==========
read -p "是否已经更新开发文档(y/n)? " UserInput

if [ "$UserInput" != "y" ]; then
    exit 1
fi

# ========== 执行发布流程 ==========
ORIGINAL_VERSION=$(node -e "console.log(require('../package.json').version)") && \
node ./order/add-version.js && \
cd .. && \
vite build --mode package && \
vite build --mode doc && \
node ./build/order/git.js && \
npm publish || node ./build/order/delete-version.js "$ORIGINAL_VERSION"
