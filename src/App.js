import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home , Search} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:keyword' element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
