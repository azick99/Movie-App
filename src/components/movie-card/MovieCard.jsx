import './MovieCard.style.scss'
const MovieCard = (props) => {
  const { image, name} = props
  return (
    <div className="card-container">
      <img src={image} alt={`${name}`} />
      <div>{name}</div>
    </div>
  )
}

export default MovieCard
