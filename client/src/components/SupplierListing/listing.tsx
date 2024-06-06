import { FC } from "react";
import { Box, Grid, styled } from "@mui/material";
import { ProductCard } from "../common";
import UserImg from "../../assets/images/userImg.png"

const ListingMainBox = styled(Box)(({ theme }) => ({
  "& .auth-heading": {
    paddingBottom: "20px",
    margin: 0,
    fontWeight: "500",
  },
  "& .sortingBar": {
    border: "0.51px solid rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    "& .sub-heading-text": {
      fontWeight: "500",
    },
  },
  "& .prductGridContainer": {
    paddingBottom: "40px",
  },
  "& .MuiCard-root": {
    width: "100%",
  },
}));

const LisingMain: FC = () => {
  const arrayToMap = [
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
    {
      avatar: UserImg,
      title: "Albert Flores",
      subtitle: "Project Executor",
      rating: 4,
    },
  ];
  return (
    <ListingMainBox>
      <h1 className="auth-heading">Individual items</h1>
      <Grid
        className="prductGridContainer"
        container
        rowSpacing={5}
        columnSpacing={2}
      >
        <Grid item xs={12}>
          <Box className="sortingBar align-center d-flex">
            <p className="sub-heading-text">Sorted By:</p>
            <select name="cars" id="cars">
              <option value="Date[Newest to Oldest]">
                Date[Newest to Oldest]
              </option>
            </select>
          </Box>
        </Grid>
        {arrayToMap.map((item) => (
          <ProductCard {...item} type="supplierListing" />
        ))}
      </Grid>
    </ListingMainBox>
  );
};

export default LisingMain;
