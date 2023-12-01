import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContextProvider } from './config/app_context';
import React from "react";

import Login from "./screens/Login";
import Dashboard from './screens/Dashboard';
import Register from "./screens/Register";
import Message from './screens/Message';

const Stack = createNativeStackNavigator();
export const AppContext = React.createContext();

export default function App() {

	return (
		<AppContextProvider>
			<NavigationContainer>
				<Stack.Navigator 
				initialRouteName="Login" 
				screenOptions={{
						headerShown: false
				}}>
					<Stack.Screen name="Login" component={Login}/>
					<Stack.Screen name="Dashboard" component={Dashboard}/>
					<Stack.Screen name="Register" component={Register}/>
					<Stack.Screen name="Message" component={Message}/>
				</Stack.Navigator>
			</NavigationContainer>
		</AppContextProvider>
	);
}

