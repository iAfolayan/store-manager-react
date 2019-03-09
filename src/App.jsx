import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const App = () => (
  <Router>
    <React.Fragment>
      <div className="body">
        <Switch>
          {routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </React.Fragment>
  </Router>
);

export default App;
