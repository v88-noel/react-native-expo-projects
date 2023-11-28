import React, {useState} from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View, Dimensions, Image, ScrollView  } from 'react-native';
import wall_data from "../assets/data.json";
import ImageItem from './components/message_item';
import { useFonts } from "expo-font";

let ScreenHeight = Dimensions.get("window").height;

export default function Dashboard({navigation}) {
    const [message_list, setMessageList] = useState(wall_data) 

    const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf")
	})

	if(!fontsLoaded){
		return undefined;
	}
    
    return (
        <ScrollView style={styles.dashboard_container}>
            <View style={styles.top_navigation} >
                <Text style={styles.page_title}>The Wall Assignment</Text>       
                <Pressable style={styles.logout_button} onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.logout_text}>Logout</Text>
                </Pressable>
            </View>

            <View style={styles.message_container}>
                <View style={styles.message_count_container}>
                    <Text style={styles.message_count_text}>
                       <Text style={styles.number_of_message}>{message_list.length} </Text>messages arranges by latest posted
                    </Text>
                </View>       
                <Pressable style={styles.create_message_button}>
                    <Text style={styles.create_message_button_text}>Create Message</Text>
                </Pressable>

                <View style={styles.message_list}>
                    {
                        message_list.map((message_data)=>(
                            <ImageItem key={message_data.id} message_data={message_data} />
                        ))
                    }

                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    dashboard_container:{
        backgroundColor: "#FBFBFB",
        height: ScreenHeight
    },  
    top_navigation: {
        height: 72,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        justifyContent: "space-between",
        elevation: 5,
        position: "sticky",
        top:0
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
    message_list:{
        width: "100%",
    },
    message_item: {
        borderColor: "#DCE6FF",
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        display: "block",
        padding: 20
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
        flexWrap: "wrap"
    },
    comment_button: {

    },
    comment_count_text: {

    },
    comment_count: {

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