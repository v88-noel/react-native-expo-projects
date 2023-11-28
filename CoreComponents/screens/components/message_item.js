import React from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View, Dimensions, Image  } from 'react-native';

let ScreenHeight = Dimensions.get("window").height;

export default function message_item({message_data}) {
    


    return (
        <View style={styles.message_item}>
            <Text style={styles.message_text}>{message_data.message_content}</Text>

            <View style={styles.message_actions_container}>
                <Pressable style={[styles.comment_button, styles.message_action]}>
                    <Image
                        source={require("../../assets/action_icons/messages-bubble-square-text.png")}
                        fadeDuration={0}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={[styles.comment_count_text, styles.message_action_text]}><Text style={styles.comment_count}>0</Text> comment</Text>
                </Pressable>

                <Pressable style={[styles.comment_button, styles.message_action]}>
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
                    <Text style={[styles.message_action_text]}>Delete</Text>
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
    )
}


const styles = StyleSheet.create({
  
    message_item: {
        borderColor: "#DCE6FF",
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
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
    },
    edit_message_text_action: {
        color: "#2C6BFF"
    },
    comment_button: {

    },
    comment_count_text: {

    },
    comment_count: {

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
    }
    
    
});