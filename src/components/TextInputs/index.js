import { Calendar } from '@assets/Svgs'
import ErrorMessage from '@components/ErrorMessage'
import { Colors } from '@constants'
import { height, width } from '@services/dimensions'
import moment from 'moment'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { StyleSheet, TextInput } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { TouchableOpacity } from 'src/core-ui'
import { MediumText, RegularText, Wrapper } from '..'

export const Input = ({
  control,
  name,
  right,
  containerStyle,
  textStyle,
  errorMessage,
  multiline,
  editable,
  title,
  onPress,
  left,
  ...otherProps
}) => {

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur } }) => (
        <>
          {title &&
            <MediumText style={styles.title}>{title}</MediumText>}

          <TouchableOpacity onPress={onPress}
            style={[
              {
                borderBottomWidth: .9,
                justifyContent: 'center',
                height: height(6),
              },
              containerStyle
            ]}
          >
            {left &&
              <Wrapper
                style={styles.left}
              >
                {left}
              </Wrapper>
            }
            <TextInput
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              multiline={multiline}
              editable={editable}
              placeholderTextColor={Colors.placeholder}
              onpress
              onEndEditing={(event) => {
                // console.log('event', event)
                if (multiline && event.nativeEvent.contentSize) {
                  const newHeight = event?.nativeEvent?.contentSize?.height;
                  onChange(event?.nativeEvent.text);
                  event.target.style.height = newHeight + 20 + 'px';
                }
              }}
              style={{
                color: Colors.text2,
                ...textStyle,
              }}

              {...otherProps}
            />

            {right &&
              <Wrapper
                style={styles.right}
              >
                {right}
              </Wrapper>
            }

          </TouchableOpacity>

          <ErrorMessage message={errorMessage} style={{ marginTop: 5 }} />

        </>
      )}
    />
  )
}

export const DateTimeInputPicker = ({
  control,
  name,
  containerStyle,
  errorMessage,
  placeholder,
  disabled,
  title
}) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <Wrapper
        style={{ alignSelf: "center" }}
      >
        <MediumText style={styles.title}>{title}</MediumText>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, } }) => (
            <>
              <TouchableOpacity
                disabled={disabled}
                onPress={() => setShowPicker(true)}
                style={{
                  flexDirection: 'row',
                  height: 45,
                  // paddingHorizontal: 14,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: "100%",
                  borderBottomWidth: 0.9,
                  borderColor: Colors.border1,
                  padding: 0,
                  zIndex: 10,
                  borderRadius: 5,
                  ...containerStyle
                }}
              >
                <RegularText
                  style={{
                    color: value ? Colors.text1 : Colors.text3,
                    fontSize: 14,
                    padding: 0
                  }}
                >
                  {value ?
                    moment(new Date(value)).format('MM/DD/yyyy')
                    :
                    'Due date'
                  }
                </RegularText>
                <Calendar />
              </TouchableOpacity>

              <ErrorMessage message={errorMessage} />

              <DateTimePickerModal
                date={value ? new Date(value) : new Date()}
                isVisible={showPicker}
                mode="date"
                onConfirm={(val => {
                  setShowPicker(false);
                  onChange(val);
                })}
                onCancel={() => setShowPicker(false)}

              />

            </>
          )}
        />

      </Wrapper>
    </>
  );
}


const styles = StyleSheet.create({
  right: {
    position: 'absolute',
    right: width(3)
  },
  left: {
    position: 'absolute',
    left: width(3)
  },
  title: {
    marginBottom: -10
  }
})