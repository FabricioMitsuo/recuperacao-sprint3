import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CadastroBolo from './pages/CadastroBolo';
import ListaBolo from './pages/ListaBolo';

//Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//BrowserRouter - indica que tera uma config de rotas
//Routes - indica que tera uma lista de rotas
//Route - indica uma rota de uma respectiva componente


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    {/* Rotas */}
    {/* Componentes */}


    <BrowserRouter>

      <Header /> {/* 1*/}

      <Routes> {/* 2*/}
        <Route path='/' element={<Home />} /> {/* PAGINA PRINCIPAL*/}
        <Route path='cadastro/bolo' element={<CadastroBolo />} />
        <Route path='lista/Bolo' element={<ListaBolo />} />
      </Routes>

      <Footer /> {/* 3 */}


    </BrowserRouter>


  </React.StrictMode>
)
