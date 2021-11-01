import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/about" exact={true}>
        <About />
      </Route>
    </BrowserRouter>
  );
}

export default App;
