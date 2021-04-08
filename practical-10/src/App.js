import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
