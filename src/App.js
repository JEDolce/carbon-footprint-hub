import React from 'react';
import './app.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Intro } from './pages/Intro';
import { Form } from './pages/Form';
import { Results } from './pages/Results';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/form' element={<Form />} />
        <Route path='/results' element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
