import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react'
import { useFonts } from "expo-font";
import { Link } from 'expo-router';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form_container:{
        width: "100%",
        padding: 20,
        margin: 100,
        backgroundColor: "#FFF",
        shadow: {
            shadowOffset: { width: 10, height: 10 },
            shadowColor: 'black',
            shadowOpacity: 1,
            elevation: 3,
            backgroundColor : "#000"
          },
        elevation: 3,
    },
    page_title:{
        color: "#2C6BFF",
        fontSize: 22,
        fontStyle: "normal",
        fontWeight: "600",
        paddingBottom: 25,
		fontFamily: "Poppins-SemiBold"

    },
    login_text:{
        color: "#152C61",
        fontSize: 40,
        fontStyle: "normal",
        fontWeight: "600",
        paddingBottom: 18,
		fontFamily: "Poppins-SemiBold"
		
    },
    login_input_group_container :{
        marginBottom: 16
    },
	input_container:{
		marginBottom: 20 
	},	
    input_group_label: {
        color: "#000",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "300",    
		fontFamily: "Poppins-Light",
		paddingBottom: 7
    },
    input_group_text_input: {
        backgroundColor: "rgba(44, 107, 255, 0.08)",
        height: 55,
        paddingHorizontal: 10,
		fontFamily: "Poppins-Regular"
    },
    button_container:{
      justifyContent: 'center',
      alignItems: 'center',
	  marginBottom: 40
    },
    submit_button:{
        width: 150,
        height: 55,
        backgroundColor: "#2C6BFF",
        borderRadius: 4,
        display: "block",
        justifyContent: "center",
        alignItems: "center"
    },
    button_text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold"
    },
    dont_have_account_text:{
		color: "rgba(0, 0, 0, 0.20)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "400",
		letterSpacing: 0.48,
		fontFamily: "Poppins-Regular",
    },
	sign_up_link:{
		color: "#2C6BFF",
		fontFamily: "Poppins-Regular",
		fontSize: 16,
		letterSpacing: 0.48
	},	
	bottom_link_container:{
		display: "flex",
		flexDirection: "row",
		justifyContent: "center"
	},
    terms_of_use: {
        color: "#152C61",
        fontFamily: "Poppins-Light",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 16
    },
    terms_of_use_link:{
        color: "#2C6BFF"
    }
    
});
