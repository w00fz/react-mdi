#!/bin/sh

find icons -type f -print0 | xargs -0 sed -i "" "s/var _Svg.*//g"
find icons -type f -print0 | xargs -0 sed -i "" "s/_SvgIcon2.default,/'svg', { style: {width: (props.size || '24' + 'px'), height: (props.size || '24' + 'px')}, viewBox: '0 0 ' + (props.size || '24') + ' ' + (props.size || '24'), className: props.className },/g"
find icons -type f -print0 | xargs -0 sed -i "" "s/props,//g"
find icons -type f -print0 | xargs -0 sed -i "" "s/.*muiName.*;//g"