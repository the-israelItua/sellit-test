import { styled } from "@mui/material/styles";
import { Avatar, Badge, Button } from "@mui/material";

const NavItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "& h6": {
    marginLeft: "0.5rem",
    fontSize: "0.875em",
    fontWeight: 600,
    color: "#3C4551",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const BigAvatar = styled(Avatar)(({ theme }) => ({
  width: "2rem",
  height: "2rem",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: "1.5rem",
  height: "1.5rem",
  background: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const IconBadge = styled(Badge)(({ theme }) => ({
  background: "#F5F8FF",
  borderRadius: "0.5rem",
  height: "1rem",
  width: "2.1875rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "0.25rem",

  "& p": {
    fontSize: "0.75em",
    background:
      "-webkit-linear-gradient(90deg, #55ADFF 0%, rgba(196, 113, 237, 0.7) 53.65%, rgba(246, 79, 89, 0.6) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

const SignUp = styled(Button)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("sm")]: {
    display: "block",
    width: "5.3125rem",
    background:
      "linear-gradient(180deg, rgba(119, 189, 255, 0.8) 0%, #55ADFF 100%)",
    boxShadow: "0px 2px 8px #77BDFF",
    borderRadius: "0.5rem",
    fontWeight: 600,
    fontSize: "0.875em",
    height: "2.5rem",
    marginLeft: "2.575rem",
  },
}));

const BigBadge = styled(Badge)(({ theme }) => ({
  width: "2.5rem",
  height: "2.5rem",
  background: "#F5F8FF",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  marginLeft: "1.25rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0.5rem",
  },
}));

const SmallBadge = styled(Badge)(({ theme }) => ({
  width: "1.5rem",
  height: "1.5rem",
  color: "#ffffff",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(193.89deg, #F95D44 -0.69%, #FF5FC2 199.2%)",

  "& h6": {
    fontSize: "0.875em",
    fontWeight: 700,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export {
  NavItem,
  BigAvatar,
  SmallAvatar,
  IconBadge,
  SignUp,
  BigBadge,
  SmallBadge,
};
