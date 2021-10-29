import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Main from './components/Main';
import Cards from './components/Cards';
import Story from './components/Story';
import VisualStory from './components/VisualStory';
import Roadmap from './components/Roadmap';
import Join from './components/Join';
import Faq from './components/Faq';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Main />
      <Cards />
      <Story />
      <VisualStory />
      <Roadmap />
      <Faq />
      <Join />
      <Footer />
    </Router>
  );
}

export default App;
