import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("form")(() => ({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(() => ({
  padding: "0 0.5rem 0 0.75rem",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "2.75rem",
    transition: theme.transitions.create("width"),
    color: "#303741",
  },
}));

export { Search, SearchIconWrapper, StyledInputBase };
