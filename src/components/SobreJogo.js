import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight }
    from 'react-native';

export default class SobreJogo extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>

                <View style={styles.barTitle}>
                    <Text style={styles.txtTitle}>Sobre o jogo</Text>
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

    txtDetalhes:{
        fontSize: 16,
        flex: 1
    },

});