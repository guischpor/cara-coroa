import React from 'react';
import {
    Router,
    Scene,
    Actions,
} from 'react-native-router-flux';

import Principal from './Principal';
import SobreJogo from './SobreJogo';
import OutrosJogos from './OutrosJogos';
import Resultado from './Resultado';

const scenes = Actions.create(
    <Scene
        key='root'
    >
        <Scene
            key='principal'
            component={Principal}
            hideNavBar={true}
            title='Cara ou Coroa'
            initial
        />
        <Scene
            key='sobrejogo'
            component={SobreJogo}
            hideNavBar={true}
            title='sobre o jogo'
        />
        <Scene
            key='outrosjogos'
            component={OutrosJogos}
            hideNavBar={true}
        />
        <Scene
            key='resultado'
            component={Resultado}
            hideNavBar={true}
        />
    </Scene>
    );

export default class Rotas extends React.Component {
    render() {
        return (
            <Router
                scenes={scenes}
        />
    );
    }
}