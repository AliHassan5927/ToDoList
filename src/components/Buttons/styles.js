import { StyleSheet } from "react-native"
import { fontFamily } from "../../constants"
import { normalize, width } from "../../services"

export const styles = StyleSheet.create({
    socialText: {
        width: width(60),
        alignItems: 'center'
    },
    buttonColored: {
        height: normalize(46),
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonBordered: {
        height: normalize(46),
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    buttonTxt: {
        fontSize: normalize(18),
        fontFamily: fontFamily.bold,
    },
    rounded: {
        borderRadius: 100,
    },


})

