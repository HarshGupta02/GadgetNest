import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Redirect, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({isAdmin, element : Component, ...rest}) => {
  const navigate = useNavigate();
  const {loading, isAuthenticated, user} = useSelector((state) => state.user);
  return (
    <Fragment>
        {loading === false && (
            <Route 
            {...rest}
            render = {(props) => {
                // if(!isAuthenticated) return navigate("/login");
                // return <Component {...props} />
                  if (isAuthenticated === false) {
                    return navigate("/login");
                  }
                  if (isAdmin === true && user.role !== "admin") {
                    return navigate("/login");
                  }
                  return <Component {...props} />;
              }}
            />
        )}
    </Fragment>
  )
}

export default ProtectedRoute