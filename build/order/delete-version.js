import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, '../../package.json');

// 读取package.json文件
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

// 获取当前版本号
export const currentVersion = packageJson.version;

// 自增修订版本号
const versionParts = currentVersion.split('.');
versionParts[2] = parseInt(versionParts[2], 10) - 1;

// 更新package.json文件中的版本号
packageJson.version = versionParts.join('.');

// 将更新后的package.json文件写入磁盘
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// 输出更新后的版本号
console.log(`.....................版本更新为${packageJson.version}.....................`);
