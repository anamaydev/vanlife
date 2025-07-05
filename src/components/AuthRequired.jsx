import {Outlet, Navigate} from 'react-router-dom';

const AuthRequired = () => {
  const authenticated = false;
  if(!authenticated) return <Navigate to="/login" state={{message: "You must log in first"}}/>;
  else return <Outlet/>;
}
export default AuthRequired
