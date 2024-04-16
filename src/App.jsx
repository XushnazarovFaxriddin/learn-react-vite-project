import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { TodoList } from './components/TodoList';
import { Button } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './pages/Counter';

function App() {
  return (
    <div className="App">
      <Link to="/counter">
        <Button variant='primary'> go to Counter page</Button>
      </Link>
      <header className="App-header">
        <h1>React App</h1>
      </header>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App
