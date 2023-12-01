import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    message_item: {
        borderColor: "#DCE6FF",
        borderWidth: 1,
        borderRadius: 6,
        display: "block",
        padding: 20,
        marginBottom: 20
    },
    message_text: {
        color: "#152C61",
        fontSize: 16,
        fontWeight: "300",
        fontFamily: "Poppins-Light",
        marginBottom: 8
    },
    message_actions_container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        marginBottom: 16,
    },
    edit_message_text_action: {
        color: "#2C6BFF"
    },
    has_comment:{
        color: "#2C6BFF"
    },
    comment_author:{
        color: "rgba(0, 0, 0, 0.60)",
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal"
    },
    time_ago_container: {
        display: "flex",
        flexDirection: "row"
    },
    message_action: {
        marginRight: 8,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    message_action_text: {
        color: "#707070",
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    },
    add_comment_container: {
        borderColor: "#DCE6FF",
        display: "block",
        borderWidth: 1,
        borderRadius: 6,
        padding: 16,
        alignItems: "flex-end"
    },
    no_display_element: {
        display: "none"
    }, 
    block_display_element: {
        display: "block"
    }, 
    comment_input: {
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
    add_comment_button: {
        backgroundColor: "#2C6BFF",
        width: 190,
        height: 38,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    add_comment_button_text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Poppins-Medium"
    },
    edit_message_action_container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 16
    },
    edit_message_container:{
        alignSelf: "stretch",
    },  
    cancel_edit_message_button:{
        marginRight: 10
    },
    cancel_edit_message_button_text:{
        color: "rgba(0, 0, 0, 0.60)",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        fontWeight: "400",
    }, 
    update_message_button:{
        backgroundColor: "#2C6BFF",
        borderRadius: 6,
        width: 190,
        height: 38,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    update_message_button_text:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Poppins-Medium"
    },
    comment_list: {

    },
    comment_item: {

    },
    comment_button:{

    },
    disabled_button: {
        backgroundColor: "rgba(44, 107, 255, 0.50)"
    },
    active_input:{
        borderColor: "#6490FF"
    },
    message_action_text: {
        color: "#707070",
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    }
});

export { styles };