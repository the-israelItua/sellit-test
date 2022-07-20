import { styled } from "@mui/material";

const SearchWrapper = styled("div")(({ theme }) => ({
  borderRadius: "0.75rem",
  width: "27.3125rem",
  height: "2.5rem",
  background: "#FFFFFF",
  border: "1px solid #CCD7E7",
  boxShadow: "0px 4px 6px 0px #F4F6F8",

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
      fontSize: "0.9em",
      fontWeight: 600,
      color: "#647488",
      opacity: "1",
    },
  },
}));

export { SearchWrapper };
