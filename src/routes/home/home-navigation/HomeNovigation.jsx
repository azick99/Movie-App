import { Link, Outlet } from 'react-router-dom'

const HomeNovigation = () => {
  return (
    <div className="home-navigation">
      <Link to="/" className="all">
        All
      </Link>
      <Link to="/movies" className="all">
        Movies
      </Link>
      <Link to="/serials" className="all">
        Serials
      </Link>
      <Link to="/cartoon" className="all">
        Cartoon
      </Link>
      <Outlet />
    </div>
  )
}

export default HomeNovigation
