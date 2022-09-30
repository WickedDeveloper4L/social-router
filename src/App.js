import './App.css'
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Whatsapp from './pages/Whatsapp/Whatsapp';
import Facebook from './pages/Facebook/Facebook';
import Instagram from './pages/Instagram/Instagram';
import Telegram from './pages/Telegram/Telegram';
import Twitter from './pages/Twitter/Twitter';
import { Error } from './pages/ErrorPage/Error';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Whatsapp/>}/>
        <Route path='/instagram' element={<Instagram/>}/>
        <Route path='/facebook' element={<Facebook/>}/>
        <Route path='/telegram' element={<Telegram/>}/>
        <Route path='/twitter' element={<Twitter/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
