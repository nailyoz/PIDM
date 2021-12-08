import React, {Component} from 'react';
import {Text, View} from 'react-native';
import IMCMsg from './IMCMsg'
import NumberFormat from 'react-number-format';


export default class Calculadora extends Component {
    render() {
        if( !this.props.altura || !this.props.peso) return null; 
        
        const imc = this.props.peso/(this.props.altura**2)

        return (
            <View>
                <Text style={{padding:10, fontSize:30, fontWeight: 'bold'}}>
                    IMC:  <NumberFormat
                            value={imc}
                            displayType={"text"}
                            thousandSeparator={true}
                            decimalScale={2}
      />
                </Text>
                <IMCMsg imc={imc} />
            </View>
        )
    }
}