import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './page/HomePage';
import ComponentsPage from './page/ComponentsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/components" component={ComponentsPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
