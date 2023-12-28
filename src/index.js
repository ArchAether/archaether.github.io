import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import SpeedTier from './components/SpeedTier';
import TextCenter from './components/TextCenter';
import NavigationBar from './components/NavigationBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <NavigationBar />
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<SpeedTier />} />
      <Route path='TextCenter' element={<TextCenter />}/>
    </Routes>
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
