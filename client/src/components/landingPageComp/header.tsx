import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Grid,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";

import { styled } from "@mui/system";
// import { NavLinks } from "../common";
import { SearchComponent } from "../inputs";
import { useAuth } from "@/contextProviders/authentication";
import { useNavigate } from "react-router-dom";
import { setUserInLocalStorage } from "@/utils";

const StyledAppBar = styled(AppBar)`
  background: green;
  box-shadow: none;
`;

const SocialMediaBar = styled(Grid)`
  top: 0;
  justify-content: space-between;
  align-items: center;
`;

const MainNavigation = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled(IconButton)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const DrawerContainer = styled(Box)`
  width: 320px;
  padding-top: 8px;
`;

const StyledList = styled(List)`
  width: "100%";
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;

  transition: color 0.3s ease; /* Add transition for hover effect */

  &:hover {
    color: #cccccc; /* Change color on hover */
  }
`;
const LogoImg = styled("img")`
  margin-left: 16px;
`;

const MenuButton = styled(Button)(({ theme }) => ({
  border: "none",
  borderRadius: 5,
  backgroundColor: "#38C64E",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },

  "&:hover": {
    backgroundColor: "#cccc",
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "white",
  width: "96%",
  alignSelf: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const RowContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  background-color: #1e1e1e;
  color: white;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchContainer = styled(Grid)`
  display: flex;
  margin: 0px 50px;
`;

const SearchInput = styled(InputBase)`
  margin: 8px;
`;

const CartContainer = styled(Grid)`
  display: flex;
  align-items: center;
  margin-right: 16px;
  color: white;
`;

const LanguageContainer = styled(Grid)`
  display: flex;
  align-items: center;
  margin-right: 16px;
  color: white;
`;

const PersonContainer = styled(Grid)`
  display: flex;
  align-items: center;
  margin-right: 16px;
  color: white;
`;

const VerticalLine = styled(Box)`
  height: 24px;
  border-left: 1px solid #ccc;
  margin-right: 16px;
  color: white;
`;

const dummyArray = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Services",
  },
  {
    id: 3,
    title: "Our Partners",
  },
  {
    id: 4,
    title: "Get a Quote",
  },
  {
    id: 5,
    title: "About Us",
  },
  {
    id: 6,
    title: "Contacts",
  },
];

export const Header: React.FC = () => {
  const { user, setUser } = useAuth() as any ;
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);

  const handleLanguageClick = (event: any) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLoginClick = () => {
    if(user) return
    else navigate("/login")
  }

  const onLogoutClick = () => {
    setUserInLocalStorage(null)
    setUser(null)
    navigate("/login")
  }

  const drawer = (
    <DrawerContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "8px",
        }}
      >
        <Typography variant="h6" component="div" sx={{ padding: "16px" }}>
          <LogoImg
            src={"../../../src/assets/emartech-logo.png"}
            alt="logo"
            sx={{ width: 100 }}
          />
        </Typography>
        <IconButton onClick={() => setMobileOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <StyledList>
        {dummyArray.map(({ title, id }) => (
          <>
            <ListItemButton key={id} onClick={() => setMobileOpen(false)}>
              <ListItemText primary={title} />
            </ListItemButton>
            <Divider sx={{ width: "90%", alignSelf: "center" }} />
          </>
        ))}
      </StyledList>
      <StyledDivider />
      <Box display="flex" justifyContent="center" padding="16px">
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>

        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
      </Box>
    </DrawerContainer>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowX: "hidden", // Prevent horizontal overflow
      }}
    >
      <StyledAppBar position="absolute">
        <Box
          sx={{
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <MainNavigation variant="dense">
            <SocialMediaBar container>
              <Grid item>
                <NavLinks>
                  <StyledLink href="#" color="inherit" underline="none">
                    BECOME A SELLER
                  </StyledLink>
                  <StyledLink href="#" color="inherit" underline="none">
                    HELP & SUPPORT
                  </StyledLink>
                  <StyledLink href="#" color="inherit" underline="none">
                    CAREERS
                  </StyledLink>
                </NavLinks>
                {/* <NavLinks
                  links={[
                    // Define your dynamic nav links here
                    { title: "BECOME A SELLER" },
                    { title: "HELP & SUPPORT" },
                    { title: "CAREERS" },
                  ]}
                /> */}
              </Grid>
              <Grid item>
                <IconButton>
                  <TwitterIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <FacebookIcon sx={{ color: "white" }} />
                </IconButton>

                <IconButton>
                  <LinkedInIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <YouTubeIcon sx={{ color: "white" }} />
                </IconButton>
              </Grid>
            </SocialMediaBar>
          </MainNavigation>

          <Divider />
        </Box>

        <MainNavigation>
          <Box
            sx={{
              // flexGrow: 1,
              display: { md: "block" },
            }}
          >
            <LogoImg
              src={"../../../src/assets/emartech-logo-white.svg"}
              alt="logo"
            />
          </Box>
          <NavLinks>
            <StyledLink href="#">HOME</StyledLink>
            <StyledLink href="#">SERVICES</StyledLink>
            <StyledLink href="#">OUR PARTNERS</StyledLink>
            <StyledLink href="#">ABOUT US</StyledLink>
          </NavLinks>
          {/* <NavLinks
            links={[
              // Define your dynamic nav links here
              { title: "HOME" },
              { title: "SERVICES" },
              { title: "OUR PARTNERS" },
              { title: "ABOUT US" },
              // Add more dynamic links as needed
            ]}
          /> */}
          <Box>
            <MenuButton className="para-text white-color">
              Request a Quote
            </MenuButton>
          </Box>

          <MobileMenuIcon
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </MobileMenuIcon>
        </MainNavigation>

        {/* SEARCH SECTION */}
        <RowContainer container>
          <SearchContainer>
            <SearchComponent />
          </SearchContainer>
          <CartContainer>
            <IconButton>
              <ShoppingCartIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography variant="body1">Cart</Typography>
          </CartContainer>
          <LanguageContainer>
            <IconButton onClick={handleLanguageClick}>
              <LanguageIcon sx={{ color: "white" }} />
              <ArrowDropDownIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
            >
              <MenuItem onClick={handleLanguageClose}>English</MenuItem>
              <MenuItem onClick={handleLanguageClose}>Spanish</MenuItem>
              <MenuItem onClick={handleLanguageClose}>French</MenuItem>
            </Menu>
          </LanguageContainer>
          <PersonContainer>
            <IconButton onClick={onLoginClick}>
              <PersonIcon sx={{ color: "white" }} />
              <Typography
                sx={{ marginLeft: "5px", color: "white" }}
                variant="body1"
              >
                {user ? user.firstName : "Login"}
              </Typography>
            </IconButton>
            <VerticalLine sx={{ marginLeft: "10px", color: "white" }} />
            {
              user ?
                <IconButton onClick={onLogoutClick}>
                  <LogoutIcon sx={{ color: "white" }} />
                </IconButton> :
                <Box onClick={() => navigate("/signup")}
                  sx={{ display:"flex",alignItems:"center", cursor:"pointer" }}>
                  <Typography variant="body1">SignUp</Typography>
                </Box>
            }
          </PersonContainer>
        </RowContainer>
      </StyledAppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
};
