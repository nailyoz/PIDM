import React, {Component} from "react";
import {View, Text, TextInput, Button} from 'react-native'
import ImcMsg from "./IMCMsg";

export default class Resultado extends Component{
    
    render(){
        
        if(parseFloat(this.props.route.params.peso)!=null && parseFloat(this.props.route.params.altura)){
            return(
            <View style={{flex:1 , alignItems:'center', justifyContent: 'center'}}>

                <Text style={{fontSize: 24, padding: 20}}>
                  IMC: {(parseFloat(this.props.route.params.peso)/(parseFloat(this.props.route.params.altura)*parseFloat(this.props.route.params.altura))).toFixed(2)}
                </Text>
                <ImcMsg imc={(parseFloat(this.props.route.params.peso)/(parseFloat(this.props.route.params.altura)*parseFloat(this.props.route.params.altura))).toFixed(2)}></ImcMsg>
                <View style={{width:300, marginTop: 20}}>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home"  />
                </View>
            </View>
        );
        }else{
            return(
                <View style={{flex:1 , alignItems:'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 14, fontWeight: 500}}>
                  ERRO
                </Text>
                <View style={{width:300, marginTop: 20}}>
                <Button onPress={() => this.props.navigation.navigate('Calcular')} title="VOLTAR"  />
                </View>
            </View>
            )
        }
    }
}