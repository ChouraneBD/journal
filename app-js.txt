import React from 'react';
import './App.css';

import AddArticle from './component/AddArticle';
import { Routes , Route } from 'react-router';
import Journal from './component/Journal';
import EditArticle from './component/EditArticle';


function App() {
  
  return (
    <div className="App alert">
      
      
      <Routes>
        <Route  path='/' element={<Journal/>} />
        <Route  path='/add' element={<AddArticle/>} />
        <Route  path='/edit/:id' element={<EditArticle/>} />
      </Routes>
      
    </div>
  );
}

export default App;
