import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Sobre extends Component{

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize:30, fontWeight: bold, margin:10, color: 'purple'}}> Naily</Text>
                <Text style={{fontSize:20}}>19</Text>
                <Text style={{fontSize:20}}>DD e DM</Text>
        
            </View>
        )
    }
}