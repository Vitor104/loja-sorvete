
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './modules/main';
import Sorvetes from './modules/sorvetes/sorvetes';
import Picoles from './modules/picoles/picoles';
import Sundaes from './modules/sundaes/sundae';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sorvetes" element={<Sorvetes />} />
        <Route path='/picoles' element={<Picoles />} />
        <Route path='/sundaes' element={<Sundaes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
