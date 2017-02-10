#!/bin/sh

dir=`dirname $0`
${dir}/packages/webpack1/node_modules/.bin/webpack ${@+"$@"}
