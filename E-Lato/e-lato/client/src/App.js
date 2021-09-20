import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        {/* <Route /> */}
      </Switch>

    </BrowserRouter>
  );
}

export default App;
