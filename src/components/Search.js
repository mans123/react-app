export default Search = (props) => {
    return (<div id="search">
        <input type="text" value={props.data.searchText} onChange={(e) => {
            props.data.setSearch(e.target.value);
            // console.log(props.data.searchText); 
            // console.log(e.target.value) 
        }}></input>
        <button onClick={() => {
            props.data.filteredList = props.data.restaurants.filter(res =>
                res.name.toLowerCase().includes(props.data.searchText.toLowerCase())

            )
            props.data.setFilter(props.data.filteredList)

        }
        }>Search</button>
    </div >)
};