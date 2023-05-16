import Hero from './pages/hero'
import Login from './pages/login'
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
