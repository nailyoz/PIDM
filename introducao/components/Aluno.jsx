import React, {Component} from 'react';
import {Text, View, render} from 'react-native';

export default class Aluno extends Component {
    render(){
        
        return (
            <View>
                <Text>
                    Naily de Oliveira Santos
                </Text>
                <Text>
                    19 anos
                </Text>
                <Text>
                    Fortaleza
                </Text>
                <Text>
                    Design Digital
                </Text>
            </View>
        )
    }
}