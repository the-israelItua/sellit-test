import { SearchIcon } from "../../assets/svgs";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

const SearchBar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Products, Stores, Groups, & People"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
