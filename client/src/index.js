import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import { ChakraProvider } from "@chakra-ui/react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
       <Route path="/login" element={<LoginPage />}/>
         <Route path="/register" element={<RegisterPage />} />
    
      
  </Routes>
</BrowserRouter>
</ChakraProvider>
  </React.StrictMode>
);


