#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件

npm run build

# 进入生成的文件夹
# 前边的src是项目中src文件夹的值
cd src/.vitepress/dist

git init
git add -A
git commit -m 'add'

git push -f https://github.com/Ghostasoul/myvitpress.git main:blog
# git push -f git@github.com:你的git名/你的git项目名.git master:你的git分支

cd -

