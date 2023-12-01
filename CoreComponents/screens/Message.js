import React, { useState } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "../assets/styles/message_styles";
import { COMMENT_ID_ADDEND } from "../config/constants";
import MessageItem from "./components/MessageItem";

export default function Message({navigation}) {
    const route = useRoute();
    const received_message_data = route.params?.data || {};

    const [message_list_data, setMessageList] = useState(received_message_data);

    const updateMessageContent = (message_id, new_content) => {
        if(new_content.length){
            setMessageList(previous_messages => (
                previous_messages.map(message => (
                    message.id === message_id ? { ...message, message_content: new_content } : message
                ))
            ));
        }
    };

    const addComment = (message_id, new_comment) => {
        if(new_comment.length){
            setMessageList(previous_messages => (
                previous_messages.map(message => (
                    message.id === message_id ? { 
                        ...message, comments: 
                            [{comment: new_comment, id: message.comments.length + COMMENT_ID_ADDEND}, ...message.comments] 
                        } : message
                ))
            ));
        }
    };

    const updateComment = (message_id, comment_id, updated_comment) => {
        if(updated_comment){
            setMessageList(previous_messages => (
                previous_messages.map(message => (
                    message.id === message_id ? {
                    ...message,
                        comments: message.comments.map(comment =>
                            comment.id === comment_id ? { ...comment, comment: updated_comment } : comment
                        )
                    } : message
                ))
            ));
        }
    };

    const deleteMessage = (message_id) => {
        setMessageList(previous_messages => previous_messages.filter(message => message.id !== message_id));
    };

    const deleteComment = (message_id, comment_id) => {
        setMessageList(previous_messages => (
            previous_messages.map(message => (
                message.id === message_id ? { ...message, comments: message.comments.filter(comment => comment.id !== comment_id) } : message
            ))
        ));
    };
    

    return (
        <View style={styles.message_container}>
            <MessageItem 
                key={received_message_data.id}
                message_data={received_message_data} 
                updateMessageContent={updateMessageContent} 
                addComment={addComment}
                updateComment={updateComment}
                deleteMessage={deleteMessage}
                deleteComment={deleteComment}
                navigation={navigation}
            />
        </View>
    )
}
