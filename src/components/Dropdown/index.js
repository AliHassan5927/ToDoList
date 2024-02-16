import React from 'react';
import { StyleSheet } from 'react-native';
import ErrorMessage from '@components/ErrorMessage';
import { Colors } from '@constants';
import { height } from '@services/dimensions';
import { Controller } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import { MediumText, Wrapper } from '..';

export const CustomDropdown = ({
    control,
    name,
    list,
    disable,
    placeholder,
    errorMessage,
    contianerStyle,
    title
}) => {

    return (
        <Wrapper>
            <MediumText style={styles.title}>{title}</MediumText>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value, onBlur } }) => (

                    <Dropdown
                        data={list}
                        disable={disable}
                        labelField="label"
                        valueField="value"
                        placeholder={placeholder}
                        value={value}
                        onBlur={onBlur}
                        onChange={item => {
                            onChange(item.value);
                        }}
                        style={[styles.container, { ...contianerStyle }]}
                        placeholderStyle={{ color: Colors.text3 }}
                        inputSearchStyle={styles.inputSearch}
                        selectedTextStyle={styles.selectedText}
                        itemTextStyle={{ color: Colors.text1 }}
                        itemContainerStyle={{ marginVertical: -7 }}
                    />

                )}
            />

            <ErrorMessage message={errorMessage} style={{ marginTop: 5 }} />

        </Wrapper>
    )
}
const styles = StyleSheet.create({
    container: {
        height: height(7),
        borderBottomWidth: .9,
    },
    inputSearch: {
        color: Colors.text3
    },
    selectedText: {
        color: Colors.text1,
    },
    title: {
        marginBottom: -10
    }
})