import { TaskHeader } from '@components/Headers'
import { Spacer } from '@components/Spacers'
import { MediumText, RegularText } from '@components/Texts'
import { MainWrapper } from '@components/Wrappers'
import moment from 'moment'
import React from 'react'
import Share from 'react-native-share'

const TaskDetail = ({ route }) => {
    const { item } = route?.params ?? {}
    const { title, description, dueDate, category } = item

    const handle_share = () => {
        let options = {
            title: title + `${category} category`,
            message: description
        }
        Share.open(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <MainWrapper>
            <Spacer isBasic />
            <TaskHeader onPressShare={handle_share} />
            <MediumText>{'Title'}</MediumText>
            <RegularText>{title}</RegularText>
            <Spacer isDoubleBase />
            <MediumText>{'Description'}</MediumText>
            <RegularText>{description}</RegularText>
            <Spacer isDoubleBase />
            <MediumText>{'Due date'}</MediumText>
            <RegularText>{moment(dueDate)?.format('MM/DD/YYYY')}</RegularText>
            <Spacer isDoubleBase />
            <MediumText>{'Category'}</MediumText>
            <RegularText>{category}</RegularText>
        </MainWrapper>
    )
}

export default TaskDetail
