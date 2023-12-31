import React, { useContext, useState } from 'react'
import { Pressable,  Text, TextInput, View, ScrollView, Keyboard  } from 'react-native';
import wall_data from "../assets/data.json";
import MessageItem from "./components/MessageItem";
import { styles } from "../assets/styles/dashboard_styles";
import { useFonts } from "expo-font";

import { useData, useUpdateData } from "../config/AppContext";

export default function Dashboard({navigation}) {
    const [add_message_input_value, setAddMessageInputValue] = useState("");
    const [is_add_message_active, setAddMessageActive] = useState(false);
    const app_data = useData();
    const addMessage = useUpdateData().addMessage;

    const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf")
	})

	if(!fontsLoaded){
		return undefined;
	}

    const addNewMessage = () => {
        Keyboard.dismiss();
        addMessage(add_message_input_value)
        setAddMessageInputValue("");
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
                        <Text style={styles.number_of_message}>{app_data.length} </Text>message{(app_data.length) ? "s" : ""} arranged by latest posted
                        </Text>
                    </View>       
                    <View style={styles.message_list}>
                        {
                            app_data.map((message_data)=>
                                <MessageItem 
                                    key={message_data.id}
                                    message_data={message_data} 
                                    navigation={navigation}
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
