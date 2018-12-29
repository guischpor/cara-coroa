import React from 'react';
import {
  Router,
  Scene,
  Actions,
} from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';

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

export default class App extends React.Component {
  render() {
    return (
      <Router
        scenes={scenes}
      />
    );
  }
}