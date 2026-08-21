#!/bin/bash

# this file basically gets you your files from github into the folder "work"

rm -rf work/

input=$1"bernwest2026"

name=$(echo $input | sha1sum | awk '{print $1}')

echo 'fetching files for ' $name

mkdir work/
cd work/


git clone --no-checkout --depth=1 --filter=tree:0 https://github.com/bernwest2026/games-coden .
git sparse-checkout set --no-cone /$name
git checkout

