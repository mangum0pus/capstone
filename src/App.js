import './App.css';
import Nav from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ReserveTable from './components/ReserveTable';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footbar'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reserve" element={<ReserveTable />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/confirmed" element={<ConfirmedBooking />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;