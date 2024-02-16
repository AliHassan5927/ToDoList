import { FontFamily } from "@assets/Fonts"
import { Colors } from "@constants"
import { height } from "@services/dimensions"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    buttonColored: {
        height: height(7),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.button1,
        borderRadius: 30,
        width: '60%',
        alignSelf: 'center'
    },
    buttonTxt: {
        fontFamily: FontFamily.bold,
        color: Colors.white,
        fontSize: 16
    },
})

