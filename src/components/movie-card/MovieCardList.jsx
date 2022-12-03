import MovieCard from './MovieCard'
import movies from '../../data/movies.data'
import './MovieCardList.style.scss'
const MovieCardList = () => {
  return (
    <div className="movie-card-list">
      {movies.map((movie) => {
        const { name, image, id } = movie
        return <MovieCard name={name} image={image} key={id} />
      })}
    </div>
  )
}

export default MovieCardList
