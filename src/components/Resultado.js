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
const moedaCara = require('../imgs/moeda_cara.png');
const moedaCoroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            resultado: ''
        };
	}

	componentWillMount() {
		const numAleatorio = Math.floor(Math.random() * 2);
		let caraOuCoroa = '';

		if (numAleatorio === 0) {
			caraOuCoroa = 'cara';
		} else {
			caraOuCoroa = 'coroa';
		}

		this.setState({
            resultado: caraOuCoroa
        });

	}

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
                            <Text style={styles.txtTitle}>Resultado</Text>
                        </View>
                    </View>
                    <View style={styles.resultado}>
                        {this.state.resultado === 'cara' ?
                            <Image
                                source={moedaCara}
                            />
                            :
                            <Image
                                source={moedaCoroa}
                            />
                        }
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

    resultado:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

});