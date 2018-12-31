import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    Text,
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

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
                    <Image
                        source={logo}
                        style={{
                            marginBottom: 20
                        }}
                    />

                    <TouchableHighlight
                        underlayColor={'#0155b1'}
                        activeOpacity={0.3}
                        onPress={() => {Actions.resultado();}}
                        style={{
                            borderRadius: 30,
                        }}
                    >
                        <Text
                            style={{
                                textAlign:'center',
                                backgroundColor: '#0155b1',
                                borderRadius: 30,
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 26,
                                padding: 15,
                                paddingRight: 30,
                                paddingLeft: 30
                            }}
                            >
                                JOGAR
                        </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.rodape}>

                    <TouchableHighlight
                        underlayColor={'#0155b1'}
                        activeOpacity={0.3}
                        onPress={() => { Actions.sobrejogo();}}
                        style={{
                            borderRadius: 30,
                        }}
                    >
                        <Text
                            style={{
                                textAlign:'center',
                                backgroundColor: '#0155b1',
                                padding: 10,
                                borderRadius: 30,
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 20
                            }}
                            >
                                Sobre o Jogo
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'#0155b1'}
                        activeOpacity={0.3}
                        onPress={() => {Actions.outrosjogos();}}
                        style={{
                            borderRadius: 30,
                        }}
                    >
                        <Text
                            style={{
                                textAlign:'center',
                                backgroundColor: '#0155b1',
                                padding: 10,
                                borderRadius: 30,
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 20
                            }}
                            >
                                Outros Jogos
                        </Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#77aef9',
    },
    barTitle:{
        height: 45,
        backgroundColor: '#0155b1',
        elevation: 5
    },

    txtTitle:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },

    containerBtnLogo:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    rodape:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20,
    },

});