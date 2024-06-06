import { FC, useEffect, useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import CustomizedMenus from "./filterMenu";
import PinDropOutlined from "@mui/icons-material/PinDropOutlined";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import Frame171 from "../../assets/images/Frame17.png";
import Frame172 from "../../assets/images/Frame171.png";
import Frame173 from "../../assets/images/Frame172.png";
import Frame174 from "../../assets/images/Frame173.png";
import Frame175 from "../../assets/images/Frame174.png";
import Frame176 from "../../assets/images/Frame175.png";
import { getAllProjectService } from "@/services/projectServiceCalls";
import PaginationComponent from "../common/pagination";
import { useNavigate } from "react-router-dom";

const ListProjectMainDiv = styled(Box)(({ theme }: any) => ({
  "& .filterHeaderMain": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingBottom: "2rem",
    "& .auth-heading": {
      fontWeight: "700",
      color: "rgba(20, 20, 20, 1)",
      margin: "unset",
      fontSize: "26px",
    },
  },
  "& .projectBoxContainer": {
    width: "100%",
    background: "rgba(255, 255, 255, 1)",
    border: "0.95px solid rgba(20, 20, 20, 0.05)",
    boxShadow: "0px 0.95px 1.89px 0px rgba(0, 0, 0, 0.03)",
    borderRadius: "7.56px",
    padding: "20px",
    marginBottom: "1rem",
    "& img": {
      width: "100%",
      borderRadius: "3.78px",
    },
    "& h5": {
      color: "rgba(20, 20, 20, 1)",
      fontSize: "17.01px",
      fontWeight: "400",
      marginBottom: "1rem",
      marginTop: "0.5rem",
    },
    "& .subtitle-flex": {
      display: "flex",
      alignItems: "center",
      gap: 4,
      paddingBottom: "1rem",
      "& h4": {
        fontSize: "22.68px",
        fontWeight: "500",
        color: "rgba(20, 20, 20, 1)",
        margin: "unset",
        cursor: "pointer",
      },
      "& p": {
        margin: "unset",
        color: "white",
        background: theme.palette.common.headingLinesGreen,
        padding: "1.89px 5.67px 1.89px 5.67px",
        borderRadius: "2.84px",
        marginLeft: "0.5rem",
      },
    },
    "& .projectDependenceBox": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1.5rem",
      paddingBottom: "1rem",
      "& p": {
        fontSize: "15.12px",
        fontWeight: "400",
        color: "rgba(20, 20, 20, 0.7)",
        margin: "unset",
      },
      "& .iconContainer": {
        display: "flex",
        alignItems: "center",
        gap: 4,
        "& svg": {
          fontSize: "15.12px",
          color: "rgba(20, 20, 20, 0.7)",
          width: "16px",
          height: "16px",
        },
      },
    },
    "& .paragraphProjectDescription": {
      fontSize: "15.12px",
      fontWeight: "400",
      color: "rgba(20, 20, 20, 0.7)",
      margin: "unset",
    },
  },
}));
const arrayToMap = [
  {
    title: "Hunar company",
    subTitle: "Need Project Executor",
    subText: "New post",
    description:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.",
    location: "Sharjah",
    img: Frame171,
    time: "2 Months",
    pay: "AED 50-55k",
    posting: "29 min ago",
  },
  {
    title: "Hunar company",
    subTitle: "Need Project Executor",
    description:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.",
    location: "Sharjah",
    img: Frame172,
    time: "2 Months",
    pay: "AED 50-55k",
    posting: "29 min ago",
  },
  {
    title: "Hunar company",
    subTitle: "Need Project Executor",
    subText: "New post",
    description:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.",
    location: "Sharjah",
    img: Frame173,
    time: "2 Months",
    pay: "AED 50-55k",
    posting: "29 min ago",
  },
  {
    title: "Hunar company",
    subTitle: "Need Project Executor",
    description:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.",
    location: "Sharjah",
    img: Frame174,
    time: "2 Months",
    pay: "AED 50-55k",
    posting: "29 min ago",
  },
  {
    title: "Hunar company",
    subTitle: "Need Project Executor",
    subText: "New post",
    description:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.",
    location: "Sharjah",
    img: Frame175,
    time: "2 Months",
    pay: "AED 50-55k",
    posting: "29 min ago",
  },
  {
    title: "Hunar company",
    subTitle: "Need Project Executor",
    description:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.",
    location: "Sharjah",
    img: Frame176,
    time: "2 Months",
    pay: "AED 50-55k",
    posting: "29 min ago",
  },
];
const ListProjectWithHeader: FC = () => {
  const navigate = useNavigate();
  const [pageNo, setPageNo] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    projectListing();
  }, [pageNo]);

  const projectListing = async () => {
    getAllProjectService(
      `page=${pageNo}&limit=${itemsPerPage}`,
      (err: any, response: any) => {
        if (err) {
        }
        if (response) {
          setProjectData(response);
          debugger;
        }
      }
    );
  };
  return (
    <>
      <ListProjectMainDiv>
        <Box className="filterHeaderMain">
          <h1 className="auth-heading">
            {projectData?.totalRecords || "0"} Jobs
          </h1>
          {/* <CustomizedMenus /> */}
        </Box>
        {
          // !!projectData?.projects?.length &&
          arrayToMap?.map((item: any, index: number) => (
            <Box key={JSON.stringify(item)} className="projectBoxContainer">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                  <img src={item.img} alt="project image" />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <h5> {item.title}</h5>
                  <Box className="subtitle-flex">
                    <h4 onClick={() => navigate("/projectDetails/3")}>
                      {item?.jobTitle || item?.subTitle}
                    </h4>
                    {item.subText && <p>{item.subText}</p>}
                  </Box>
                  <Box className="projectDependenceBox">
                    <Box className="iconContainer">
                      <PinDropOutlined />
                      <p>{item.location}</p>
                    </Box>
                    <p style={{ marginTop: "-6px" }}>.</p>
                    <Box className="iconContainer">
                      <AccessTimeOutlined />
                      <p>{item.time}</p>
                    </Box>
                    <p style={{ marginTop: "-6px" }}>.</p>
                    <Box className="iconContainer">
                      <p>{item.projectValue}</p>
                    </Box>
                    <p style={{ marginTop: "-6px" }}>.</p>
                    <Box className="iconContainer">
                      <CalendarTodayOutlined />
                      <p>{item.posting || item?.pay}</p>
                    </Box>
                  </Box>
                  <p className="paragraphProjectDescription">
                    {item.projectDescription || item?.description}
                  </p>
                </Grid>
              </Grid>
            </Box>
          ))
        }
      </ListProjectMainDiv>
      {projectData?.totalRecords > itemsPerPage && (
        <Box className="paginationContainerComp">
          <PaginationComponent
            count={Math.ceil(projectData?.totalRecords / itemsPerPage)}
            page={pageNo}
            onPageChange={(event: any, value: any) => setPageNo(value)}
          />
        </Box>
      )}
    </>
  );
};

export default ListProjectWithHeader;
