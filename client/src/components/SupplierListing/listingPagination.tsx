import { FC } from "react";
import { Box, styled } from "@mui/material";
import PaginationComponent from "../common/pagination";

const ListingPaginationBox = styled(Box)(({ theme }) => ({
  "& .sortingBar": {
    border: "0.51px solid rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    paddingTop: "1.5rem",
    width: "100%",
    gap: "4",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& .middleBar": {
      width: "50%",
      marginTop: "1.5rem",
      marginBottom: "1rem",
    },
    " .para-text": {
      fontSize: "10px",
      color: "rgba(0,0,0,0.5)",
    },
  },
}));

const LisingPagination: FC = () => {
  return (
    <ListingPaginationBox>
      <Box className="sortingBar align-center d-flex">
        <PaginationComponent count={10} />
        <hr className="middleBar" />
        <p className="para-text">Showing 1 to 30 of 112233 items</p>
      </Box>
    </ListingPaginationBox>
  );
};

export default LisingPagination;
