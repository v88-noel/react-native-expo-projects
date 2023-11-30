import { StyleSheet } from "react-native";

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
		marginBottom: 44 
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
	  marginBottom: 39
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
	}
    
});

export { styles };