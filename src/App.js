import Home from './screans/home';
import Admin from './screans/adminscrean';
import { Fulltext } from './screans/fulltext';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Замените Switch на Routes

function App() {
  return (
    <BrowserRouter>
      <div className='contaniner'>
        <Routes> {/* Замените Switch на Routes */}
          <Route path='/' element={<Home />} /> {/* Замените Component на element */}
          <Route path='/full' element={<Fulltext />} /> {/* Замените Component на element */}
          <Route path="/adm" element={<Admin />} /> {/* Замените Component на element */}
        </Routes> {/* Замените Switch на Routes */}
      </div>
    </BrowserRouter>
  );
}

export default App;
