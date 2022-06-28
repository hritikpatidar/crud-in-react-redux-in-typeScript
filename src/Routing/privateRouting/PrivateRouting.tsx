
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = localStorage.getItem('token') == null ? false : true;
    return (
        <>
            { token ? <Outlet /> : <Navigate to="/login" />} 
        </>
    );
};

export default PrivateRoute