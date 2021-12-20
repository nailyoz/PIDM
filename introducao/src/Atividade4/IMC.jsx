import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

import Calculadora from './IMCCalc'

export default class CalculadoraApp extends Component{
   
    constructor(props) {
        super(props)
        this.state = {peso:null, altura:null, apertou: false}

    }
    
    acaoBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({apertou:true})
        }
    }

    renderizar(){
        if(this.state.apertou){
            return(
                <Calculadora altura={this.state.altura} peso={this.state.peso}/>
            )
        }
          
        return null
    }

    render() {
        return(
            <View  style={{backgroundColor: 'gainsboro', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:20, fontWeight: 'bold'}}>Insira seu peso</Text>
                <TextInput 
                    style={{height:40, width:'50%', backgroundColor: 'transparent', borderColor: 'gray', borderWidth: 'thin', padding: '10px', margin: '10px'}}
                    placeholder="Ex: 78"
                    onChangeText={
                        //equivalente a (kg)=> {peso: kg}
                        (peso)=>{
                            this.setState({peso})
                            
                        }
                    }
                />
                <Text style={{fontSize:20, fontWeight: 'bold'}}>Insira sua Altura</Text>
                <TextInput 
                    style={{height:40, width:'50%', backgroundColor: 'transparent', borderColor: 'gray', borderWidth: 'thin', padding: '10px', margin: '10px'}}
                    placeholder="Ex: 1.80"
                    onChangeText={
                        (altura)=>{
                            this.setState({altura})
                            
                        }
                    }
                />

                <Button title="Calcular" onPress={() => this.props.navigation.navigate('Resultado',{altura: this.state.altura, peso: this.state.peso})}/>
                {this.renderizar()}
            </View> 
        )
    }
}