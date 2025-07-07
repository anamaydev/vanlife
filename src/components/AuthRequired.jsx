import {Outlet, Navigate, useLocation} from 'react-router-dom';

const AuthRequired = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedIn");
  console.log("AuthRequired location: ", location);
  if(!isLoggedIn) return <Navigate to="/login" replace state={{message: "You must log in first", from: location}} />;
  else return <Outlet/>;
}
export default AuthRequired
