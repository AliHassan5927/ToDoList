import { TouchableOpacity as RNTouchableOpacity } from 'react-native'
import React from 'react'

export const TouchableOpacity = ({ onPress, children, disabled, style, childkey, activeOpacity }) => {
    return (
        <RNTouchableOpacity
            key={childkey}
            style={style}
            onPress={onPress}
            disabled={disabled}
            hitSlop={{
                right: 8, top: 8, left: 8, bottom: 8
            }}
            activeOpacity={activeOpacity ?? .8}>
            {children}
        </RNTouchableOpacity>
    )
}
