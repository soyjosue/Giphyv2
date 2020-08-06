import React from 'react';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/home/Home';
import Seach from './components/Seach';
import Footer from './components/Footer';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path={["/page=:id", "/", "/page="]} component={Home} />
          <Route exact path="/search=:seach/page=:page" component={Seach} />
          <Route exact path="*">
            <p>Error 404</p>
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
