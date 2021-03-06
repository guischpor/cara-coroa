import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

const btnBack = require('../imgs/arrow_left_white.png');

export default class SobreJogo extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>

                <View style={styles.navBarStyle}>
                    <TouchableHighlight
                        underlayColor={'#0155b1'}
                        activeOpacity={0.3}
                        onPress= {() => {
                            Actions.pop()
                        }}
                    >
                        <Image
                            source={btnBack}
                            style={styles.btnBackStyle}
                        />
                    </TouchableHighlight>
                    <Text
                        style={styles.titleStyle}>Sobre o jogo</Text>
                </View>

                <Text
                    style={styles.txtDetalhes}
                >
                    O Jogo Cara ou Coroa é um exercício desenvolvido pelo curso de React Native, para aprendizado e
                    aprimoramento de conhecimento durante o curso. Nesse aplicativo eu aprendi a ultilizar o componente
                    router flux como meio de navegtação entre as telas do aplicativo.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    navBarStyle: {
        backgroundColor: '#0155b1',
        padding: 10,
        height: 50,
        flexDirection: 'row',
        elevation: 5
    },

    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        flex: 1,
        marginTop: 2,
        marginRight: 40,
    },

    btnBackStyle: {
        flex: 1,
        height: 35,
        width: 35,
    },

    txtDetalhes: {
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
        margin: 12,
        fontWeight: 'bold',
    },

});