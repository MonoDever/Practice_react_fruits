import React from 'react'
import { Routes, Route,redirect } from 'react-router-dom'

import Home from './Views/Home';
import Car from './Views/CarPage';
import Fruit from './Views/FruitPage';

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/car" element={<Car />}/>
        <Route path="/Fruit" element={<Fruit />}/>
      </Routes>
    </div>
  );
}