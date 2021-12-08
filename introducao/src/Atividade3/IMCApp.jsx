import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

import Calculadora from './IMCCalc'

export default class CalculadoraApp extends Component{
   
    constructor(props) {
        super(props)
        this.state = {peso:null, altura:null}
    }

    render() {
        return(
            <View>
                
                <TextInput 
                    style={{height:40}}
                    placeholder="Digite seu peso"
                    onChangeText={
                        //equivalente a (kg)=> {peso: kg}
                        (peso)=>{
                            this.setState({peso})
                        }
                    }
                />
                <TextInput 
                    style={{height:40}}
                    placeholder="Digite sua altura"
                    onChangeText={
                        (altura)=>{
                            this.setState({altura})
                        }
                    }
                />
                <Calculadora 
                    peso={this.state.peso}
                    altura={this.state.altura}
                />
            
            </View> 
        )
    }
}