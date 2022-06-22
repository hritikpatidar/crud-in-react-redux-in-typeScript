import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployees from './CRUD /AddEmployees';
import EmployeeTable from './CRUD /EmployeeTable';
import Form from './formDataTable/Form';
import Table from './formDataTable/Table';
import Form1 from './formDataTableClassComponent/Form1';
import Table1 from './formDataTableClassComponent/Table1';
import Login from './CRUD /Login';

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
            <Route path='employeestable' element={<EmployeeTable />}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
