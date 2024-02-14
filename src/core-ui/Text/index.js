import { Text as RNText, StyleSheet } from "react-native";
import { FontFamily } from "@assets/Fonts";
import { Colors, fontSize } from "@constants";
import { width } from "@services/dimensions";

export const Text = ({ style, onPress, children, color, underlined }) => {
    return (
        <RNText
            style={[{ color: color, textDecorationLine: underlined ? 'underline' : 'none' }, style]}
            onPress={onPress}
        >
            {children}
        </RNText>
    );
}


const styles = StyleSheet.create({
    title: {
        fontFamily: FontFamily.InterBold,
        fontSize: fontSize.h5,
        color: Colors.text1,
        marginStart: width(8),
        marginTop: 24,
    },
    description: {
        marginStart: width(8),
        marginTop: 8,

    }
})