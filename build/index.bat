
@echo off
chcp 65001
set /p UserInput=是否已经更新开发文档(y?):

if %UserInput% NEQ y (
    exit 1
)


node ./order/add-version.js && ^
cd ..  && ^
vite build --mode package  && ^
vite build --mode doc  && ^
node ./build/order/git.js  && ^
cd ./dist/  && ^
node ./build/git.js  && ^
cd ..  && ^
npm publish  || node ./order/delete-version.js || node ./build/order/delete-version.js
