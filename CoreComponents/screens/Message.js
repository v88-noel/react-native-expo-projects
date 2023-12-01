import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "../assets/styles/message_styles";
import { COMMENT_ID_ADDEND } from "../config/constants";
import MessageItem from "./components/MessageItem";
import { useData } from "../config/AppContext";

export default function Message({navigation}) {
    const route = useRoute();
    const received_message_data_id = route.params?.data.id || {};
    const app_data = useData();
    const [selected_message] = app_data.filter(message_object => message_object.id === received_message_data_id);
    console.log("selected_message", selected_message.comments?.length ? true: false)

    return (
        <ScrollView style={styles.message_container}>
            <MessageItem 
                key={selected_message.id}
                message_data={selected_message} 
                navigation={navigation}
                is_single_view_has_comment={selected_message.comments?.length ? true : false}
            />
            <View style={styles.bottom_viewer}></View>
        </ScrollView>
    )
}
