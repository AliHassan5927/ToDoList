import { Spacer } from '@components/Spacers'
import { RegularText } from '@components/Texts'
import { MainWrapper } from '@components/Wrappers'
import React from 'react'
import { StyleSheet } from 'react-native'

const CreateTask = () => {
    return (
        <MainWrapper>
            <Spacer isBasic />
            <RegularText>Create Task</RegularText>
        </MainWrapper>
    )
}

export default CreateTask

const styles = StyleSheet.create({})