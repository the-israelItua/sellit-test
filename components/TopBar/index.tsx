import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import {
  LinkIcon,
  Instagram,
  Facebook,
  Twitter,
  TikTok,
  Message,
  BagIcon,
  Reviews,
  Social,
  About,
  Activity,
} from "../../assets/svgs";
import {
  BgWrapper,
  NavList,
  NavItem,
  ImgWrapper,
  ImgContainer,
  TextWrapper,
  SocialsWrapper,
  BtnsWrapper,
  Divider,
} from "./styles";

const navList = [
  {
    title: "Shop",
    icon: <BagIcon />,
  },
  {
    title: "Reviews",
    icon: <Reviews />,
  },
  {
    title: "Social",
    icon: <Social />,
  },
  {
    title: "About",
    icon: <About />,
  },
  {
    title: "Activity",
    icon: <Activity />,
  },
];

const TopBar = () => {
  return (
    <>
      <BgWrapper>
        <Image src="/bg.png" alt="store image" layout="fill" />
      </BgWrapper>
      <NavList>
        <ImgWrapper>
          <ImgContainer>
            <Image src="/clear-shop.png" alt="clear logo" layout="fill" />
          </ImgContainer>
        </ImgWrapper>

        {navList.map(({ icon, title }) => (
          <NavItem key={title}>
            {icon} <Typography variant="body1">{title}</Typography>
          </NavItem>
        ))}
      </NavList>
      <TextWrapper>
        <Typography variant="h5">Spoodys Closet</Typography>
        <Typography variant="body1">@spoodyscloset</Typography>
      </TextWrapper>

      <SocialsWrapper>
        <LinkIcon />
        <Typography variant="body1">Website</Typography>
        <Instagram />
        <Facebook />
        <Twitter />
        <TikTok />
      </SocialsWrapper>

      <BtnsWrapper>
        <Button
          sx={{
            width: "100%",
            mr: "0.75rem",
            mb: { xs: "1rem" },
            background:
              "linear-gradient(180deg, rgba(119, 189, 255, 0.8) 0%, #55ADFF 100%)",
            boxShadow: "0px 2px 8px #77BDFF",
            borderRadius: "0.75rem",
            fontWeight: 600,
            fontSize: "0.9em",
            height: "2.5rem",
          }}
        >
          Follow
        </Button>
        <Button
          sx={{
            width: "100%",
            background: "#ffffff",
            boxShadow: "0px 4px 6px 0px #F4F6F8",
            borderRadius: "0.75rem",
            height: "2.5rem",
            border: "1px solid #CCD7E7",
          }}
        >
          <Message />
          <Typography
            sx={{
              ml: "0.5rem",
              fontWeight: 600,
              color: "#242A31",
              fontSize: "1em",
            }}
          >
            Message
          </Typography>
        </Button>
      </BtnsWrapper>
      <Divider />
    </>
  );
};

export default TopBar;
