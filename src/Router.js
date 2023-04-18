import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Products from "./Pages/Products/Products";
import Detail from "./Pages/Detail/Detail";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ProductsPage' component={Products} options={{
                    title: 'Chop Store',
                    headerStyle : {backgroundColor: '#90caf9'},
                    headerTitleStyle: {color: 'white'},
                    headerTitleAlign: 'center',
                }} />
                <Stack.Screen name='DetailPage' component={Detail} options={{
                    title: 'Chop Store',
                    headerStyle : {backgroundColor: '#90caf9'},
                    headerTitleStyle: {color: 'white'},
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;