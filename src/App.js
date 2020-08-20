import React from 'react';
import './App.scss';
import "bootstrap/scss/bootstrap.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/Auth/Login';
import Reset from './Pages/Auth/Reset';
import Master from './Pages/Master';
import ReduxTest from './Pages/Redux-test/ReduxTest';
// import { checkIfLoggedIn } from './utils/helper';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  // useEffect(() => {
  //   const token = checkIfLoggedIn();
  //   if (!token) {
  //     return setLoggedIn(false)
  //   }
  //   return setLoggedIn(true)
  // }, [])


  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/admin" component={Master} />
          <Route exact path="/" component={Login} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/redux" component={ReduxTest} />
          <Route path="*">
            <h1 className="text-center mt-5"><b>404 Page not found</b></h1>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
