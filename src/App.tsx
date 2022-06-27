import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddEmployees from './CRUD /AddEmployees';
import EmployeeTable from './CRUD /EmployeeTable';
import Form from './formDataTable/Form';
import Table from './formDataTable/Table';
import Form1 from './formDataTableClassComponent/Form1';
import Table1 from './formDataTableClassComponent/Table1';
import Login from './CRUD /Login';
import GetRegisterUser from './crudregisterUser/GetRegisterUser';
import ChangeProfile from './crudregisterUser/pages/ChangeProfile';
import UserRegister from './crudregisterUser/UserRegister';
import PrivateRoute from './Routing/privateRouting/PrivateRouting';
import Layout from './component/Layout';

function App() {
  const params = useParams()
  console.log(params)
  return (
    <div className='App-header'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <UserRegister /> }/>
          <Route path="login" element={ <Login /> }/>
          
          <Route element={<PrivateRoute />}>
            <Route path="" element={ <Layout />}>
              <Route path="form" element={ <Form /> }/>
              <Route path="table" element={<Table />} />

              <Route path='form1' element={<Form1 />} />
              <Route path='table1' element={<Table1 />} />

                {/* A =>crud operation */}            
              <Route path='addemployees' element={<AddEmployees />} />
              <Route path='employeestable' element={<EmployeeTable />} />

                {/* 3 */}
              <Route path="getregisteruser" element={<GetRegisterUser />} />

                {/* 4 */}
              <Route path="changeprofile" element={<ChangeProfile />} />
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>


        
      
    </div>
      );
}

      export default App;
