import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const outrosJogos = require('../imgs/outros_jogos.png');
const sobreJogo = require('../imgs/sobre_jogo.png');

export default class Principal extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>

                <View style={styles.barTitle}>
                    <Text style={styles.txtTitle}>Cara ou Coroa</Text>
                </View>

                <View style={styles.containerBtnLogo}>
                    <Image source={logo}/>

                    <TouchableHighlight
                        underlayColor={'#61BD8C'}
                        activeOpacity={0.3}
                        onPress={() => {alert('Iniciado o jogo');}}
                    >
                        <Image source={btnJogar}/>
                    </TouchableHighlight>
                </View>

                <View style={styles.containerBtnSobre}>

                    <TouchableHighlight
                        underlayColor={'#61BD8C'}
                        activeOpacity={0.3}
                        onPress={() => {alert('Sobre o Jogo')}}
                    >
                        <Image source={sobreJogo} style={styles.menuBtn}/>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'#61bd8c'}
                        activeOpacity={0.3}
                        onPress={() => {alert('Outros Jogos')}}
                    >
                        <Image source={outrosJogos} style={styles.menuBtn}/>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#61BD8C',
    },

    barTitle:{
        height: 40,
        backgroundColor: 'white',
    },

    txtTitle:{
        color: '#61BD8C',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },

    containerBtnLogo:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 10,
        marginTop: 100,
    },

    containerBtnSobre:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 160,
    },

    menuBtn:{
        margin: 30
    }
});
