import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history, onSignIn }: any) => (
  <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
);

export default App;
