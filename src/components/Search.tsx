import React from 'react'
import {TextField, IconButton} from "@mui/material";
import { Search  as SearchIcon} from '@mui/icons-material';


export type SProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void
  disabled: boolean,
}
const Search = ({query, setQuery, handleSearch, disabled}: SProps) => {
  return (
      <form className="search-form" onSubmit={(e) => handleSearch(e)}>
        <TextField
          inputProps={{ "data-testid": "search-input" }}
          value={query}
          id="search-bar"
          className="input__box"
          onChange={(e) => setQuery(e.target.value)}
          label="Enter a search query"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton disabled={disabled} type="submit" data-testid="search-btn" aria-label="search" className="input_submit">
        <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
  </form>
  )

}

export default Search
