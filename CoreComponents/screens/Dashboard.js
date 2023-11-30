import React, { useState } from 'react'
import { Pressable,  Text, TextInput, View, ScrollView, Keyboard  } from 'react-native';
import wall_data from "../assets/data.json";
import ImageItem from "./components/MessageItem";
import { styles } from "../assets/styles/dashboard_styles";
import { useFonts } from "expo-font";

export default function Dashboard({navigation}) {
    const [message_list, setMessageList] = useState(wall_data); 
    const [add_message_input_value, setAddMessageInputValue] = useState("");
    const [is_add_message_active, setAddMessageActive] = useState(false);

    const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf")
	})

	if(!fontsLoaded){
		return undefined;
	}

    const updateMessageContent = (message_id, new_content) => {
        if(new_content.length){
            setMessageList(prevMessages => (
                prevMessages.map(message => (
                    message.id === message_id ? { ...message, message_content: new_content } : message
                ))
            ));
        }
    };

    const addComment = (message_id, new_comment) => {
        if(new_comment.length){
            setMessageList(prevMessages => (
                prevMessages.map(message => (
                    message.id === message_id ? { 
                        ...message, comments: 
                            [{comment: new_comment, id: message.comments.length+1}, ...message.comments] 
                        } : message
                ))
            ));
        }
    };

    const updateComment = (message_id, comment_id, updated_comment) => {
        if(updated_comment){
            setMessageList(prevMessages => (
                prevMessages.map(message => (
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

    const addNewMessage = () => {
        Keyboard.dismiss();

        const new_message = {
          "id": message_list.length + 1,
          "message_content": add_message_input_value,
          "comments": []
        };
        
        if(add_message_input_value.length){
            setMessageList(prevMessages => [...prevMessages, new_message]);
        }

        setAddMessageInputValue("");
    };

    const deleteMessage = (message_id) => {
        setMessageList(prevMessages => prevMessages.filter(message => message.id !== message_id));
    };

    const deleteComment = (message_id, comment_id) => {
        setMessageList(prevMessages => (
            prevMessages.map(message => (
                message.id === message_id ? { ...message, comments: message.comments.filter(comment => comment.id !== comment_id) } : message
            ))
        ));
    };
    
    return (
        <>
            <View style={styles.top_navigation} >
                <Text style={styles.page_title}>The Wall</Text>       
                <Pressable style={styles.logout_button} onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.logout_text}>Logout</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.dashboard_container} >
                <View style={styles.message_container}>
                    <View style={styles.message_count_container}>
                        <Text style={styles.message_count_text}>
                        <Text style={styles.number_of_message}>{message_list.length} </Text>messages arranges by latest posted
                        </Text>
                    </View>       
                    <View style={styles.message_list}>
                        {
                            message_list.map((message_data)=>
                                <ImageItem 
                                    key={message_data.id}
                                    message_data={message_data} 
                                    updateMessageContent={updateMessageContent} 
                                    addComment={addComment}
                                    updateComment={updateComment}
                                    deleteMessage={deleteMessage}
                                    deleteComment={deleteComment}
                                />
                            )
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={styles.add_message_container}>
                <TextInput
                    multiline={true}
                    numberOfLines={(is_add_message_active) ? 3 : 1}
                    style={[styles.add_message_input, (is_add_message_active) ? styles.active_input : ""]}
                    placeholder="Type your message here"
                    placeholderTextColor={"rgba(21, 44, 97, 0.50)"}
                    value={add_message_input_value}
                    onChangeText={(Text)=>setAddMessageInputValue(Text)}
                    onFocus={()=>setAddMessageActive(true)}
                    onBlur={()=>setAddMessageActive(false)}
                />
                <Pressable style={[styles.add_message_button, (add_message_input_value.length) ? "" : styles.disabled_button ]} onPress={addNewMessage}>
                    <Text style={styles.add_message_button_label}>Add Message</Text>
                </Pressable>
            </View>
        </>
    )
}
