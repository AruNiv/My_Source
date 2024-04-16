#!/bin/bash

echo "Hello ... user!!!, Welcome to shell scripting!!"
echo `date`
echo "Argument1 = $1"
echo "Argument2 = $2"
echo $1 >> release.txt
echo $2 >> release.txt
