import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Forum from './pages/Forum';
import Contact from './pages/Contact';
import Card from './pages/Card';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='forum' >
            <Route index element={<Forum/>}/>
            {/* <Route path='card' element={<Card/>}/> */}
            <Route path='card/:storyId' element={<Card/>}/>
          </Route>
          <Route path='contact' element={<Contact/>}/>
        </Routes>

      
      <Footer/>
    </div>
  )
}

export default App;
