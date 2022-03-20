import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Payment from '../pages/Payment'
import Confirmation from '../pages/Confirmation'
import store from "../store/store"

export default () => {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Products" component={Products} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="Payment" component={Payment} />
                    <Stack.Screen name="Confirmation" component={Confirmation} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
