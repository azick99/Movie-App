import MovieCard from './MovieCard'
import './MovieCardList.style.scss'

const MovieCardList = ({ filteredMovies }) => {
  return (
    <div className="movie-card-list">
      {filteredMovies.map((movie) => {
        const { name, image, id } = movie
        return <MovieCard name={name} image={image} key={id} />
      })}
    </div>
  )
}

export default MovieCardList
