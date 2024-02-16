import { StyleSheet } from "react-native"
import { Colors, fontSize } from "@constants"
import { FontFamily } from "@assets/Fonts"
import { Text } from "src/core-ui"


export const SmallText = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.smallText, style]}
            {...props}
        >
            {children}
        </Text>
    )
}
export const RegularText = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.regularText, style]}
            {...props}
        >
            {children}
        </Text>
    )
}
export const MediumText = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.mediumText, style]}
            {...props}
        >
            {children}
        </Text>
    )
}
export const LargeText = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.largeText, style]}
            {...props}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({

    smallText: {
        fontSize: fontSize.small,
        color: Colors.text1,
        fontFamily: FontFamily.light
    },
    regularText: {
        fontSize: fontSize.regular,
        color: Colors.text1,
        fontFamily: FontFamily.regular
    },
    mediumText: {
        fontSize: fontSize.medium,
        color: Colors.text1,
        fontFamily: FontFamily.medium
    },
    largeText: {
        fontSize: fontSize.large,
        color: Colors.text1,
        fontFamily: FontFamily.semiBold
    }
})