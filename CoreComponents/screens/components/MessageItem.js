import React, {useState} from "react";
import { Pressable, Text, TextInput, View, Image  } from "react-native";
import CommentItem from "./CommentItem";
import ConfirmationModal from "./ConfirmationModal";
import { styles } from "../../assets/styles/message_item_styles";
import { IMAGE_FADE_DURATION } from "../../config/constants";
import { useUpdateData } from "../../config/AppContext";

export default function MessageItem({message_data, navigation}) {

    const [update_message_input_value, setUpdateMessageInputValue] = useState(message_data.message_content);
    const [add_comment_input_value, setAddCommentInputValue] = useState("");
    const [is_add_comment_active, setAddCommentActive] = useState(false);
    const [is_editing_message, setEditingMessage] = useState(false);
    const [modal_type, setModalType] = useState("");
    const [comment_id_to_delete, setCommentIDToDelete] = useState(null);
    const [is_confirmation_modal_visible, setConfirmationModalVisible] = useState(false);
    const [is_add_comment_input_active, setAddCommentInputActive] = useState(false);

    const deleteMessage = useUpdateData().deleteMessage;
    const addComment = useUpdateData().addComment;
    const updateMessageContent = useUpdateData().updateMessageContent;
    const deleteComment = useUpdateData().deleteComment;

    const onSubmitUpdateMessage = () =>{   
        updateMessageContent(message_data.id, update_message_input_value);
        setEditingMessage(false);
    }
    
    const onSubmitAddComment = () => {
        addComment(message_data.id, add_comment_input_value);
        setAddCommentInputValue("");
    }

    const onReturnConfirmationModalResult = (result, modal_type) => {

        if(result && modal_type === "message"){
            deleteMessage(message_data.id);
        }else if(result && modal_type === "comment"){
            deleteComment(message_data.id, comment_id_to_delete);
        }

        setConfirmationModalVisible(false);
    }

    return (
        <Pressable style={styles.message_item} onPress={()=>navigation.navigate("Message", {data: message_data})}>
            <View style={[(is_editing_message) ? styles.no_display_element : ""]}>
                <Text style={styles.message_text}>{message_data.message_content}</Text>
                <View style={styles.message_actions_container}>
                    <Pressable style={[styles.comment_button, styles.message_action]} onPress={()=>setAddCommentActive(!is_add_comment_active)}>
                        <Image
                            source={  (message_data.comments.length) ? require("../../assets/action_icons/messages-bubble-square-text-active.png") : require("../../assets/action_icons/messages-bubble-square-text.png")}
                            fadeDuration={IMAGE_FADE_DURATION}
                            style={{ width: 24, height: 24 }}
                        />
                        <Text style={[styles.comment_count_text, styles.message_action_text, (message_data.comments.length) ? styles.has_comment : ""]}><Text style={styles.comment_count}> {message_data.comments.length}</Text> comment</Text>
                    </Pressable>
                    <Pressable style={[styles.comment_button, styles.message_action]} onPress={()=>setEditingMessage(!is_editing_message)}>
                        <Image
                            source={require("../../assets/action_icons/pencil-write.png")}
                            fadeDuration={IMAGE_FADE_DURATION}
                            style={{ width: 30, height: 30 }}
                        />
                        <Text style={[styles.message_action_text, styles.edit_message_text_action ]}>Edit</Text>
                    </Pressable>
                    <Pressable style={[styles.comment_button, styles.message_action]}>
                        <Image
                            source={require("../../assets/action_icons/delete.png")}
                            fadeDuration={IMAGE_FADE_DURATION}
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
                            fadeDuration={IMAGE_FADE_DURATION}
                            style={{ width: 24, height: 24 }}
                        />
                        <Text style={styles.comment_author}> You</Text>
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
                    <Pressable style={[styles.update_message_button, (update_message_input_value.length) ? "" : styles.disabled_button]} onPress={onSubmitUpdateMessage}>
                        <Text style={styles.update_message_button_text}>Update Message </Text>
                    </Pressable>
                </View>
            </View>
            <View style={(is_add_comment_active) ? styles.add_comment_container : styles.no_display_element}>
                <TextInput
                    multiline={true}
                    style={[styles.comment_input, (is_add_comment_input_active) ? styles.active_input : ""]}
                    value={add_comment_input_value}
                    placeholder="Type your comment here"
                    placeholderTextColor={"rgba(21, 44, 97, 0.50)"}
                    onChangeText={(text)=>setAddCommentInputValue(text)}
                    onFocus={()=>setAddCommentInputActive(true)}
                    onBlur={()=>setAddCommentInputActive(true)}
                />
                {
                    (is_add_comment_input_active) ? 
                        (
                            <Pressable 
                                style={[styles.add_comment_button, (add_comment_input_value.length) ? "" : styles.disabled_button]} 
                                onPress={onSubmitAddComment}
                            >
                                <Text style={styles.add_comment_button_text}>Post Comment</Text>
                            </Pressable>      
                        )
                    : ""
                }
              
            </View>
            <View style={[styles.comment_list, (is_add_comment_active) ? "" : styles.no_display_element]}> 
                {
                    message_data.comments.map((comment_data)=>
                        <CommentItem 
                            message_id={message_data.id}
                            comment_data={comment_data} 
                            key={comment_data.id}     
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
        </Pressable>
    )
}
