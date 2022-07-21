import { styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "0 0 2rem 1.5rem",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    margin: "0 0 2rem 0rem",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 1rem",
    marginBottom: "0.75rem",
  },
}));

const SearchWrapper = styled("div")(({ theme }) => ({
  borderRadius: "0.75rem",
  width: "27.3125rem",
  height: "2.5rem",
  background: "#FFFFFF",
  border: "1px solid #CCD7E7",
  boxShadow: "0px 4px 6px 0px #F4F6F8",
  margin: "0 0 0 0.75rem",
  [theme.breakpoints.down("md")]: {
    margin: "0 0.75rem 0 0",
    width: "28.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "16rem",
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
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    "& .select__field": {
      display: "none",
    },
  },
}));

const RightContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "right",
  width: "100%",

  "& .select__field": {
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

const MobileContainer = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    width: "100%",
    padding: "0 1rem",
    "& .select__field": {
      width: "100%",
      marginBottom: "1.5rem",
    },
  },
}));

export {
  Container,
  SearchWrapper,
  LeftContainer,
  RightContainer,
  MobileContainer,
};
