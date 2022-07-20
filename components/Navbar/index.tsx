import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "../SearchBar";
import ProfileImage from "../../assets/images/profile_image.png";
import {
  Logo,
  MenuIcon,
  AboutIcon,
  CategoryIcon,
  ChevronDown,
  BellIcon,
  CartIcon,
} from "../../assets/svgs";
import {
  NavItem,
  BigAvatar,
  SmallAvatar,
  SearchWrapper,
  SignUp,
  BigBadge,
  IconBadge,
  SmallBadge,
} from "./styles";

const NavBar = () => {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          background: "#ffffff",
          height: "4rem",
          padding: "0",
          boxShadow: "0",
          left: 0,
        }}
      >
        <Toolbar>
          <Box sx={{ borderRight: "1px solid #E7EEFD" }}>
            <IconButton
              aria-label="open drawer"
              sx={{
                height: "2.5rem",
                width: "2.5rem",
                borderRadius: "50%",
                background: "#F5F8FF",
                mr: "0.5rem",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              ml: "0.5rem",
              display: "flex",
              height: "2.5rem",
              alignItems: "center",
            }}
          >
            <Logo />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                ml: "0.5rem",
                display: { xs: "none", sm: "block" },
                fontSize: "1.5em",
                fontWeight: 700,
                color: "#212236",
              }}
            >
              Sellit
            </Typography>

            <IconBadge>
              <Typography variant="body1">Beta</Typography>
            </IconBadge>
          </Box>

          <SearchWrapper>
            <SearchBar
              placeholder="Products, Stores, Groups, & People"
              onSubmit={() => {}}
            />
          </SearchWrapper>

          <NavItem sx={{ margin: "0 2rem 0 2.5rem" }}>
            <AboutIcon />
            <Typography variant="h6">About</Typography>
          </NavItem>
          <NavItem sx={{ mr: "8.125rem" }}>
            <CategoryIcon />
            <Typography variant="h6">Categories</Typography>
            <ChevronDown />
          </NavItem>
          <SignUp>Sign Up</SignUp>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <SmallAvatar>
                <ChevronDown />
              </SmallAvatar>
            }
          >
            <BigAvatar>
              <Image src={ProfileImage} alt="profile image" layout="fill" />
            </BigAvatar>
          </Badge>
          <Badge
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            overlap="circular"
            badgeContent={
              <SmallBadge>
                <Typography variant="h6">2</Typography>
              </SmallBadge>
            }
          >
            <BigBadge>
              <BellIcon />
            </BigBadge>
          </Badge>
          <Badge
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            overlap="circular"
            badgeContent={
              <SmallBadge>
                <Typography variant="h6">2</Typography>
              </SmallBadge>
            }
          >
            <BigBadge>
              <CartIcon />
            </BigBadge>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
