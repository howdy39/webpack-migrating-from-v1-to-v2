#!/bin/sh

dir=`dirname $0`
${dir}/packages/webpack2/node_modules/.bin/webpack ${@+"$@"}
