import React from 'react';
import {Routes, Route} from 'react-router-dom';
import TodosPage from './pages/todos/todos-page';
import FormPage from './pages/form/form-page';
import FirstLevel from './pages/contextReducerImmer/firstLevel';
import Spinner from './components/Spinner';
import NavBar from './components/Navbar';
import GlobalStyle from './styles/global';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import ContextReducerImmerProvider from './pages/contextReducerImmer/ctxReducerImmerProvider';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Spinner />
        <NavBar />
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/todos-context-api" element={<div>Using context api</div>} />
          <Route path="/todos-page" element={<TodosPage />} />
          <Route path="/form-page" element={<FormPage />} />
          <Route
            path="/context-reducer-immer"
            element={
              <ContextReducerImmerProvider>
                <FirstLevel />
              </ContextReducerImmerProvider>
            }
          />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
