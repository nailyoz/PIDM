import React, {Component} from 'react';
import { Image } from 'react-native';

export default class Corpo extends Component {
    render(){
        let img = {uri: 'https://www.planocritico.com/wp-content/uploads/2021/06/a-lenda-de-korra-livro-1-ar-plano-critico.jpg' }
        
        return (
            <Image source={img} style={{height: '100px', width: '100px'}} />
        )
    }
}