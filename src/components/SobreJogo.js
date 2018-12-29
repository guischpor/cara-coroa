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

const btnBack = require('../imgs/arrow_left.png');

export default class SobreJogo extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>

                <View style={styles.navBarStyle}>
                    <TouchableHighlight
                        underlayColor={'#fff'}
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
                    <Text style={styles.titleStyle}>Sobre o jogo</Text>
                </View>

                <Text style={styles.txtDetalhes}>Aqui podem ser apresentadas informações sobre o jogo.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#61BD8C',
    },

    navBarStyle: {
        backgroundColor: '#fff',
        padding: 10,
        height: 50,
        flexDirection: 'row',
    },

    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#61BD8C',
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
        marginTop: 5
    },

});