import React, {useState, useRef} from "react";
import { Pressable, StyleSheet, Text, TextInput, View, Dimensions, Image  } from "react-native";
import CommentItem from "./comment_item";
import ConfirmationModal from "./confirmation_modal";

export default function message_item({message_data, updateMessageContent, addComment, updateComment, deleteMessage, deleteComment}) {

    const [update_message_input_value, setUpdateMessageInputValue] = useState(message_data.message_content);
    const [add_comment_input_value, setAddCommentInputValue] = useState("");
    const [is_add_comment_active, setAddCommentActive] = useState(false);
    const [is_editing_message, setEditingMessage] = useState(false);
    const [modal_type, setModalType] = useState("");
    const [comment_id_to_delete, setCommentIDToDelete] = useState(null);

    const [is_confirmation_modal_visible, setConfirmationModalVisible] = useState(false);

    const onSubmitUpdateMessage = () =>{   
        updateMessageContent(message_data.id, update_message_input_value);
        setEditingMessage(false);
    }
    
    const onSubmitAddComment = () => {
        addComment(message_data.id, add_comment_input_value);
        setAddCommentInputValue("");
    }

    const onReturnConfirmationModalResult = (result, modal_type) => {
        console.log("modal_type", modal_type)
        if(result && modal_type === "message"){
            deleteMessage(message_data.id);
        }else if(result && modal_type === "comment"){
            deleteComment(message_data.id, comment_id_to_delete);
        }

        setConfirmationModalVisible(false);
    }

    return (
        <View style={styles.message_item}>
            <View style={[(is_editing_message) ? styles.no_display_element : ""]}>
                <Text style={styles.message_text}>{message_data.message_content}</Text>
                <View style={styles.message_actions_container}>
                    <Pressable style={[styles.comment_button, styles.message_action]} onPress={()=>setAddCommentActive(!is_add_comment_active)}>
                        <Image
                            source={  (message_data.comments.length) ? require("../../assets/action_icons/messages-bubble-square-text-active.png") : require("../../assets/action_icons/messages-bubble-square-text.png")}
                            fadeDuration={0}
                            style={{ width: 24, height: 24 }}
                        />
                        <Text style={[styles.comment_count_text, styles.message_action_text, (message_data.comments.length) ? styles.has_comment : ""]}><Text style={styles.comment_count}> {message_data.comments.length}</Text> comment</Text>
                    </Pressable>
                    <Pressable style={[styles.comment_button, styles.message_action]} onPress={()=>setEditingMessage(!is_editing_message)}>
                        <Image
                            source={require("../../assets/action_icons/pencil-write.png")}
                            fadeDuration={0}
                            style={{ width: 30, height: 30 }}
                        />
                        <Text style={[styles.message_action_text, styles.edit_message_text_action ]}>Edit</Text>
                    </Pressable>
                    <Pressable style={[styles.comment_button, styles.message_action]}>
                        <Image
                            source={require("../../assets/action_icons/delete.png")}
                            fadeDuration={0}
                            style={{ width: 24, height: 24 }}
                        />
                        <Text 
                            style={[styles.message_action_text]} 
                            onPress={()=>{
                                setConfirmationModalVisible(true);
                                setModalType("message");
                            }}>
                                Delete
                        </Text>
                    </Pressable>
                    <View style={styles.time_ago_container}>
                        <Image 
                            source={require("../../assets/action_icons/user_placeholder.png")}
                            fadeDuration={0}
                            style={{ width: 24, height: 24 }}
                        />
                        <Text style={styles.comment_author}>You</Text>
                        <Text style={[styles.time_ago, styles.message_action_text]} > - Few seconds ago</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.edit_message_container, (is_editing_message) ? "" : styles.no_display_element]}>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.comment_input}
                    value={update_message_input_value}
                    placeholder="Type your message here"
                    placeholderTextColor={"rgba(21, 44, 97, 0.50)"}
                    onChangeText={(text)=>setUpdateMessageInputValue(text)}
                />
                <View style={[styles.edit_message_action_container]}>
                    <Pressable style={styles.cancel_edit_message_button} onPress={()=>setEditingMessage(false)}>
                        <Text style={styles.cancel_edit_message_button_text}>Cancel</Text>
                    </Pressable>                   
                    <Pressable style={styles.update_message_button} onPress={onSubmitUpdateMessage}>
                        <Text style={styles.update_message_button_text}>Update Message </Text>
                    </Pressable>
                </View>
            </View>
            <View style={(is_add_comment_active) ? styles.add_comment_container : styles.no_display_element}>
                <TextInput
                    multiline={true}
                    maxLength={100}
                    numberOfLines={4}
                    style={styles.comment_input}
                    value={add_comment_input_value}
                    placeholder="Type your comment here"
                    placeholderTextColor={"rgba(21, 44, 97, 0.50)"}
                    onChangeText={(text)=>setAddCommentInputValue(text)}
                />
                <Pressable style={styles.add_comment_button} onPress={onSubmitAddComment}>
                    <Text style={styles.add_comment_button_text}>Post Comment</Text>
                </Pressable>
            </View>
            <View style={[styles.comment_list, (is_add_comment_active) ? "" : styles.no_display_element]}> 
                {
                    message_data.comments.map((comment_data)=>
                        <CommentItem 
                            message_id={message_data.id}
                            comment_data={comment_data} 
                            updateComment={updateComment}
                            key={comment_data.id + 1}     
                            setConfirmationModalVisible={setConfirmationModalVisible}      
                            setCommentIDToDelete={setCommentIDToDelete}
                            setModalType={setModalType}               
                        />
                    )
                }          
            </View>

            <ConfirmationModal 
                is_visible={is_confirmation_modal_visible} 
                onReturnConfirmationModalResult={onReturnConfirmationModalResult} 
                modal_type={modal_type}
            />
        </View>
    )
}

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
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
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

    }
      
});