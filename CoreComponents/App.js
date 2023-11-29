import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Dashboard from './screens/Dashboard';
import Register from "./screens/Register";

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator 
			initialRouteName="Login" 
			screenOptions={{
            	headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

