import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class OutrosJogos extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>

                <View style={styles.barTitle}>
                    <Text style={styles.txtTitle}>Outros jogos</Text>
                </View>

                <Text style={styles.txtDetalhes}>
                    Aqui podem ser apresentadas informações sobre outros jogos do desenvolvedor.
                </Text>
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
    },

});