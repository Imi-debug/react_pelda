/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';
let cim = "Videójáték gyűjtemény"; 
let jatekcim = "Red Dead Redemption 2"; 
let adat1= "shooter";
let adat2= "open world";
let adat3= "adventure";
let adat4= "rpg";
let email = "valami@valami.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header cim={cim} />
    <Content jatekcim={jatekcim} adat1={adat1} adat2={adat2} adat3={adat3} adat4={adat4} />
    <Footer email={email} />
  </React.StrictMode>
);*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AllapotPelda from './components/AllapotPelda.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllapotPelda />
  </React.StrictMode>
);


reportWebVitals();
