import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from './pages/Error404';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/inicio' exact component={() => <Home />} />
          <Route path='/series' exact component={(() => <Series />)} />
          <Route path='/comics' exact component={(() => <Comics />)} />
          <Route component={(() => <Error404/>)} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
