import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

import { StyledBackgroundBox, StyledBox } from "@/styles/common";
import { CategoryCard, CustomCarousel, ProductCard } from "@/components/common";
import { Footer, Header } from "@/components/landingPageComp";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ImagesPath, SellersImages, TempImages } from "@/constants";
import { RequestBanner } from "@/components/home";
import BannerGrids from "@/components/home/bannerGrids";

const HomePage = () => {
  const categories = [
    {
      id: 1,
      name: "Build Material",
    },
    {
      id: 2,
      name: "Constuction Chemicals",
    },
    {
      id: 3,
      name: "Paint & Tools",
    },
    {
      id: 4,
      name: "Hand Tools",
    },
    {
      id: 5,
      name: "Plumbing",
    },
    {
      id: 6,
      name: "Sanitary Ware",
    },
    {
      id: 7,
      name: "Electrical",
    },
    {
      id: 8,
      name: "Lighting",
    },
    {
      id: 9,
      name: "Hardware",
    },
    {
      id: 10,
      name: "Saftey",
    },
    {
      id: 11,
      name: "Wood & Tools",
    },
    { id: 12, name: "New Arrivals" },
  ];

  const sampleProducts = [
    {
      id: 1,
      avatar: "/avatar1.jpg",
      title: "Product 1",
      discountedPrice: "AED 14.99",
      actualPrice: "AED 29.99",
      rating: 4,
    },
    {
      id: 2,
      avatar: "/avatar2.jpg",
      title: "Product 2",
      discountedPrice: "AED 19.99",
      actualPrice: "AED 39.99",
      rating: 3.5,
    },
    {
      id: 3,
      avatar: "/avatar3.jpg",
      title: "Product 3",
      discountedPrice: "AED 24.99",
      actualPrice: "AED 49.99",
      rating: 5,
    },
    {
      id: 4,
      avatar: "/avatar4.jpg",
      title: "Product 4",
      discountedPrice: "AED 17.99",
      actualPrice: "AED 34.99",
      rating: 4.5,
    },
    {
      id: 5,
      avatar: "/avatar5.jpg",
      title: "Product 5",
      discountedPrice: "AED 21.99",
      actualPrice: "AED 42.99",
      rating: 3,
    },
    {
      id: 6,
      avatar: "/avatar6.jpg",
      title: "Product 6",
      discountedPrice: "AED 27.99",
      actualPrice: "AED 55.99",
      rating: 4,
    },
    {
      id: 7,
      avatar: "/avatar7.jpg",
      title: "Product 7",
      discountedPrice: "AED 16.99",
      actualPrice: "AED 32.99",
      rating: 4.8,
    },
    {
      id: 8,
      avatar: "/avatar8.jpg",
      title: "Product 8",
      discountedPrice: "AED 20.99",
      actualPrice: "AED 41.99",
      rating: 3.7,
    },
    {
      id: 9,
      avatar: "/avatar9.jpg",
      title: "Product 9",
      discountedPrice: "AED 22.99",
      actualPrice: "AED 45.99",
      rating: 4.2,
    },
    {
      id: 10,
      avatar: "/avatar10.jpg",
      title: "Product 10",
      discountedPrice: "AED 19.99",
      actualPrice: "AED 39.99",
      rating: 4.9,
    },
  ];

  return (
    <>
      <Box>
        <Header />
      </Box>

      <StyledBox sx={{ margin: "unset !important" }}>
        {/* Banner Section */}
        <Container maxWidth={"xl"}>
          <StyledBackgroundBox className="">
            <BannerGrids />

            {/* CATEGORIES SECTION */}

            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span" />
                <span className="line-span" />
              </span>
              OUR CATEGORIES
            </h4>

            <Grid
              container
              sx={{
                marginY: 6,
              }}
              spacing={2}
            >
              {categories.map(({ name }) => (
                <CategoryCard name={name} />
              ))}
            </Grid>

            {/* PRODUCTS SALE SECTION */}

            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span" />
                <span className="line-span" />
              </span>
              FLASH SALE
            </h4>

            <Grid
              container
              sx={{
                marginY: 6,
                width: "100%",
              }}
              alignItems="center"
              justifyContent="center"
            >
              {sampleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  avatar={TempImages.DummyTwo}
                  title={product.title}
                  discountedPrice={product.discountedPrice}
                  actualPrice={product.actualPrice}
                  rating={product.rating}
                />
              ))}
            </Grid>

            {/* TRUSTED SELLERS */}

            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span" />
                <span className="line-span" />
              </span>
              OUR TRUSTED SELLERS
            </h4>
            <Box sx={{ flexDirection: "column", marginY: 10 }}>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <img
                    src="../../src/assets/Rectangle 1371.png"
                    style={{ maxWidth: "100%", width: "auto", height: "100%" }}
                  />
                </Box>
                <Box>
                  <img
                    src="../../src/assets/Rectangle 1372.png"
                    style={{ maxWidth: "100%", width: "auto", height: "100%" }}
                  />
                </Box>
                <Box>
                  <img
                    src="../../src/assets/Rectangle 1373.png"
                    style={{ maxWidth: "100%", width: "auto", height: "100%" }}
                  />
                </Box>
                <Box>
                  <img
                    src="../../src/assets/Rectangle 1374.png"
                    style={{ maxWidth: "100%", width: "auto", height: "100%" }}
                  />
                </Box>
              </Box>
            </Box>

            {/* SELLING PRODUCTS SECTION */}

            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span" />
                <span className="line-span" />
              </span>
              OUR SELLING PRODUCTS
            </h4>

            <Grid
              container
              sx={{
                marginY: 6,
                width: "100%",
              }}
              alignItems="center"
              justifyContent="center"
            >
              {sampleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  avatar={TempImages.DummyThree}
                  title={product.title}
                  discountedPrice={product.discountedPrice}
                  actualPrice={product.actualPrice}
                  rating={product.rating}
                />
              ))}
            </Grid>

            {/* SHOP BY BRANDS */}

            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span" />
                <span className="line-span" />
              </span>
              SHOP BY BRANDS
            </h4>

            <CustomCarousel
              logos={[
                SellersImages.BrandImage01,
                SellersImages.BrandImage02,
                SellersImages.BrandImage03,
                SellersImages.BrandImage04,
                SellersImages.BrandImage05,
                SellersImages.BrandImage06,
              ]}
            />

            <RequestBanner />
          </StyledBackgroundBox>
        </Container>
      </StyledBox>
      <Footer />
    </>
  );
};

export default HomePage;
