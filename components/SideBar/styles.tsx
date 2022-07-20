import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(({ theme }) => ({
  width: "18.75rem",
  zIndex: 12,
  boxShadow: "0px 12px 32px 2px #EAECF5",
  background: "#ffffff",
  borderRadius: "1rem",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ImgWrapper = styled("div")(() => ({
  width: "5rem",
  height: "5rem",
  borderRadius: "1.5rem",
  background: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-2.5rem",
  boxShadow: "0px 8px 20px 0px #EFF1F7",
}));

const ImgContainer = styled("div")(() => ({
  position: "relative",
  width: "4.5rem",
  height: "4.5rem",
  borderRadius: "1.5rem",
  overflow: "hidden",
}));

const TextWrapper = styled("div")(() => ({
  marginTop: "3.25rem",
  padding: "0 1rem",
  background: "#ffffff",
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
}));

const SocialsWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "1rem 1rem 1.625rem",
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
}));

const NavItem = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1rem 0",
  marginBottom: "0.5rem",

  "& div": {
    display: "flex",
    alignItems: "center",
  },
}));

export {
  Wrapper,
  ImgWrapper,
  ImgContainer,
  TextWrapper,
  SocialsWrapper,
  NavItem,
};
