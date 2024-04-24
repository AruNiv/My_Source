#!/bin/bash

old_version=`grep ^Version < ./My_Target/install/release/new_release.txt | cut -d"=" -f2`
new_version=`grep ^[0-9] < release.txt`

sed -i 's/$old_version/$new_version/g' ./My_Target/install/release/new_release.txt
