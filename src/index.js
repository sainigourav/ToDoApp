import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/ToDoApp" element={<App />} />
      <Route path="*" element={<Navigate to="/ToDoApp" replace />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


