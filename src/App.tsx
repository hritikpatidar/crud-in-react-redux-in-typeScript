import { BrowserRouter , Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddEmployees from './CRUD /addEmployee/AddEmployees';
import EmployeeTable from './CRUD /employeeTable/EmployeeTable';
import Form from './formDataTable/Form';
import Table from './formDataTable/Table';
import Form1 from './formDataTableClassComponent/Form1';
import Table1 from './formDataTableClassComponent/Table1';
import Login from './crudregisterUser/login/Login';
import GetRegisterUser from './crudregisterUser/getRegister/GetRegisterUser';
import ChangeProfile from './crudregisterUser/changeProfile/ChangeProfile';
import UserRegister from './crudregisterUser/register/UserRegister';
import PrivateRoute from './Routing/privateRouting/PrivateRouting';
import Layout from './component/layout/Layout';
import PublicRoute from './Routing/publicRouting/PublicRouting';

function App() {
  const params = useParams()
  console.log(params)
  return (
    <div className='App-header'>
      <BrowserRouter>
        <Routes>
          
        {/* <PublicRoute restricted={false} component={<UserRegister />} path="/" exact />
        <PublicRoute restricted={false} component={<Login />} path="/" exact /> */}

            {/* <Route path="/" element={ <UserRegister /> }/>
            <Route path="login" element={ <Login /> }/> */}
          <Route element={<PublicRoute/>}>
              <Route  path="/" element={ <UserRegister /> }/>
              <Route  path="login" element={ <Login /> }/>
              <Route path="*" element={ <Login/> }/>
          </Route>

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
              <Route path="*" element={ <GetRegisterUser/> }/>

            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>


        
      
    </div>
      );
}

      export default App;
