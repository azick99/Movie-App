import { createContext } from 'react'
import MovieCardList from '../../../../components/movie-card/MovieCardList'
import { MovieContext } from '../../../../context/moviesCard.context'
const All = () => {
  // const { filteredMovies } = createContext(MovieContext)

  return (
    <div>
      This is All page
      <MovieCardList  />
    </div>
  )
}

export default All
