import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../assets/styles/register_styles";

export default function Register({navigation}) {
    const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf")
	})

	if(!fontsLoaded){
		return undefined;
	}

    return (
        <View style={styles.container}>
            <View style={styles.form_container}>
                <Text style={styles.page_title}>The Wall</Text>
                <Text style={styles.login_text}>Register</Text>
                <View style={styles.input_container}>
                    <View style={styles.login_input_group_container}>
                        <Text style={styles.input_group_label}>Email</Text>
                        <TextInput style={styles.input_group_text_input}>dasddd</TextInput>
                    </View>
                    <View style={styles.login_input_group_container}>
                        <Text style={styles.input_group_label}>Password</Text>
                        <TextInput style={styles.input_group_text_input}  secureTextEntry={true} >dasd</TextInput>
                    </View>
                    <View style={styles.login_input_group_container}>
                        <Text style={styles.input_group_label}>Confirm Password</Text>
                        <TextInput style={styles.input_group_text_input}  secureTextEntry={true} >dasd</TextInput>
                    </View>
                </View>
                <Text style={styles.terms_of_use}>By creating an account you agree with The Wall's <Text style={styles.terms_of_use_link}>Privacy Policy</Text> and <Text style={styles.terms_of_use_link}>Terms of Use.</Text></Text>
                <View style={styles.button_container}>                
                    <Pressable style={styles.submit_button} onPress={()=>navigation.navigate("Login")}>
                        <Text style={styles.button_text}>SIGN UP</Text>
                    </Pressable>   
                </View>                
                <View style={styles.bottom_link_container}>
                    <Text style={styles.dont_have_account_text}>Don't have an account? </Text>
                    <Text style={styles.sign_up_link} onPress={()=>navigation.navigate("Login")}> Sign In</Text>
                </View>
            </View>
        </View>
  )
}
