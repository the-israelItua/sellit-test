import { styled } from "@mui/material/styles";

const PageWrapper = styled("section")(({ theme }) => ({
  position: "relative",
  display: "flex",
  padding: "5.5rem 1.5rem 0 ",
  background: "#FAFBFF",
  minHeight: "100vh",
  width: "100vw",
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "5.5rem 0 0",
  },
}));

const Content = styled("div")(({ theme }) => ({
  padding: "0 1.5rem 9rem 0",
  flex: 1,
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));

export { PageWrapper, Content };
