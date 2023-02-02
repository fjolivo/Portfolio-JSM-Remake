import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, Timeline } from './container';
import { Navbar } from './components';
import './App.scss';







const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Skills />
    <Work />
    {/* <About /> */}
    <Testimonial />
    <Footer />
    <Timeline />
  </div>
);






export default App;