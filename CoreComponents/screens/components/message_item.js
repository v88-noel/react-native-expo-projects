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
    dashboard_container:{
        backgroundColor: "#FBFBFB",
        height: ScreenHeight
    },  
    top_navigation: {
        height: 48,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        justifyContent: "space-between",
        elevation: 5
    },
    page_title: {
        color: "#152C61",
        fontSize: 16,
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
        marginTop: 50,
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
    message_list:{
        width: "100%",
    },
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