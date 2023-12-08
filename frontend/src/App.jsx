import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Template from './template/Template.jsx';
import Landing from "./landing/Landing";
import WelcomeMessage from './landing/WelcomeMessage.jsx';
import RegistrationForm from './forms/RegistrationForm.jsx';
import LoginForm from './forms/LoginForm.jsx';
import CartSummary from './cart/CartSummary.jsx';

const App = () => {
  const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
    // Check if localStorage.token exists
    const token = localStorage.getItem('token');
    setTokenExists(!!token);
  }, []);

  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/" exact>
            {tokenExists ? <Redirect to="/products" /> : <WelcomeMessage />}
          </Route>
          <Route path="/products" exact>
            <Landing />
          </Route>
          <Route path="/register" exact>
            <RegistrationForm />
          </Route>
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          <Route path="/cart" exact>
            <CartSummary />
          </Route>
        </Switch>
      </Template>
    </Router>
  );
};

export default App;
