import { exec } from 'child_process';
import util from 'util';
import { lastestContent } from '../util/read-log-version.js';

// 转换exec为返回Promise的版本
const execPromise = util.promisify(exec);

async function runCommand() {
    try {
        await execPromise(`git add .`)
        console.log(`整体 add 完成`)
        await execPromise(`git commit -m "${lastestContent}"`)
        console.log(`整体 commit 完成`)
        await execPromise(`git push -u origin main`)
        console.log(`整体 push 完成`)
    } catch (error) {
        console.error('execPromise error:', error);
        // git push 失败时尝试引导登录
        if (error.stderr && error.stderr.includes('Authentication failed')) {
            console.error('GitHub 认证失败，请运行: gh auth login --hostname github.com --web');
        }
        process.exit(1);
    }
}

runCommand()
