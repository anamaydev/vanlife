import {Link, Outlet } from 'react-router-dom';

const HostLayout = () => {
  return (
    <main>
      <div className="flex gap-3">
        <Link to="/host" className="page-link">Dashboard</Link>
        <Link to="/host/income" className="page-link">Income</Link>
        <Link to="/host/reviews" className="page-link">Reviews</Link>
      </div>
      <Outlet />
    </main>
  )
}
export default HostLayout
