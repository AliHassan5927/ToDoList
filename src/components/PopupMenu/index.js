import React from 'react';
import { StyleSheet } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger, } from 'react-native-popup-menu';
import { RegularText, Wrapper } from '..';
import { Colors } from '@constants';

export const PopUpMenu = ({
    children,
    list = [],
    containerStyle,
    menuStyle = {},
}) => {

    return (
        <Menu style={{ ...containerStyle }}>

            <MenuTrigger>
                {children}
            </MenuTrigger>

            <MenuOptions
                optionsContainerStyle={[styles.optionContainer, { ...menuStyle }]}
            >
                {list.map((e) => {
                    return (
                        < MenuOption
                            key={e?.id}
                            onSelect={e?.onPress}
                            style={{ paddingVertical: 7 }}
                        >
                            <Wrapper style={styles.row}>
                                {
                                    e?.icon &&
                                    <e.icon color={e.title == 'Edit' ? Colors.primary : Colors.error} />
                                }

                                <RegularText
                                    style={[styles.title, { ...e?.textStyle }]}>
                                    {e?.title}
                                </RegularText>
                            </Wrapper>
                        </MenuOption>
                    )
                })
                }
            </MenuOptions>

        </Menu>
    )
}

const styles = StyleSheet.create({
    optionContainer: {
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 0.3,
        width: 'auto'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        marginLeft: 10,
    }
})