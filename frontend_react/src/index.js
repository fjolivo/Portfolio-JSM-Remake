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




import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

import App from "./App";

const rootElement = (<App />, document.getElementById('root'));
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);