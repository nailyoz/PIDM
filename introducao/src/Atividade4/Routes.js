import Home from "./tela/Home";
import Sobre from "./tela/Sobre";
import IMCApp from "./tela/IMCApp"
import Cadastro from "./tela/Cadastro";

//Versão 5.x com modal
import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const StackPrincipal = createStackNavigator()
const StackRaiz = createStackNavigator()

import Modal from "./components/Perfil";
import Resultado from "./components/Resultado";

function StackPrincipalTela(){
    return (
        <StackPrincipal.Navigator initialRouteName='Home'>
            <StackPrincipal.Screen name='Home' component={Home} options={{title: 'Tela inicial', headerStyle:{backgroundColor:'purple'}}}/>
            <StackPrincipal.Screen name='Sobre' component={Sobre} options={{headerStyle:{backgroundColor:'purple'},headerTitleAlign:'center'}}/>
            <StackPrincipal.Screen name='Cadastro' component={Cadastro} options={{headerStyle:{backgroundColor:'purple'},headerTitleAlign:'center'}}/>
            <StackPrincipal.Screen name='Calcular' component={IMCApp} options={{headerStyle:{backgroundColor:'purple'},headerTitleAlign:'center'}}/>
        </StackPrincipal.Navigator>
    )
}

function StackRaizTela(){
    return(
        <NavigationContainer>
            <StackRaiz.Navigator>
                <StackRaiz.Screen name='Principal' component={StackPrincipalTela} options={{headerShown: false}}/>
                <StackRaiz.Screen name='Perfil' component={Modal} options={{headerShown: false}}/>
                <StackRaiz.Screen name='Resultado' component={Resultado} options={{headerShown: false}}/>
            </StackRaiz.Navigator>
        </NavigationContainer>
    )
}

export default StackRaizTela

