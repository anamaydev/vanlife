import {NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {

  function checkActivePage(isActive) {
    return (isActive ? "page-link border-b-2 active-page-link": "page-link")
  }

  return (
    <main className="flex-grow flex flex-col px-3">
      <nav className="flex gap-3 py-4">
        <NavLink to="." end className={({isActive})=>checkActivePage(isActive)}>Dashboard</NavLink>
        <NavLink to="income" className={({isActive})=>checkActivePage(isActive)}>Income</NavLink>
        <NavLink to="vans" className={({isActive})=>checkActivePage(isActive)}>Vans</NavLink>
        <NavLink to="reviews" className={({isActive})=>checkActivePage(isActive)}>Reviews</NavLink>
      </nav>
      <Outlet />
    </main>
  )
}
export default HostLayout
