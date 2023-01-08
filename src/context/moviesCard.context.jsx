import { createContext, useEffect, useState } from 'react'
import movies from '../data/movies.data'

export const MovieContext = createContext({
  fitlerMovies: [],
  handleChange: () => {},
})

export const MovieProvider = ({ childen }) => {
  const [onSearchHanlder, setOnSearchHandler] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const handleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setOnSearchHandler(searchFieldString)
  }
  
  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) =>
      movie.name.toLocaleLowerCase().includes(onSearchHanlder)
    )
    setFilteredMovies(newFilteredMovies)
  }, [onSearchHanlder])

  const value = {
    handleChange,
    filteredMovies,
  }

  return <MovieContext.Provider value={value}>{childen}</MovieContext.Provider>
}
