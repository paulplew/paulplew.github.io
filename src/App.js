import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Navigation from './Components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/about' exact={true}>
          <About />
        </Route>
        <Route path='/portfolio' exact={true}>
          <Portfolio />
        </Route>
        <Route path='/resume' exact={true}>
          <Resume />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
