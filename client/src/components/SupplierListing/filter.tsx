import { FC } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
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
}));

const ListingFilters: FC = () => {
  const label = { inputProps: { "aria-label": "Filter Checkbox demo" } };
  const arrayToMap = [
    {
      title: "Filter",
      filters: [
        "Hide less than 2 piece",
        "Hide one and two",
        "Best seller",
        "Sell Article",
      ],
    },
    {
      title: "Condition",
      filters: [
        "Fulfilment by Emartech",
        "Brand New",
        "Existing",
        "Used",
        "Fulfilment by Marchent",
      ],
    },
    {
      title: "Categories",
      filters: [
        "Building Material",
        "Electrical Material",
        "Plumbing Materials",
        "Wooden Material",
        "Hand Tools",
        "Sanitary Material",
        "Paint Material",
        "Wooden Material",
        "Wooden Material",
        "Wooden Material",
      ],
    },
  ];
  return (
    <FiltersMain>
      {arrayToMap?.map((item) => (
        <>
          <h4 className="sub-heading-text">{item.title}</h4>
          <FormGroup>
            {item.filters.map((filter)=>(
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
        </>
      ))}
    </FiltersMain>
  );
};

export default ListingFilters;
