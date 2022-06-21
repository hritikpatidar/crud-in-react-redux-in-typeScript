import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployees from './CRUD /AddEmployees';
import Table2 from './CRUD /Table2';
import Form from './formDataTable/Form';
import Table from './formDataTable/Table';
import Form1 from './formDataTableClassComponent/Form1';
import Table1 from './formDataTableClassComponent/Table1';
import Login from './loginForm/Login';

function App() {

  return (
    <div className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path="table" element={<Table />} />
            <Route path='form1' element={ <Form1 /> }/>
            <Route path='table1' element={<Table1 />}/>
            <Route path='login' element={<Login />}/>
            <Route path='addemployees' element={<AddEmployees />}/>
            <Route path='table2' element={<Table2 />}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
