import { createContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import SearchInput from '../../components/search-box/SearchInput'
import { MovieContext } from '../../context/moviesCard.context'
const Navigation = () => {
  // const { handleChange } = createContext(MovieContext)

  // const onChangeHandler = () => handleChange()
  
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
      <SearchInput  />
      <Outlet />
    </div>
  )
}

export default Navigation
