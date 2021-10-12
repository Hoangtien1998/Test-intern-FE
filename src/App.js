import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routers from './router/router';
import Header from './theme/header/header';
import Footer from './theme/footer/footer';

function App() {
  const _routers = routers.map((value, index) => {
    return (
      <Route
        key={index}
        path={value.path}
        component={value.main}
        exact={value.exact}>

      </Route>
    );
  });
  return (
    <Router>
      <Header />
      <Switch>
        {_routers}
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
