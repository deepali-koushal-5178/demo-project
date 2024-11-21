import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFount';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/options' element={<Menu/>}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
