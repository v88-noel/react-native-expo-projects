import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    comment_item:{
        borderColor: "#DCE6FF",
        borderRadius: 6,
        borderWidth: 1,
        padding: 16,
        paddingBottom: 0,
        marginTop: 16
    },
    comment_text:{
        color: "#152C61",
        fontFamily: "Poppins-Light",
        paddingBottom: 8,
        fontSize: 16
    },
    comment_actions_container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        flexWrap: "wrap",
        marginBottom: 16,
    },
    edit_comment_text_action: {
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
    comment_action: {
        marginRight: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    comment_action_text: {
        color: "#707070",
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    },
    no_display_element: {
        display: "none"
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
    update_comment_input: {
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
    disabled_button: {
        backgroundColor: "rgba(44, 107, 255, 0.50)"
    }
    
});

export { styles };