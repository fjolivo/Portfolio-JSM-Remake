// import React from 'react';
// // import ReactDOM from 'react-dom';

// import { ReactDOM } from 'react-dom/client';

// import App from './App';
// import './index.css';

// // ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.createRoot(<App />, document.getElementById('root'))




// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(<App />, document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

import App from "./App";


import anime from 'animejs/lib/anime.es.js';

import 'react-tooltip/dist/react-tooltip.css';





// Twinkling Night Sky by Sharna

class StarrySky extends React.Component {
  state = {
    num: 18,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
  starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0"
        },
        {
          duration: 700,
          value: "1"
        }
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 500 * i
    });
  };
  shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 6000 * i,
      opacity: [
        {
          duration: 600,
          value: "1"
        }
      ],
      width: [
        {
          value: "60px"
        },
        {
          value: "0px"
        }
      ],
      translateX: 350
    });
  };
  randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
  };
  getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
  };
  componentDidMount() {
    this.starryNight();
    this.shootingStars();
  }
  render() {
    const { num } = this.state;
    return (
      <div id="App">
        <svg id="sky">
          {[...Array(num)].map((x, y) => (
            <circle
              cx={this.getRandomX()}
              cy={this.getRandomY()}
              r={this.randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="white"
              key={y}
              className="star"
            />
          ))}
        </svg>
        <div id="shootingstars">
          {[...Array(60)].map((x, y) => (
            <div
              key={y}
              className="wish"
              style={{
                left: `${this.getRandomY()}px`,
                top: `${this.getRandomX()}px`
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}


// const rootElement2 = (<StarrySky />, document.getElementById("root"));


// const root2 = createRoot(rootElement2);



// root2.render(<StarrySky />, document.getElementById("root"));




const rootElement = (<App />, document.getElementById('root'));
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StarrySky />
    <App />
  </StrictMode>
);