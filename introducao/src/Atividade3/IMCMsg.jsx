import React, {Component} from 'react';
import {Text} from 'react-native';

export default class IMCMs extends Component {

    render() {
        const param = this.props.imc;
        var msg = ' ';
        var cor = 'red'
        

            if(param<17){
                msg = 'Muito abaixo do peso';
            }
            if(param>=17 && param<18.50){
                msg = 'Abaixo do peso'
            }
            if(param>=18.50 && param<25){
                msg = 'Peso Normal';
                cor = 'blue';
            }        
            if(param>=25 && param<30){
                msg = 'Acima do peso'
            }
            if(param>=30 && param<35){
                msg = 'Obesidade I'
            }
            if(param>=35 && param<40){
                msg = 'Obesidade II (severa)'
            }
            if(param>40){
                msg = 'Obesidade III (mórbida)'
            }
        return(
            <Text style={{color: cor, padding:0, fontSize:30, fontWeight: 'bold'}}> {msg} </Text>
        )
    }
}