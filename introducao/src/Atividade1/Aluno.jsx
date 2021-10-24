import React, {Component} from 'react';
import {Text, View, render} from 'react-native';

export default class Aluno extends Component {
    render(){
        
        return (
            <View >
                <Text>
                   {this.props.nome}
                </Text>
                <Text>
                    {this.props.idade}
                </Text>
                <Text>
                    {this.props.local}
                </Text>
                <Text>
                    {this.props.curso}
                </Text>
            </View>
        )
    }
}

/**
 * Arrow function
 * 
const professor = ()=> {
    return (
        <View >
             <Text>
                {this.props.nome}
            </Text>
             <Text>
                {this.props.idade}
            </Text>
            <Text>
                {this.props.local}
            </Text>
            <Text>
                {this.props.curso}
            </Text>
        </View>
        )
    
}

export default professor;
 */