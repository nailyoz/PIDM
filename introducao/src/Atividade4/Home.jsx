import React, { Component } from "react";
import { View, Button, Text } from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <View>

                    <View style={{ margin:10 }}>
                        <Button title="Cadastro" onPress={() => this.props.navigation.navigate('Cadastro')} />
                    </View>

                    <View style={{margin:10 }}>
                        <Button title="Calculadora de IMC" onPress={() => this.props.navigation.navigate('Calcular')} />
                    </View>

                    <View style={{ margin:10 }}>
                        <Button title="Sobre" onPress={() => this.props.navigation.navigate('Sobre',{...this.props.route.params})} />
                    </View>
                </View>

            </View>
        )
    }
}