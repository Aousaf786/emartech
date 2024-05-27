import { FC, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  styled,
} from "@mui/material";

const FiltersMain = styled(Box)(({ theme }) => ({
  border: "0.95px solid rgba(20, 20, 20, 0.05)",
  boxShadow: "0px 0.95px 1.89px 0px rgba(0, 0, 0, 0.03)",
  width: "100%",
  padding: "0.5rem 16px 16px 16px",
  borderRadius: "7.56px",
  "& .sub-heading-text": {
    fontWeight: "500",
    padding: "0.5rem 0px 0.5rem 0px",
  },
  "& .MuiFormControlLabel-label": {
    fontSize: "inherit",
  },
  "& .tabContainerFilter": {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTabs-flexContainer": {
      width: "100%",
    },
    "& .Mui-selected": {
      border: "0.95px solid rgba(53, 117, 226, 1) !important",
      color: "rgba(53, 117, 226, 1) !important",
      background: " rgba(53, 117, 226, 0.2) !important",
    },
    "& button": {
      color: "rgba(0, 0, 0, 0.87)",
      width: "calc(100% / 3)",
      textTransform: "none",
      fontWeight: "400",
      fontSize: "inherit",
      border: "0.95px solid rgba(20, 20, 20, 0.1)",
      "&:first-child": {
        borderRight: "none",
      },
      "&:last-child": {
        borderLeft: "none",
      },
    },
  },
}));

const ProjectListingFilters: FC = () => {
  const [value, setValue] = useState("Yearly");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const label = { inputProps: { "aria-label": "Filter Checkbox demo" } };
  const arrayToMap = [
    {
      type: "radio",
      title: "Location",
      filters: [
        "Near me",
        "Exact location",
        "Within 15 km",
        "Within 30 km",
        "Within 50 km",
      ],
    },
    {
      type: "tabs",
      title: "Salary",
      tabs: ["Hourly", "Monthly", "Yearly"],
      filters: ["Any", "> 30000k", "> 50000k", "> 80000k", "> 100000k"],
    },
    {
      type: "radio",
      title: "Date of posting",
      filters: ["All time", "Last 24 hours", "Last 3 days", "Last 7 days"],
    },
    {
      title: "Type of employment",
      filters: ["Full-time", "Temporary", "Part-time"],
    },
  ];
  return (
    <FiltersMain>
      <h4 className="sub-heading-text" style={{fontWeight:"700"}}>Filter</h4>
      {arrayToMap?.map((item: any) => (
        <>
          <h4 className="sub-heading-text">{item.title}</h4>
          {item.type === "radio" ? (
            <FormControl>
              <RadioGroup
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
              >
                {item.filters.map((filter: any) => (
                  <FormControlLabel
                    value={filter}
                    control={<Radio />}
                    label={filter}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            <>
              {item.type === "tabs" ? (
                <>
                  <Box className="tabContainerFilter">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="wrapped label tabs example"
                    >
                      {item.tabs.map((tabItem: any) => (
                        <Tab value={tabItem} label={tabItem} />
                      ))}
                    </Tabs>
                  </Box>
                  <FormControl>
                    <RadioGroup
                      name="controlled-radio-buttons-group"
                      // value={value}
                      // onChange={handleChange}
                    >
                      {item.filters.map((filter: any) => (
                        <FormControlLabel
                          value={filter}
                          control={<Radio />}
                          label={filter}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </>
              ) : (
                <FormGroup>
                  {item.filters.map((filter: any) => (
                    <FormControlLabel
                      className="para-text"
                      control={
                        <Checkbox
                          {...label}
                          defaultChecked
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                        />
                      }
                      label={filter}
                    />
                  ))}
                </FormGroup>
              )}
            </>
          )}
        </>
      ))}
    </FiltersMain>
  );
};

export default ProjectListingFilters;
