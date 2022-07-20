import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(({ theme }) => ({
  width: "15rem",
  position: "relative",
  marginBottom: "1.25rem",
  [theme.breakpoints.down("md")]: {
    width: "14rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "10rem",
  },
}));

const ImageWrapper = styled("div")(({ theme }) => ({
  width: "15rem",
  height: "15rem",
  position: "relative",
  borderRadius: "1rem",
  boxShadow: "0px 8px 16px 4px #EAECF5",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "14rem",
    height: "14rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "11rem",
    height: "11rem",
  },
}));

const CardPrice = styled("div")(() => ({
  display: "flex",
  height: "2rem",
  width: "8rem",
  borderRadius: "1rem",
  background: "#ffffff",
  alignItems: "center",
  padding: "0 0.5rem",
  boxShadow: "0px 8px 20px 0px #EFF1F7",
  marginTop: "0.5rem",
  "& h5": {
    margin: "0 0.25rem",
    fontSize: "0.875em",
    fontWeight: 700,
    color: "#000000",
  },

  "& p": {
    fontSize: "0.875em",
    fontWeight: 400,
    color: "#647488",
    textDecoration: "line-through",
  },
}));

export { Wrapper, CardPrice, ImageWrapper };
