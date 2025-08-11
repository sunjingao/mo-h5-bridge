import fs from "fs";
import path from 'path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, '../../doc/view/introduce/log/index.md');

// 读取package.json文件
const packageJson = fs.readFileSync(packageJsonPath, 'utf8');

const lastestVersion = packageJson.split('###')[1].match(/\d+.\d+.\d+/)[0].trim()

const lastestContent = packageJson.split('###')[1].split(/\d+.\d+.\d+/)[1].trim()

export {
    lastestVersion,
    lastestContent
}