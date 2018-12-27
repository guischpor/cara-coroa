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

    txtDetalhes:{
        fontSize: 16,
    },

});