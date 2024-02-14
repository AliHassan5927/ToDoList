import React from 'react'
import { ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { Text, TouchableOpacity } from 'src/core-ui'
import { Colors } from '@constants/Colors'
import { FontFamily } from '@assets/Fonts'
import { Wrapper } from '..'

export const ButtonColered = ({ onPress, text, disabled, loading, backgroundColor, style, rounded, primaryColored, titleStyle }) => {
    return (
        <TouchableOpacity
            disabled={disabled || loading}
            style={[styles.buttonColored, { opacity: disabled ? .9 : 1, backgroundColor: backgroundColor ? backgroundColor : primaryColored ? Colors.button2 : disabled ? Colors.button2 : Colors.button1, }, rounded && styles.rounded, style]}
            onPress={onPress}>
            <Wrapper style={styles.socialText}>
                {loading ? <ActivityIndicator color={Colors.text2} />
                    : <Text style={[styles.buttonTxt, titleStyle, disabled && { fontFamily: FontFamily.regular }]} color={primaryColored ? Colors.text2 : Colors.text1}>{text}</Text>}
            </Wrapper>
        </TouchableOpacity>
    )
}

export const ButtonBordered = ({ onPress, text, disabled, loading, borderColor, textColor, style, textStyle }) => {
    return (
        <TouchableOpacity
            disabled={disabled || loading}
            style={[styles.buttonBordered, { opacity: disabled ? .4 : 1, borderColor: borderColor ?? Colors.button1 }, style]}
            onPress={onPress}>
            {loading ? <ActivityIndicator color={textColor ?? Colors.textColor4} />
                : <Text style={[styles.buttonTxt, { color: textColor ?? Colors.text7, fontFamily: fontFamily.semiBold }, textStyle]} >{text}</Text>}
        </TouchableOpacity>
    )
}
