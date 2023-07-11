#!/bin/bash

# 下载文件的URL
urls=(
  "https://ghproxy.com/https://raw.githubusercontent.com/damengzhu/banad/main/jiekouAD.txt"
  "https://ghproxy.com/https://raw.githubusercontent.com/damengzhu/abpmerge/main/abpmerge.txt"
  "https://ghproxy.com/https://raw.githubusercontent.com/damengzhu/abpmerge/main/CSSRule.txt"
)

# 保存文件的路径（相对于当前目录，即项目根目录）
save_paths=(
  "./jiekouAD.txt"
  "./abpmerge.txt"
  "./CSSRule.txt"
)

# 下载文件并保存到指定路径
for i in ${!urls[@]}; do
  curl -o "${save_paths[$i]}" "${urls[$i]}"
done

echo "下载完成"
