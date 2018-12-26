import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight }
    from 'react-native';

const logo = require('./src/imgs/logo.png');

export default class SobreJogo extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>
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

    txtDetalhes:{
        fontSize: 16,
    },

});