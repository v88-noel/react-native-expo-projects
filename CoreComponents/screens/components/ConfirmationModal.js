import Modal from "react-native-modal";
import { Pressable, StyleSheet, Text, View, Image  } from "react-native";
import { styles } from "../../assets/styles/confirmation_modal_styles";
import { IMAGE_FADE_DURATION } from "../../config/constants";

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
                        fadeDuration={IMAGE_FADE_DURATION}
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