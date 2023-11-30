import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, Dimensions, Image  } from 'react-native';
import {styles} from "../../assets/styles/comment_item_styles";

export default function CommentItem({comment_data, updateComment, message_id, setConfirmationModalVisible, setModalType, setCommentIDToDelete}) {
    const [is_editing_message, setEditingMessage] = useState(false);
    const [update_comment_input_value, setUpdateCommentInputValue] = useState(comment_data.comment);

    const onUpdateComment = () => {
        updateComment(message_id, comment_data.id, update_comment_input_value);
        setEditingMessage(false);
    }

    const onShowDeleteCommentModal = () => {
        setConfirmationModalVisible(true);
        setCommentIDToDelete(comment_data.id);
        setModalType("comment");
    }

    return (
        <View style={styles.comment_item}>

            <View style={[(is_editing_message) ? styles.no_display_element : ""]}>
                <Text style={styles.comment_text}>{comment_data.comment}</Text>
                <View>
                    <View style={styles.comment_actions_container}>                   
                            <Pressable style={[styles.comment_button, styles.comment_action]} onPress={()=>setEditingMessage(!is_editing_message)}>
                                <Image
                                    source={require("../../assets/action_icons/pencil-write.png")}
                                    fadeDuration={0}
                                    style={{ width: 30, height: 30 }}
                                />
                                <Text style={[styles.comment_action_text, styles.edit_comment_text_action ]}>Edit</Text>
                            </Pressable>
                            <Pressable style={[styles.comment_button, styles.comment_action]} onPress={onShowDeleteCommentModal}>
                                <Image
                                    source={require("../../assets/action_icons/delete.png")}
                                    fadeDuration={0}
                                    style={{ width: 24, height: 24 }}
                                />
                                <Text style={[styles.comment_action_text]}>Delete</Text>
                            </Pressable>

                            <View style={styles.time_ago_container}>
                                <Image 
                                    source={require("../../assets/action_icons/user_placeholder.png")}
                                    fadeDuration={0}
                                    style={{ width: 24, height: 24 }}
                                />
                                <Text style={styles.comment_author}> You</Text>
                            </View>
                    </View>
                </View>
            </View>

            <View style={[styles.edit_message_container, (is_editing_message) ? "" : styles.no_display_element]}>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.update_comment_input}
                    value={update_comment_input_value}
                    placeholder="Type your comment here"
                    placeholderTextColor={"rgba(21, 44, 97, 0.50)"}
                    onChangeText={(text)=>setUpdateCommentInputValue(text)}
                />
                <View style={[styles.edit_message_action_container]}>
                    <Pressable style={styles.cancel_edit_message_button} onPress={()=>setEditingMessage(false)}>
                        <Text style={styles.cancel_edit_message_button_text}>Cancel</Text>
                    </Pressable>                   
                    <Pressable style={styles.update_message_button} onPress={onUpdateComment}>
                        <Text style={styles.update_message_button_text}>Update Comment</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

//     comment_item:{
//         borderColor: "#DCE6FF",
//         borderRadius: 6,
//         borderWidth: 1,
//         padding: 16,
//         paddingBottom: 0,
//         marginTop: 16
//     },
//     comment_text:{
//         color: "#152C61",
//         fontFamily: "Poppins-Light",
//         paddingBottom: 8,
//         fontSize: 16
//     },
//     comment_actions_container:{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "flex-start",
//         alignItems: "flex-end",
//         flexWrap: "wrap",
//         marginBottom: 16,
//     },
//     edit_comment_text_action: {
//         color: "#2C6BFF"
//     },
//     comment_author:{
//         color: "rgba(0, 0, 0, 0.60)",
//         fontFamily: "Poppins-Medium",
//         fontSize: 16,
//         fontWeight: "500",
//         fontStyle: "normal"
//     },
//     time_ago_container: {
//         display: "flex",
//         flexDirection: "row"
//     },
//     comment_action: {
//         marginRight: 8,
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center"
//     },
//     comment_action_text: {
//         color: "#707070",
//         fontSize: 16,
//         fontFamily: "Poppins-Regular",
//     },
//     no_display_element: {
//         display: "none"
//     },
//     edit_message_action_container:{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "flex-end",
//         alignItems: "center",
//         marginBottom: 16
//     },
//     edit_message_container:{
//         alignSelf: "stretch",
//     },  
//     cancel_edit_message_button:{
//         marginRight: 10
//     },
//     cancel_edit_message_button_text:{
//         color: "rgba(0, 0, 0, 0.60)",
//         fontFamily: "Poppins-Regular",
//         fontSize: 16,
//         fontWeight: "400",
//     }, 
//     update_message_button:{
//         backgroundColor: "#2C6BFF",
//         borderRadius: 6,
//         width: 190,
//         height: 38,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     update_message_button_text:{
//         color: "#fff",
//         fontSize: 16,
//         fontWeight: "500",
//         fontFamily: "Poppins-Medium"
//     },
//     update_comment_input: {
//         padding: 8,
//         borderWidth: 1,
//         backgroundColor: "#F5F8FF",
//         borderColor: "#DCE6FF",
//         borderRadius: 6,
//         color: "#152C61",
//         fontSize: 16,
//         fontWeight: "300",
//         fontFamily: "Poppins-Light",
//         alignSelf: "stretch",
//         marginBottom: 16,
//         textAlignVertical: "top"
//     },
//     disabled_button: {
//         backgroundColor: "rgba(44, 107, 255, 0.50)"
//     }
    
// });
