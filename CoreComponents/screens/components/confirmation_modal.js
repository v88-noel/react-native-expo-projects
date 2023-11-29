import Modal from "react-native-modal";
import { Pressable, StyleSheet, Text, View, Image  } from "react-native";

export default function ConfirmationModal({is_visible, onReturnConfirmationModalResult, modal_type}) {

    const onPressCancelAction = () =>{
        onReturnConfirmationModalResult(false, modal_type);
    }
    
    const onPressAcceptAction = () =>{
        onReturnConfirmationModalResult(true, modal_type);
    }

    return (
        <Modal  isVisible={is_visible} style={styles.modal_container}>
            <View style={ styles.modal_content }>
                <Pressable style={styles.close_button} onPress={onPressCancelAction}>
                    <Image
                        source={require("../../assets/action_icons/cancel.png")}
                        fadeDuration={0}
                        style={{ width: 24, height: 24 }}
                    />
                </Pressable>

                <Text style={styles.modal_title}>Confirm Delete {modal_type.charAt(0).toUpperCase() + modal_type.slice(1)}</Text>
                
                <View style={styles.modal_confirmation_message_container}>
                    <Text style={styles.modal_confirmation_message}>Are you sure you want to remove this {modal_type}? This action cannot be undone.</Text>
                </View>

                <View style={styles.modal_action_container}>
                    <Pressable style={styles.modal_cancel_button} onPress={onPressCancelAction}>
                        <Text style={styles.modal_cancel_button_text}>Cancel</Text>
                    </Pressable>

                    <Pressable style={styles.modal_accept_button} onPress={onPressAcceptAction}>
                        <Text  style={styles.modal_accept_button_text}>Yes, remove it.</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

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
})
