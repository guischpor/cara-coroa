import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';

const btnBack = require('../imgs/arrow_left.png');

export default class OutrosJogos extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            gameList: [
                {
                    id: 0,
                    logoGame: require('../imgs/jogo_01_red.jpg'),
                    name: 'Assassins Creed Rebellion',
                    description: 'Assassins Creed Rebellion é o RPG estratégico oficial do universo de Assassins Creed para dispositivos móveis.',
                },
                {
                    id: 1,
                    logoGame: require('../imgs/jogo_02_red.jpg'),
                    name: 'Clash of Clans',
                    description: 'Bárbaros com belos bigodes, Magos com bolas de fogo, outras tropas exclusivas e muito mais! Faça parte do mundo do Clash!',
                },
                {
                    id: 2,
                    logoGame: require('../imgs/jogo_03_red.jpg'),
                    name: 'Brawl Stars',
                    description: 'Batalhas agitadas multijogador dos mesmos criadores de Clash of Clans, Clash Royale e Boom Beach!',
                },
            ],
            list: []
        };
    }

    render() {
        const {gameList} = this.state;
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
                    <Text style={styles.titleStyle}>Outros Jogos</Text>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.txtDetalhes}>
                            Aqui podem ser apresentadas informações sobre outros jogos do desenvolvedor.
                        </Text>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={gameList}
                                keyExtractor={item => item.id}
                                renderItem={({item, index}) =>
                                <View style={styles.styleList}>
                                    <Image source={item.logoGame} style={{borderTopRightRadius: 30, borderTopLeftRadius: 30,}}/>
                                    <Text style={{textAlign:'center', marginTop: 5, marginBottom: 5,}}>{item.name}</Text>
                                    <Text style={{textAlign:'center'}}>{item.description}</Text>
                                </View>
                                }
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#61BD8C',
        marginBottom: 20
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
        textAlign: 'center',
        margin: 12,
        fontWeight: 'bold',
    },

    styleList: {
        backgroundColor: '#fff',
        height: 320,
        width: 320,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
    },

    listContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#61BD8C',
    },

});