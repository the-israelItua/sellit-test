import { styled } from "@mui/material";

const SearchWrapper = styled("div")(({ theme }) => ({
  borderRadius: "0.75rem",
  marginLeft: "0.75rem",
  width: "27.3125rem",
  height: "2.5rem",
  background: "#FFFFFF",
  border: "1px solid #CCD7E7",
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    width: "30.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "17.875rem",
  },
  "& svg": {
    "& path": {
      stroke: "#647488",
    },
  },
  "& .MuiInputBase-input": {
    "&::placeholder": {
      fontSize: "1em",
      fontWeight: 600,
      color: "#647488",
      opacity: "1",
    },
  },
}));

export { SearchWrapper };
