import { styled } from "@mui/material/styles";

const PageWrapper = styled("section")(({ theme }) => ({
  position: "relative",
  display: "flex",
  padding: "5.5rem 1.5rem 0 ",
  background: "#FAFBFF",
  minHeight: "100vh",

  [theme.breakpoints.down("sm")]: {
    padding: "5.5rem 1rem 0",
  },
}));

const Content = styled("div")(({ theme }) => ({
  padding: "0 0 9rem",
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));

export { PageWrapper, Content };
