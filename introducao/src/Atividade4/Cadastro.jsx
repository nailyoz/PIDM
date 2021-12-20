import React, {Component} from "react";
import {View, Text, TextInput, Button, Alert} from 'react-native'


export default class Cadastro extends Component{
    
    
    
    constructor(props){
        super(props)
        this.state = {nome:null, idade:null, email: null}
    }

    render(){
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                style={{height:40, width:'50%', backgroundColor: 'transparent', borderColor: 'gray', borderWidth: 'thin', padding: '10px', margin: '10px'}}
                placeholder="Insira seu nome"
                onChangeText={(nome)=> this.setState({nome})}
                >
                </TextInput>

                <TextInput
                style={{height:40, width:'50%', backgroundColor: 'transparent', borderColor: 'gray', borderWidth: 'thin', padding: '10px', margin: '10px'}}
                placeholder="Insira sua idade"
                onChangeText={(idade)=> this.setState({idade})}>
                    
                </TextInput>

                <TextInput
                style={{height:40, width:'50%', backgroundColor: 'transparent', borderColor: 'gray', borderWidth: 'thin', padding: '10px', margin: '10px'}}
                placeholder="Insira seu email"
                onChangeText={(email)=> this.setState({email})}>
                </TextInput>
                
                <View  style={{margin:10, width: 300}}>
                <Button
                    title='Cadastrar'
                    onPress = {() => this.props.navigation.navigate('Perfil',{nome:this.state.nome,idade:this.state.idade,email:this.state.email})}
                />
                </View>    
            
            </View>
        )
    }


}