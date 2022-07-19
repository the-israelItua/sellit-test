import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "0.75rem",
  backgroundColor: "#F5F8FF",
  marginLeft: "8.5625rem",
  width: "30rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: "1rem",
    width: "22rem",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "2.75rem",
    transition: theme.transitions.create("width"),
    width: "30rem",
    "&::placeholder": {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#303741",
      opacity: "1",
    },
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}));

export { Search, SearchIconWrapper, StyledInputBase };
