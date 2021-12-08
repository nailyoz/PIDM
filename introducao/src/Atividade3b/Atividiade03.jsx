import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Atividade03 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Fortaleza: 0, Quixada: 0, Canide: 0, Juazeiro: 0};

        this.votarFortal = this.votarFortal.bind(this);
        this.votarQuix = this.votarQuix.bind(this);
        this.votarCani = this.votarCani.bind(this);
        this.votarJuaz = this.votarJuaz.bind(this);

        this.menosVotada = this.cidadeMenosVotada(this.state)
    }
    
    votarFortal(){
        this.setState({Fortaleza:this.state.Fortaleza + 1}, this.atualizar)
        
    }
    votarQuix(){
        this.setState({Quixada:this.state.Quixada + 1}, this.atualizar)
    }
    votarCani(){
        this.setState({Canide:this.state.Canide + 1}, this.atualizar)
    }
    votarJuaz(){
        this.setState({Juazeiro:this.state.Juazeiro + 1}, this.atualizar)
    }

    //atualizar ao render
    atualizar(){
        this.menosVotada = this.cidadeMenosVotada(this.state)
        this.setState(this.state)
    }
    
    cidadeMenosVotada(cidades){
        //menor valor
        let menosVotada = ' ';
        let parametro = cidades.Fortaleza;

        for(var i in cidades){
            if(cidades[i] <= parametro)
                parametro = cidades[i];
            
        }

        // montando stringer
        for(var i in cidades){
            if(cidades[i] === parametro)
                menosVotada += ' ' + i
        }

        return menosVotada;
    }


    render() {

        const {Fortaleza, Quixada, Canide, Juazeiro} = this.state;

        return (
            <View style={estilo.container}>
                <View><h1>Votação de Cidades</h1></View>
                <View>
                <Text>Fortaleza: {Fortaleza} votos</Text> 
                <Text>Quixadá: {Quixada} votos</Text>
                <Text>Canidé: {Canide} votos</Text>
                <Text>Juazeiro: {Juazeiro} votos</Text>
                </View>
                <View>
                    <Text>Mais Votada: </Text>
                    <Text>Menos Votada: {this.menosVotada}</Text>
                </View>

                <View style={estilo.botoes}>
                    <Button title="Fortaleza" onPress={(this.votarFortal)}/>
                    <Button title="Quixadá" onPress={(this.votarQuix)}/>
                    <Button title="Canidé" onPress={(this.votarCani)}/>
                    <Button title="Juazeiro" onPress={(this.votarJuaz)}/>
                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '10px',
    }
})