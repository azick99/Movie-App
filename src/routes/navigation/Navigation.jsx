import { Link, Outlet } from 'react-router-dom'
import SearchInput from '../../components/search-box/SearchInput'
const Navigation = ({ handleChange }) => {
  return (
    <div className="navigation">
      <Link to="/" className="logo">
        Home
      </Link>
      <Link to="/new" className="logo">
        New
      </Link>
      <Link to="/download" className="logo">
        Download
      </Link>
      <SearchInput handleChange={handleChange} />
      <Outlet />
    </div>
  )
}

export default Navigation
