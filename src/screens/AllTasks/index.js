import { Spacer } from '@components/Spacers'
import { RegularText } from '@components/Texts'
import { MainWrapper } from '@components/Wrappers'
import React from 'react'
import { StyleSheet } from 'react-native'

const AllTasks = () => {
    return (
        <MainWrapper>
            <Spacer isBasic />
            <RegularText>All Tasks</RegularText>
        </MainWrapper>
    )
}

export default AllTasks

const styles = StyleSheet.create({})