import { FontFamily } from '@assets/Fonts';
import { Colors, fontSize } from '@constants';
import { height } from '@services/dimensions';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, TouchableOpacity } from 'src/core-ui';
import { ComponentWrapper, RowWrapperBasic, Wrapper, } from '../Wrappers';

export const TextInputBordered = ({
  autoFocus, error, left, onPress, onPressRight, content, keyboardType, isButton,
  placeholder, editable = true, multiline, buttonContentStyle, onChangeText,
  secureTextEntry, value, containerStyle, inputContainerStyle, inputStyle, right,
  onEndEditing, onSubmitEditing, rightStyles, title, titleStyle,
  errorStyle, maxLength, style, placeholderColor, colored, height
}) => {
  return (
    <Wrapper style={style}>
      {title && (
        <Text
          color={Colors.text2}
          style={[styles.title, titleStyle]}>
          {title}
        </Text>
      )}
      <TouchableOpacity onPress={onPress}>
        <Wrapper
          style={[
            styles.textInputBorderedContainer,
            {
              height: height ? height : multiline ? height(120) : height(45),
              backgroundColor: colored ? Colors.background5 : 'transparent',
              borderWidth: colored ? 0 : 1
            },
            containerStyle,
          ]}>
          <RowWrapperBasic
            style={[
              {
                borderRadius: sizes.inputRadius,
                borderWidth: 0,
              },
              inputContainerStyle,
            ]}>
            {left ? (
              <View style={{ marginStart: width(3), marginEnd: width(2) }}>
                {left}
              </View>
            ) : null}
            <View style={{ flex: 8, }}>
              {isButton ? (
                content ? (
                  content
                ) : (
                  <Wrapper style={[{}, buttonContentStyle]}>
                    <RegularText
                      style={[styles.inputButtonText]}
                      color={value ? Colors.textColor1 : Colors.textColor2}>
                      {value ? value : placeholder}
                    </RegularText>
                  </Wrapper>
                )
              ) : (
                <TextInput
                  maxLength={maxLength}
                  onSubmitEditing={onSubmitEditing}
                  onEndEditing={onEndEditing}
                  autoFocus={autoFocus}
                  onChangeText={onChangeText}
                  value={value}
                  placeholder={placeholder}
                  editable={editable}
                  keyboardType={keyboardType}
                  multiline={multiline}
                  placeholderTextColor={placeholderColor ? placeholderColor : Colors.text8}
                  secureTextEntry={secureTextEntry}
                  style={[styles.inputField, { height: multiline ? height(12) : height(16) }, inputStyle,]}
                />
              )}
            </View>
            {right ? (
              <TouchableOpacity
                onPress={onPressRight}
                style={[{ marginEnd: 15 }, rightStyles]}>
                {right}
              </TouchableOpacity>
            ) : null}
          </RowWrapperBasic>
        </Wrapper>
        {error ? (
          <ComponentWrapper
            style={[styles.error, errorStyle]}
            animation="shake">
            <Text
              style={{
                color: Colors.error,
                fontFamily: fontFamily.InterRegular,
              }}>
              {error}
            </Text>
          </ComponentWrapper>
        ) : null}
      </TouchableOpacity>
    </Wrapper>
  );
};


const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 0,
  },
  inputBordered: {
    borderWidth: 2,
  },
  textInputBorderedContainer: {
    height: height(12),
    justifyContent: 'center',
    borderColor: Colors.border1,
    borderRadius: 15,
  },
  inputField: {
    fontFamily: FontFamily.LatoRegular,
    fontSize: fontSize.regular,
    color: Colors.text2,
    marginStart: 15,
    textAlignVertical: 'top'
  },
  inputButtonText: {
    fontFamily: FontFamily.LatoRegular,
    fontSize: fontSize.regular,
  },
  title: {
    fontFamily: FontFamily.regular,
    fontSize: fontSize.regular,
    color: Colors.text2,
    marginBottom: 4
  },
  error: {
    marginLeft: 0,
    marginTop: 2,
  },

});
