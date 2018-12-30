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

const btnBack = require('../imgs/arrow_left.png');
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
                        <Text style={styles.titleStyle}>Resultado</Text>
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

    navBarStyle: {
        backgroundColor: '#fff',
        padding: 10,
        height: 50,
        flexDirection: 'row',
        elevation: 5
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