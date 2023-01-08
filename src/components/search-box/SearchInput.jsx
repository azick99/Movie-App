const SearchInput = ({ handleChange }) => {

  return (
    <input
      className="serch-box"
      placeholder="serach..."
      type="search"
      onChange={handleChange}
    />
  )
}

export default SearchInput
