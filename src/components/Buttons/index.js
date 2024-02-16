import { Colors } from '@constants'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Text, TouchableOpacity } from 'src/core-ui'
import { Wrapper } from '..'
import { styles } from './styles'

export const ButtonColered = ({ onPress, text, disabled, loading }) => {
    return (
        <TouchableOpacity
            disabled={disabled || loading}
            style={styles.buttonColored}
            onPress={onPress}>
            <Wrapper>
                {loading ? <ActivityIndicator color={Colors.white} />
                    : <Text style={styles.buttonTxt}>{text}</Text>}
            </Wrapper>
        </TouchableOpacity>
    )
}


