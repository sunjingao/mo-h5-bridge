#!/bin/bash

read -p "是否已经更新开发文档(y/n)? " UserInput

if [ "$UserInput" != "y" ]; then
    exit 1
fi

node ./order/add-version.js && \
cd .. && \
vite build --mode package && \
vite build --mode doc && \
node ./build/order/git.js && \
npm publish || node ./build/order/delete-version.js
