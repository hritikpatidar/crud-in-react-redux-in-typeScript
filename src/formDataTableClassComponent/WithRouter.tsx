import React from "react"
import { useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component:any) => {
  const Wrapper = (props:any) => {
    const navigate = useNavigate();
    const params = useParams();
    
    return (
      <Component
        navigate={navigate}
        params={params}
        {...props}
        />
    );
  };
  
  return Wrapper;
};