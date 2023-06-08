import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Layout from './game/Layout';


export default function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            {/* 하위라우트 세팅 */}
            {/* path대신 index만 쓰면 첫페이지 */}
            <Route index element={<Main/>} />
            <Route path="kd" element={<aa />} />
            <Route path="gm" element={<bb />} />
            <Route path="ch" element={<cc />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
} /// App 컴포넌트


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
