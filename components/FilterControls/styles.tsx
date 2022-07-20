import { styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "0 0 2rem 1.5rem",
  width: "100%",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    margin: "0 0 2rem 0rem",
  },
}));

const SearchWrapper = styled("div")(({ theme }) => ({
  borderRadius: "0.75rem",
  width: "27.3125rem",
  height: "2.5rem",
  background: "#FFFFFF",
  border: "1px solid #CCD7E7",
  boxShadow: "0px 4px 6px 0px #F4F6F8",
  margin: "0 0.75rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    width: "28.5rem",
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

const LeftContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row-reverse",
  },
}));

const RightContainer = styled("div")(({ theme }) => ({
  display: "flex",
  // justifyContent: "space-between",
  background: "red",

  "& .select__field": {
    // marginLeft: "0.75rem",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",

      "& svg": {
        marginRight: 0,
      },
      "& p": {
        display: "none",
      },
      "& .chevron": {
        display: "none",
      },
    },
  },
}));

export { Container, SearchWrapper, LeftContainer, RightContainer };
