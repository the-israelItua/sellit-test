import { styled } from "@mui/material/styles";

const BgWrapper = styled("div")(({ theme }) => ({
  height: "13.5rem",
  position: "relative",
  margin: "0 1.5rem",
  borderRadius: "1.0625rem",
  overflow: "hidden",
  background: "#021b19",
  marginBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    margin: 0,
    borderRadius: "1.0625rem 1.0625rem 0 0",
    height: "10.25rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "1rem",
  },
}));

const NavList = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    background: "#ffffff",
    display: "flex",
    padding: "1.1875rem 0",
    justifyContent: "flex-end",
    borderRadius: "0 0 1.0625rem 1.0625rem",
    boxShadow: "0px 8px 16px 4px #EAECF5",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "1rem",
    paddingTop: "3.625rem",
  },
}));

const NavItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: "2rem",

  "& svg": {
    marginRight: "0.5rem",
  },
}));

const ImgWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "2.75rem",
  width: "5rem",
  height: "5rem",
  borderRadius: "1.5rem",
  background: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-3.5rem",
  boxShadow: "0px 8px 20px 0px #EFF1F7",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-5.5rem",
  },
}));

const ImgContainer = styled("div")(() => ({
  position: "relative",
  width: "4.5rem",
  height: "4.5rem",
  borderRadius: "1.5rem",
}));

const TextWrapper = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    padding: "0.75rem 0",
    "& h5": {
      fontSize: "1.25em",
      fontWeight: 700,
      color: "#242A31",
    },
    "& p": {
      fontSize: "0.875em",
      fontWeight: 500,
      color: "#3C4551",
    },
  },
  [theme.breakpoints.down("sm")]: {
    margin: "12rem 1rem 0 0",
  },
}));

const SocialsWrapper = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0 1.15rem",
    "& svg": {
      marginRight: "0.5rem",
    },
    "& p": {
      marginRight: "0.5rem",
      paddingRight: "0.5rem",
      borderRight: "1px solid #E7EEFD",
      fontSize: "0.875em",
      fontWeight: 500,
      color: "#647488",
    },
  },
}));

const BtnsWrapper = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    mb: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginRight: "1rem",
  },
}));

const Divider = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    height: "0.8rem",
    width: "100%",
    background: "#E7EEFD",
    margin: "1.5rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export {
  BgWrapper,
  NavList,
  NavItem,
  ImgWrapper,
  ImgContainer,
  TextWrapper,
  SocialsWrapper,
  BtnsWrapper,
  Divider,
};
