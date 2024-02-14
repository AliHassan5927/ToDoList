import { Colors } from "@constants";
import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})


