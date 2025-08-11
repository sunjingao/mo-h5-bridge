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
        await execPromise(`git push -u origin master`)
        console.log(`整体 push 完成`)
    } catch (error) {
        console.error('execPromise error:', error);
    }
}

runCommand()
