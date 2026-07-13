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
        console.error('Git 操作失败，GitHub 可能无法访问，已跳过:');
        console.error(error.stderr || error.message);
        console.log('可稍后手动推送: git push -u origin main');
        // 不阻塞流程，继续执行 npm publish
    }
}

runCommand()
