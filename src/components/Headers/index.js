import { FontFamily } from "@assets/Fonts";
import { Back, Shares } from "@assets/Svgs";
import { Colors } from "@constants";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "src/core-ui";
import { MediumText, RowWrapper, Wrapper } from "..";

export const TaskHeader = ({ title, style, onPressShare, }) => {
    const navigation = useNavigation();
    return (
        <Wrapper style={[styles.container, style]}>
            <RowWrapper>
                <TouchableOpacity style={{}} onPress={() => navigation?.goBack()}>
                    <Back />
                </TouchableOpacity>
                <MediumText style={styles.buttonTxt}>{title}</MediumText>
                {onPressShare ? <View style={styles.right}>
                    <Shares onPress={onPressShare} color={Colors.primary} height='30' width='30' />
                </View>
                    : <View style={styles.right} />}
            </RowWrapper>
        </Wrapper>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom: 15
    },
    buttonTxt: {
        fontFamily: FontFamily.semiBold,
        color: Colors.text2,
        marginLeft: 15,
        fontSize: 16.5,
        flex: 1,

    },
    right: {
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    delete: {
        marginLeft: 13
    }
})