import React, {Component} from 'react';
import { Image } from 'react-native';

export default class Imagem extends Component {
    render(){
        let img = {uri: 'https://share-cdn.picrew.me/shareImg/org/202110/197705_oibZ3r5h.png' }
        
        return (
            <Image source={img} />
        )
    }
}