import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, '../../package.json');

// 读取package.json文件
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// 获取当前版本号
export const currentVersion = packageJson.version;

// 如果传入了原始版本号参数，直接恢复；否则回退一个修订版本号
const originalVersion = process.argv[2];
if (originalVersion && /^\d+\.\d+\.\d+$/.test(originalVersion)) {
  packageJson.version = originalVersion;
} else {
  const versionParts = currentVersion.split('.');
  versionParts[2] = parseInt(versionParts[2], 10) - 1;
  packageJson.version = versionParts.join('.');
}

// 将更新后的package.json文件写入磁盘
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// 输出更新后的版本号
console.log(`.....................版本回退为${packageJson.version}.....................`);
