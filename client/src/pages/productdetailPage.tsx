import ProductBanner from "@/components/Productdetailcomponent/product-banner.component";
import RatingsReviews from "@/components/Productdetailcomponent/ratingsreviews";
import SliderItem from "@/components/Productdetailcomponent/slider-item";
import { Footer, Header } from "@/components/landingPageComp";
import { Box } from "@mui/material";
import { FC } from "react";
import ProductDescription from "../components/Productdetailcomponent/productdescription";
import "../components/Productdetailcomponent/style.scss";

const ProductDetailPage: FC = () => {
  return (
    <Box>
      <Header />
      <div className="product-detail-page">
        <ProductBanner />
        <ProductDescription />
        <RatingsReviews />
        <SliderItem />
      </div>
      <Footer />
    </Box>
  );
};
export default ProductDetailPage;
