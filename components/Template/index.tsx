import { Box } from "@mui/material";
import NavBar from "../Navbar";
import SideBar from "../SideBar";
import { PageWrapper, Content } from "./styles";

const Template = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <Box>
          <SideBar />
        </Box>
        <Content>{children}</Content>
      </PageWrapper>
    </>
  );
};

export default Template;
