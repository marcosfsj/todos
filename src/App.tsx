import React from 'react';
import {Routes, Route} from 'react-router-dom';
import TodosPage from './pages/todos/todos-page';
import Spinner from './components/Spinner';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <Spinner />
      <NavBar />
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/todos-context-api" element={<div>Using context api</div>} />
        <Route path="/todos-page" element={<TodosPage />} />
      </Routes>
    </>
  );
}

export default App;
