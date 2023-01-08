import MovieCardList from '../../components/movie-card/MovieCardList'

const Home = ({filteredMovies}) => {
  return (
    <div>
      <MovieCardList filteredMovies={filteredMovies} />
    </div>
  )
}

export default Home
