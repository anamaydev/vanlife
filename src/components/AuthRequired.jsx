import {Outlet, Navigate} from 'react-router-dom';

const AuthRequired = () => {
  const authenticated = false;
  if(!authenticated) return <Navigate to="/login" />;
  else return <Outlet/>;
}
export default AuthRequired
