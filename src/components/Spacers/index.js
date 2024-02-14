import { Colors, sizes } from '@constants';
import React from 'react';
import { View, } from 'react-native';

const TempSpacer = ({ style, width, height, }) => {
    return (
        <View style={[{ height: height, width: width }, style]} />
    );
}


export const Spacer = ({ horizontal, height, width, style, isBasic, isSmall, isTiny, isXTiny, isDoubleBase, isHeaderHeight, }) => {
    const tempSize = isXTiny ? sizes.TinyMargin / 2 :
        isTiny ? sizes.TinyMargin :
            isSmall ? sizes.smallMargin :
                isBasic ? sizes.baseMargin :
                    isDoubleBase ? sizes.doubleBaseMargin :
                        isHeaderHeight ? sizes.headerHeight : sizes.baseMargin
    const defaultHeight = !horizontal ? height || tempSize : 0
    const defaultWidth = (horizontal || width) ? width || tempSize : 0
    return (
        <TempSpacer height={defaultHeight} width={defaultWidth} style={style} />
    );
}

export const Divider = ({ style }) => (
    <TempSpacer width="100%" height={.8} style={[{ backgroundColor: Colors.border3, alignSelf: 'center', }, style]} />
)
