import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './formDataTable/Form';
import Table from './formDataTable/Table';

function App() {

  return (
    <div className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path="table" element={<Table />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
