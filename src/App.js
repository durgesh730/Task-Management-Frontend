import Main from './components/Main';
import './components/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
