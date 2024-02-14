import { Spacer } from '@components/Spacers'
import { RegularText } from '@components/Texts'
import { MainWrapper } from '@components/Wrappers'
import React from 'react'
import { StyleSheet } from 'react-native'

const TaskDetail = () => {
    return (
        <MainWrapper>
            <Spacer isBasic />
            <RegularText>Task detail</RegularText>
        </MainWrapper>
    )
}

export default TaskDetail

const styles = StyleSheet.create({})