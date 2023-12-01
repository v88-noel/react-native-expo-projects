import { StyleSheet, Dimensions } from "react-native";
import { DEVICE_HEIGHT } from "../../config/constants";

const styles = StyleSheet.create({
    dashboard_container:{
        backgroundColor: "#FBFBFB",
        height: DEVICE_HEIGHT
    },  
    top_navigation: {
        height: 64,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 16,
        justifyContent: "space-between",
        elevation: 8,
        position: "sticky",
        top: 0,
        borderBottomColor: "#DCE6FF",
        borderBottomWidth: 1
    },
    page_title: {
        color: "#152C61",
        fontSize: 20,
        fontWeight: "500"
    },
    logout_button: {
        color: "#2C6BFF",
        fontSize: 16,
        fontWeight: "600"
    },
    logout_text: {
        color: "#2C6BFF",
        fontSize: 16,
        fontWeight: "600"
    },
    message_count_text:{
        color: "#707070",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        fontSize: 16,
        width: "100%",
        justifyContent: "center",
        display: "flex"
    },
    number_of_message:{
        color: "#2C6BFF",
        width: "100%",
        justifyContent: "center",
        display: "flex"
    },
    message_count_container:{
        marginBottom: 8,
        display: "flex",
        textAlign: "center"
    },
    message_container:{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 28,
        backgroundColor: "#fff",
        elevation: 5,
        padding: 16
    },
    create_message_button: {
        backgroundColor: "#2C6BFF",
        width: 190,
        height: 38,
        borderRadius: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    create_message_button_text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
    },
    add_message_container: {
        display: "flex",
        alignItems: "flex-end",
        padding: 16,
        backgroundColor: "#fff",
        borderTopColor: "#DCE6FF",
        borderTopWidth: 1
    },
    add_message_input: {
        width: "100%",
        padding: 8,
        borderWidth: 1,
        backgroundColor: "#F5F8FF",
        borderColor: "#DCE6FF",
        borderRadius: 6,
        color: "#152C61",
        fontSize: 16,
        fontWeight: "300",
        fontFamily: "Poppins-Light",
        alignSelf: "stretch",
        marginBottom: 16,
        textAlignVertical: "top"
        
    },
    add_message_button: {
        width: 190,
        height: 38,
        borderRadius: 6,
        backgroundColor: "#2C6BFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    add_message_button_label: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
    },
    disabled_button: {
        backgroundColor: "rgba(44, 107, 255, 0.50)"
    },
    active_input:{
        borderColor: "#6490FF"
    }
});

export { styles };