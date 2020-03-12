import React, { Component } from 'react'
import {
    ImageBackground,
    StatusBar,
} from 'react-native'

import Fire from '../../../Fire';

class AppTabsScreen extends React.Component {

    componentDidMount(){
        Fire.shared.userNameg() //request userNameq
        Fire.shared.getImage() //request profilePictures
    }
    render() {
        return (

            <ImageBackground source={require('../../Commons/BACKGROUND.png')} resizeMode='cover' style={{ width: '100%', height: '100%', flex: 1 }}>
                <StatusBar
                    backgroundColor='#222223'
                    hidden={false}
                />
            </ImageBackground>

        )
    }

}

export default AppTabsScreen;