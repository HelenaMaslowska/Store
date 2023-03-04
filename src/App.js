import './App.css';
import Main from './components/Main';
import Margin from './components/Margin';
import Menu from './components/Menu';
import Header from './components/Header'
import {BrowserRouter, Routes} from 'react-router-dom'

export default function App() {
  return (

  <BrowserRouter>
    
      <Menu/>
      <Header/>
      <Margin/>
      <Main/>

    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  </BrowserRouter>

  );
}


{/* <div className="App">
      <Main/>
    </div> */}