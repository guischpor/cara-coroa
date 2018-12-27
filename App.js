import React from 'react';
import {
  Router,
  Scene
} from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class App extends React.Component {
  render() {
    return (
      <Router>

        <Scene
          key='principal'
          component={Principal}
          initial
        />

        <Scene
          key='sobrejogo'
          component={SobreJogo}
        />

        <Scene
          key='outrosjogos'
          component={OutrosJogos}
        />

      </Router>
    );
  }
}