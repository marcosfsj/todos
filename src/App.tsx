import React from 'react';
import {Routes, Route} from 'react-router-dom';
import TodosPage from './pages/todos/todos-page';
import FormPage from './pages/form/form-page';
import Spinner from './components/Spinner';
import NavBar from './components/Navbar';
import GlobalStyle from './styles/global';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Spinner />
        <NavBar />
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/todos-context-api" element={<div>Using context api</div>} />
          <Route path="/todos-page" element={<TodosPage />} />
          <Route path="/form-page" element={<FormPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
