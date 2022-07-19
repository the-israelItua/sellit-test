import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useAppSelector } from "../../app/hooks";
import {
  LinkIcon,
  Instagram,
  Facebook,
  Twitter,
  TikTok,
  Message,
  BagIcon,
  ChevronRight,
  Reviews,
  Social,
  About,
  Activity,
} from "../../assets/svgs";
import {
  Wrapper,
  ImgWrapper,
  ImgContainer,
  TextWrapper,
  SocialsWrapper,
  NavItem,
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

const SideBar = () => {
  const { data, pending, error } = useAppSelector((state) => state.user);
  return (
    <Wrapper>
      <Box sx={{ position: "relative", width: "100%", height: "10rem" }}>
        <Image src={data.profile_avatar_url} alt="fade logo" layout="fill" />
      </Box>

      <Box sx={{ background: "#fefefe", position: "absolute", pl: "1.25rem" }}>
        <ImgWrapper>
          <ImgContainer>
            <Image
              src={data.timeline_avatar_url}
              alt="clear logo"
              layout="fill"
            />
          </ImgContainer>
        </ImgWrapper>
      </Box>

      <TextWrapper>
        <Typography variant="h5">{data.name}</Typography>
        <Typography variant="body1">@{data.username}</Typography>
      </TextWrapper>

      <SocialsWrapper>
        <LinkIcon />
        <Typography variant="body1">Website</Typography>
        <Instagram />
        <Facebook />
        <Twitter />
        <TikTok />
      </SocialsWrapper>

      <Box
        sx={{
          mx: "1rem",
          pb: "1.5rem",
          borderBottom: "1px solid #F5F8FF",
          mb: "1rem",
        }}
      >
        <Button
          sx={{
            width: "100%",
            mb: "1rem",
            background:
              "linear-gradient(180deg, rgba(119, 189, 255, 0.8) 0%, #55ADFF 100%)",
            color: "#ffffff",
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
      </Box>

      <Box sx={{ borderBottom: "1px solid #F5F8FF", mb: "12rem" }}>
        {navList.map((item) => (
          <NavItem key={item.title}>
            <div>
              {item.icon}
              <Typography
                sx={{
                  ml: "0.5rem",
                  color: "#505D6D",
                  fontWeight: 500,
                  fontSize: "1em",
                }}
              >
                {item.title}
              </Typography>
            </div>

            <ChevronRight />
          </NavItem>
        ))}
      </Box>
    </Wrapper>
  );
};

export default SideBar;
