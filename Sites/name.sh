#!/usr/bin/env bash

NAME="Daniel"

if [ "X${NAME}" == "XDaniel" ];then
    echo "${NAME} Stephenson"
elif [ "X${NAME}" == "XJessica" ];then
    echo "${NAME} Bloom"
else
    echo "${NAME} Rebecca Stephenson"
fi