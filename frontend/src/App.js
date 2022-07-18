/*
function App() {
  return (
    <div> hello world </div>
)
}

export default App;
*/

import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";


import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';
import News from './components/News';


function App() {
  return (
    
    <Router>
    <div className="container">
    <Header />
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    
    </Switch>
    </div>
  </Router>

  )
}

export default App;
