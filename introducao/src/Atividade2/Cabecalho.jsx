import React, {Component} from 'react';
import {Text, View, render} from 'react-native';

export default class Cabecalho extends Component {
    render(){
        
        return (
            <View>
                <Text>
                   {this.props.nome}
                </Text>
                <Text>
                    {this.props.curso}
                </Text>
            </View>
        )
    }
}
