import {  StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modal_container:{

    },
    modal_content: {
        backgroundColor:"#fff", 
        padding: 16,
        borderRadius: 6
    },
    close_button:{
        alignSelf:"flex-end"
    },
    modal_title:{
        color:"#152C61",
        fontWeight: "500",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 16,
        fontFamily: "Poppins-Medium",
    },
    modal_confirmation_message:{
        color:"#152C61",
        fontSize: 14,
        textAlign: "center",  
        fontFamily: "Poppins-Regular",    
    },
    modal_confirmation_message_container: {
        marginBottom: 16,
        display: "block",
    },
    modal_action_container:{
        display: "flex",
        justifyContent:"flex-end",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 8
    },
    modal_cancel_button: {
        marginRight: 16
    },
    modal_cancel_button_text:{
        color: "rgba(0, 0, 0, 0.60)",
        fontSize: 16,
        fontWeight: "500"
    },
    modal_accept_button: {
        backgroundColor: "#2C6BFF",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6
    },
    modal_accept_button_text:{
        color: "#fff",
        fontSize: 16
    }
});

export { styles };