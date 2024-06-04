import { FC } from "react";
import { Header } from "../../components/landingPageComp/header";
import { Footer } from "../../components/landingPageComp/footer";
import { Box, Container, Grid, styled } from "@mui/material";
import BreadCrumbs from "../../components/common/breadcrumbs";
import ListingFilters from "../../components/SupplierListing/filter";
import LisingMain from "../../components/SupplierListing/listing";
import LisingPagination from "../../components/SupplierListing/listingPagination";
import ShopByBrands from "../../components/SupplierListing/brandsShop";
import { RequestBanner } from "@/components/common/requestBanner";

const MainDiv = styled(Box)(({ theme }) => ({
  marginTop: "168px",
  "@media (max-width:768px)": {
    marginTop: "64px",
  },
  "& .listingFilterGrid": {
    marginTop: "26px",
    marginBottom: "5rem",
  },
}));

const SupplierListing: FC = () => {
  return (
    <>
      <Header />
      <MainDiv>
        <BreadCrumbs
          data={[
            { link: "/supplierListing", text: "Home" },
            { link: "/supplierListing", text: "Suppliers" },
          ]}
        />
        <Container maxWidth="xl">
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 3, md: 5 }}
            className="listingFilterGrid"
          >
            <Grid item xs={12} sm={5} md={4} lg={3}>
              <ListingFilters />
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={9}>
              <LisingMain />
              <LisingPagination />
            </Grid>
          </Grid>

          <ShopByBrands />
          <RequestBanner />
        </Container>
      </MainDiv>
      <Footer />
    </>
  );
};

export default SupplierListing;
