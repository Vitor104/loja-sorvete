
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './modules/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
