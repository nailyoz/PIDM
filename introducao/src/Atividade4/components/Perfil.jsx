import React, { Component } from "react";
import { View, Text, Button, Image } from 'react-native'

export default class Modal extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, padding:20, fontWeight:700 }}>
                    Perfil
                </Text>
                <View>
                <Image
                   style={{width:300}}
                    source={{ uri: './korra.jpg'}}
                />
            </View>

                <Text style={{fontSize: 20, margin: 5}}>
                    Nome: {this.props.route.params.nome}
                </Text>
                <Text style={{fontSize: 20, margin: 5}}>
                    Idade: {this.props.route.params.idade}
                </Text>
                <Text style={{fontSize: 20, margin: 5}}>
                    Email: {this.props.route.params.email}
                </Text>



                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
            </View>
        );
    }
}
