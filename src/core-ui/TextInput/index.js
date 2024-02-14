import React from 'react'
import { TextInput as RNTextInput } from 'react-native'

export const TextInput = ({ value, onChangeText, placeholder, placeholderTextColor, editable, autoFocus, keyboardType, style, multiline, secureTextEntry, onEndEditing, onSubmitEditing, maxLength }) => {
    return (
        <RNTextInput
            onEndEditing={onEndEditing}
            style={style}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            autoFocus={autoFocus}
            secureTextEntry={secureTextEntry}
            value={value}
            cursorColor={'#999'}
            maxLength={maxLength}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            editable={editable}
            keyboardType={keyboardType}
        />
    )
}
