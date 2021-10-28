import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Main from './components/Main';
import Cards from './components/Cards';
import Story from './components/Story';
import VisualStory from './components/VisualStory';
import Roadmap from './components/Roadmap';
import Join from './components/Join';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Main />
      <Cards />
      <Story />
      <VisualStory />
      <Roadmap />
      <Join />
      <Footer />
    </Router>
  );
}

export default App;
