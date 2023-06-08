import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Layout from './game/Layout';
import Kingdom from './game/pages/Kingdom';
import Game from './game/pages/Game';
import Characters from './game/pages/Characters';


export default function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 하위라우트 세팅 */}
            {/* path대신 index만 쓰면 첫페이지 */}
            <Route index element={<Kingdom/>} />
            <Route path="kd" element={<Kingdom />} />
            <Route path="gm" element={<Game />} />
            <Route path="ch" element={<Characters />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
} /// App 컴포넌트


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
