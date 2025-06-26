import {NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {

  function checkActivePage(isActive) {
    return (isActive ? "page-link border-b-2 active-page-link": "page-link")
  }

  return (
    <main>
      <div className="flex gap-3">
        <NavLink to="/host" end className={({isActive})=>checkActivePage(isActive)}>Dashboard</NavLink>
        <NavLink to="/host/income" className={({isActive})=>checkActivePage(isActive)}>Income</NavLink>
        <NavLink to="/host/reviews" className={({isActive})=>checkActivePage(isActive)}>Reviews</NavLink>
      </div>
      <Outlet />
    </main>
  )
}
export default HostLayout
