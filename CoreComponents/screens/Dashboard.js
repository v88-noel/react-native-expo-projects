import React, {useState, useEffect} from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View, Dimensions, Image, ScrollView  } from 'react-native';
import wall_data from "../assets/data.json";
import ImageItem from './components/message_item';
import { useFonts } from "expo-font";

let ScreenHeight = Dimensions.get("window").height;

export default function Dashboard({navigation}) {
    const [message_list, setMessageList] = useState(wall_data); 
    const [add_message_input_value, setAddMessageInputValue] = useState("")

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
    
    return (
        <>
            <View style={styles.top_navigation} >
                <Text style={styles.page_title}>The Wall Assignment</Text>       
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
                                />
                            )
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={styles.add_message_container} >
                <TextInput
                    multiline={true}
                    numberOfLines={3}
                    style={styles.add_message_input}
                    placeholder="Type your message here"
                    placeholderTextColor={"rgba(21, 44, 97, 0.50)"}
                    value={add_message_input_value}
                    onChangeText={(Text)=>setAddMessageInputValue(Text)}
                />
                <Pressable style={[styles.add_message_button, (add_message_input_value.length) ? "" : styles.disabled_button ]} onPress={addNewMessage}>
                    <Text style={styles.add_message_button_label}>Add Message</Text>
                </Pressable>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    dashboard_container:{
        backgroundColor: "#FBFBFB",
        height: ScreenHeight
    },  
    top_navigation: {
        height: 64,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 16,
        justifyContent: "space-between",
        elevation: 8,
        position: "sticky",
        top: 0,
        borderBottomColor: "#DCE6FF",
        borderBottomWidth: 1
    },
    page_title: {
        color: "#152C61",
        fontSize: 20,
        fontWeight: "500"
    },
    logout_button: {
        color: "#2C6BFF",
        fontSize: 16,
        fontWeight: "600"
    },
    logout_text: {
        color: "#2C6BFF",
        fontSize: 16,
        fontWeight: "600"
    },
    message_count_text:{
        color: "#707070",
        fontFamily: "Poppins-Regular",
        fontWeight: "400",
        fontSize: 16,
        width: "100%",
        justifyContent: "center",
        display: "flex"
    },
    number_of_message:{
        color: "#2C6BFF",
        width: "100%",
        justifyContent: "center",
        display: "flex"
    },
    message_count_container:{
        marginBottom: 8,
        display: "flex",
        textAlign: "center"
    },
    message_container:{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 28,
        backgroundColor: "#fff",
        elevation: 5,
        padding: 16
    },
    create_message_button: {
        backgroundColor: "#2C6BFF",
        width: 190,
        height: 38,
        borderRadius: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    create_message_button_text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
    },
    add_message_container: {
        display: "flex",
        alignItems: "flex-end",
        padding: 16,
        backgroundColor: "#fff",
        borderTopColor: "#DCE6FF",
        borderTopWidth: 1
    },
    add_message_input: {
        width: "100%",
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
    add_message_button: {
        width: 190,
        height: 38,
        borderRadius: 6,
        backgroundColor: "#2C6BFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    add_message_button_label: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Poppins-Medium",
    },
    disabled_button: {
        backgroundColor: "rgba(44, 107, 255, 0.50)"
    }
});