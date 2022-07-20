import { SearchIcon } from "../../assets/svgs";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

interface SearchProps {
  placeholder: string;
  onSubmit: (val: string) => void;
}

const SearchBar = ({ placeholder, onSubmit }: SearchProps) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(e.target[0].value);
    e.target[0].value = "";
  };

  return (
    <Search onSubmit={handleSubmit}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
