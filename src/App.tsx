import React from 'react';
import {Template} from './component/template/Template';
import Routes from './router/Router';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <Template>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </Template>
  );
}

export default App;
