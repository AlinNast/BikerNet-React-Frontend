import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Layouts/HomePageLayout/HomePage';
import LandingPage from './Layouts/LandingPageLayout/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage/>} />

        <Route path='/Home' element={<HomePage/>}/>

      </Routes>

      

    </BrowserRouter>
  );
}

export default App;
