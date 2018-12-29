import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';

const btnVoltar = require('../imgs/arrow_left.png');

export default class OutrosJogos extends React.Component {
    render() {
        return (
            <View style={styles.viewContainer}>

                <View style={styles.navBar}>
                    <View style={styles.spaceIn}>
                        <TouchableHighlight
                            underlayColor={'#fff'}
                            activeOpacity={0.3}
                            onPress={() => {Actions.pop()}}
                        >
                            <Image
                                source={btnVoltar}
                                style={styles.btnVoltar}
                            />
                        </TouchableHighlight>
                        <Text style={styles.txtTitle}>Outros Jogos</Text>
                    </View>
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

    navBar: {
        height: 45,
        backgroundColor: 'white',
        padding: 10,
    },

    txtTitle: {
        color: '#61BD8C',
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        marginTop: 0,
        marginLeft: 120,
        alignItems: 'center',
        flex: 1
    },

    spaceIn: {
        flexDirection: 'row',
    },

    btnVoltar: {
        height: 35,
        width: 35,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        marginLeft: -10
    },

    txtDetalhes:{
        fontSize: 16,
        marginTop: 5
    },

});