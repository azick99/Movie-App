const SearchInput = (props) => {
  return (
    <input
      className="serch-box"
      placeholder="serach..."
      type="search"
      onChange={props.handleChange}
    />
  )
}

export default SearchInput
