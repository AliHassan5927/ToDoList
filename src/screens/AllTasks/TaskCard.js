import { FontFamily } from '@assets/Fonts'
import { Delete, Edit, Option } from '@assets/Svgs'
import { PopUpMenu } from '@components/PopupMenu'
import { MediumText, RegularText, SmallText } from '@components/Texts'
import { RowWrapper, Wrapper } from '@components/Wrappers'
import { Colors, sizes } from '@constants'
import { getCategoryColor } from '@services/helpers'
import { appStyles } from '@services/utils'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'src/core-ui'

export const TaskCard = ({ onPressEdit, onPressDelete, title, date, category, onPressCard }) => {
    const taskColor = getCategoryColor(category)
    const menuList = [
        {
            id: 1,
            title: 'Edit',
            icon: Edit,
            onPress: onPressEdit
        },
        {
            id: 2,
            title: 'Delete',
            icon: Delete,
            onPress: onPressDelete
        },
    ]
    return (
        <TouchableOpacity style={styles.container} onPress={onPressCard}>
            <Wrapper style={[[styles.indicator, { backgroundColor: taskColor }]]} />
            <RowWrapper>
                <RegularText style={[styles.title, { color: taskColor }]}>{category}</RegularText>
                <PopUpMenu list={menuList}>
                    <Option />
                </PopUpMenu>
            </RowWrapper>
            <MediumText>{title}</MediumText>
            <SmallText style={styles.date}>{date}</SmallText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...appStyles.shadow,
        padding: 12,
        borderRadius: 12,
        backgroundColor: Colors.background1

    },
    indicator: {
        height: sizes.cardRadius,
        width: sizes.inputRadius,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        position: "absolute",
        top: 12
    },
    date: {
        color: Colors.text2
    },
    title: {
        fontFamily: FontFamily.medium
    }
})