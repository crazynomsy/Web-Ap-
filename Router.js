import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import {  createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from './Product/Product';
import Detail from './Detail/Detail';

const Stack = createNativeStackNavigator();


function Router () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ProductScreen' component={Product}
        options={{
          title:'EMAZON',
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'}
        }}/>
        <Stack.Screen name='DetailScreen' component={Detail}
        options={{
          title:'Ürün Detayları',
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
          headerTintColor:'white',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}
export default Router;