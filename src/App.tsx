import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './formDataTable/Form';
import Table from './formDataTable/Table';
import Form1 from './formDataTableClassComponent/Form1';
import Table1 from './formDataTableClassComponent/Table1';

function App() {

  return (
    <div className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path="table" element={<Table />} />
            <Route path='form1' element={ <Form1 /> }/>
            <Route path='table1' element={<Table1 />}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
