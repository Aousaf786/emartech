import { FC, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  styled,
} from "@mui/material";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";

const dummyArray = [
  {
    id: 1,
    title: "Lorem Ipsume 01",
    subTitle: "Lorem Ipsum 01",
    rating: 3,
    image: "../../src/assets/Rectangle 48.jpg",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    id: 2,
    title: "Lorem Ipsume 02",
    subTitle: "Lorem Ipsum 02",
    rating: 5,
    image: "../../src/assets/Rectangle 48.jpg",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    id: 3,
    title: "Lorem Ipsume 03",
    subTitle: "Lorem Ipsum 03",
    rating: 2,
    image: "../../src/assets/Rectangle 48.jpg",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    id: 4,
    title: "Lorem Ipsume 04",
    subTitle: "Lorem Ipsum 04",
    rating: 1,
    image: "../../src/assets/Rectangle 48.jpg",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    id: 5,
    title: "Lorem Ipsume 05",
    subTitle: "Lorem Ipsum 05",
    rating: 5,
    image: "../../src/assets/Rectangle 48.jpg",
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
];

const StyledBackgroundBoxTestimonial = styled("div")({});

const SwiperButtonNext: FC<any> = ({ isEnd, isStart }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <Button
        disabled={isStart}
        onClick={() => swiper.slidePrev()}
        sx={{
          width: "60px",
          border: "none",
          "& svg": {
            margin: "unset !important",
          },
        }}
      >
        <TrendingFlatOutlinedIcon
          sx={{ margin: "unset", transform: "rotate(180deg)", color: "black" }}
        />
      </Button>
      <Button
        disabled={isEnd}
        onClick={() => swiper.slideNext()}
        sx={{
          width: "60px",
          border: "none",
          "& svg": {
            margin: "unset !important",
          },
        }}
      >
        <TrendingFlatOutlinedIcon sx={{ margin: "unset", color: "black" }} />
      </Button>
    </Box>
  );
};

import "swiper/swiper-bundle.css";

export const UserFeedbackSlider: FC = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSlideChange = (swiper: any) => {
    setIsEnd(swiper.isEnd);
    setIsStart(swiper.isBeginning);
  };

  return (
    <StyledBackgroundBoxTestimonial>
      <Box className="content-box" sx={{ padding: "30px" }}>
        <Box>
          <Swiper
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation, Pagination, A11y]}
            onSlideChange={(swiper: any) => handleSlideChange(swiper)}
            pagination={windowWidth < 768 ? { clickable: true } : false}
          >
            {dummyArray.map((item, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Container>
                    <Box
                      sx={{ border: "1px solid #0000000D", padding: "1.5rem" }}
                    >
                      <Box className="feedBackMain">
                        <Box
                          className="feedbackImgContainner"
                          sx={{
                            "& img": {minWidth:"64px"},
                          }}
                        >
                          <img src={item.image} alt="bidder image" />
                          <Box>
                            <p className="title">{item.title}</p>
                            <p className="subtitletexts">{item.subTitle}</p>
                            <Rating
                              name="read-only"
                              value={item.rating}
                              readOnly
                            />
                          </Box>
                        </Box>
                        <p>{item.description}</p>
                      </Box>
                    </Box>
                  </Container>
                </Box>
              </SwiperSlide>
            ))}
            {windowWidth > 768 && (
              <SwiperButtonNext isEnd={isEnd} isStart={isStart} />
            )}
          </Swiper>
        </Box>
      </Box>
    </StyledBackgroundBoxTestimonial>
  );
};
