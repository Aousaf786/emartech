import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid,
  styled,
  Box,
} from "@mui/material";
import ProjectFormDropZone from "./dropZone";

const SubmissionFormContainer = styled(Box)(({ theme }: any) => ({
  "& .formMain": {
    paddingTop: "4rem",
    "& .sub-heading-text": {
      fontWeight: "600",
    },
    "& .para-text": {
      fontSize: "12px",
      paddingTop: "0.5rem",
      paddingBottom: "0.8rem",
    },
    "& .MuiInputBase-formControl": {
      margin: "unset",
      backgroundColor: "#F6F6F6",
      border: "1px solid #E3E3E3",
      borderRadius: "12px",
      "& input": {
        fontSize: "12px",
        color: "#555555",
        padding: "12px 16px 12px 16px",
      },
    },
    "& .MuiSelect-select": {
      fontSize: "12px",
      color: "#555555",
    },
    "& fieldset": {
      border: "none",
      outline: "none",
    },
    "& textarea": {
      fontSize: "12px",
      color: "#555555",
    },
    "& .dragDropBox": {
      outline: "none",
      width: "100%",
      borderRadius: "12px",
      border: "1px solid #E3E3E3",
      backgroundColor: " #F6F6F6",
      cursor: "pointer",
      height: "98px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& p": {
        margin: "unset",
        marginLeft: "1rem",
        fontSize: "14px",
        fontWeight: "700",
      },
    },
    "& .Mui-checked": {
      color: theme.palette.common.headingLinesGreen,
    },
    "& .MuiFormHelperText-contained": {
      color: "#FF0101",
    },
  },
}));

const initialValues = {
  jobTitle: "",
  category: "",
  subCategory: "",
  projectDescription: "",
  projectFiles: [],
  projectValue: "",
  location: "",
  charge: "",
  proposalCount: "",
  projectType: "byProject",
  skills: "",
};

const validationSchema = Yup.object().shape({
  jobTitle: Yup.string().required("*please enter job title"),
  category: Yup.string().required("*please select main category"),
  subCategory: Yup.string().required("*please select sub category"),
  // projectDescription: Yup.string().required("Project description is required"),
  projectFiles: Yup.array().min(1, "*at least one file is required"),
  projectValue: Yup.number().required("*please enter project value"),
  location: Yup.string().required("*please enter location it’s important"),
  // charge: Yup.string().required("Charge is required"),
  proposalCount: Yup.number().required("*please enter proposal quantity"),
  projectType: Yup.string().required("Project type is required"),
  // skills: Yup.string().required("Skills and expertise are required"),
});

const categories: any = ["Category 1", "Category 2", "Category 3"];
const subCategories: any = {
  "Category 1": ["SubCategory 1A", "SubCategory 1B", "SubCategory 1C"],
  "Category 2": ["SubCategory 2A", "SubCategory 2B", "SubCategory 2C"],
  "Category 3": ["SubCategory 3A", "SubCategory 3B", "SubCategory 3C"],
};

const ProjectSubmissionForm: FC = () => {
  const onSubmit = (values: any) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <SubmissionFormContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }: any) => (
          <Form className="formMain">
            <Grid container columnSpacing={2} rowSpacing={5}>
              <Grid item xs={12}>
                <h4 className="sub-heading-text">Enter your job title</h4>
                <p className="para-text">
                  Title is the most important place to include keywords that
                  Project executor/supplier would likely use to search for a
                  service like yours.
                </p>

                <FormControl fullWidth>
                  <Field
                    as={TextField}
                    id="jobTitle"
                    name="jobTitle"
                    variant="outlined"
                    size="small"
                    error={false}
                    InputProps={{ placeholder: "Enter here" }}
                    helperText={<ErrorMessage name="jobTitle" />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h4 className="sub-heading-text">Select your category</h4>
                <p className="para-text"></p>
                <FormControl fullWidth>
                  <Field
                    as={Select}
                    labelId="category-label"
                    id="category"
                    name="category"
                    variant="outlined"
                    size="small"
                    displayEmpty
                    renderValue={
                      values.category !== "" ? undefined : () => "Select here"
                    }
                  >
                    {categories.map((category: any) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Field>
                  <p className="MuiFormHelperText-root MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-1l18pnj-MuiFormHelperText-root">
                    <ErrorMessage name="category" />
                  </p>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="sub-heading-text">Select your sub category</h4>
                <p className="para-text"></p>
                <FormControl fullWidth sx={{ color: "" }}>
                  <Field
                    as={Select}
                    labelId="subCategory-label"
                    id="subCategory"
                    name="subCategory"
                    variant="outlined"
                    size="small"
                    displayEmpty
                    renderValue={
                      values.subCategory !== ""
                        ? undefined
                        : () => "Select here"
                    }
                  >
                    {subCategories[values.category]?.map((subCategory: any) => (
                      <MenuItem key={subCategory} value={subCategory}>
                        {subCategory}
                      </MenuItem>
                    ))}
                  </Field>
                  <p className="MuiFormHelperText-root MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-1l18pnj-MuiFormHelperText-root">
                    <ErrorMessage name="subCategory" />
                  </p>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <h4 className="sub-heading-text">Describe your project</h4>
                <p className="para-text"></p>

                <FormControl fullWidth>
                  <Field
                    as={TextField}
                    id="projectDescription"
                    name="projectDescription"
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    error={false}
                    InputProps={{ placeholder: "Type your text here..." }}
                    helperText={<ErrorMessage name="projectDescription" />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <h4 className="sub-heading-text">Describe your project</h4>
                <p className="para-text"></p>

                <FormControl fullWidth margin="normal">
                  <ProjectFormDropZone
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                  <ErrorMessage name="projectFiles" />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="sub-heading-text">Enter project value</h4>
                <p className="para-text"></p>

                <FormControl fullWidth>
                  <Field
                    as={TextField}
                    id="projectValue"
                    name="projectValue"
                    variant="outlined"
                    size="small"
                    error={false}
                    InputProps={{ placeholder: "Enter here" }}
                    helperText={<ErrorMessage name="projectValue" />}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="sub-heading-text">Enter location</h4>
                <p className="para-text"></p>

                <FormControl fullWidth>
                  <Field
                    as={TextField}
                    id="location"
                    name="location"
                    variant="outlined"
                    size="small"
                    error={false}
                    InputProps={{ placeholder: "Enter here" }}
                    helperText={<ErrorMessage name="location" />}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="sub-heading-text">You will be charged</h4>
                <p className="para-text"></p>

                <FormControl fullWidth>
                  <Field
                    as={TextField}
                    id="charge"
                    name="charge"
                    variant="outlined"
                    size="small"
                    error={false}
                    InputProps={{ placeholder: "Enter here" }}
                    helperText={<ErrorMessage name="charge" />}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="sub-heading-text">
                  How many proposals do you want to receive?
                </h4>
                <p className="para-text"></p>

                <FormControl fullWidth>
                  <Field
                    as={TextField}
                    id="proposalCount"
                    name="proposalCount"
                    variant="outlined"
                    size="small"
                    error={false}
                    InputProps={{ placeholder: "Enter here" }}
                    helperText={<ErrorMessage name="proposalCount" />}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <h4 className="sub-heading-text">Project type?</h4>

                <FormControl component="fieldset" fullWidth>
                  <Field name="projectType">
                    {({ field }: any) => (
                      <RadioGroup row {...field}>
                        <FormControlLabel
                          value="byProject"
                          control={<Radio size="small" />}
                          label="By Project"
                        />
                        <FormControlLabel
                          value="milestones"
                          control={<Radio size="small" />}
                          label="Milestones"
                        />
                      </RadioGroup>
                    )}
                  </Field>
                  <ErrorMessage name="projectType" />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="sub-heading-text">Enter Skills and expertise</h4>
                <p className="para-text">
                  You can enter maximum 15 skills and expertise tags
                </p>
                <FormControl fullWidth>
                  <Field
                    as={TextField}
                    id="skills"
                    name="skills"
                    variant="outlined"
                    size="small"
                    error={false}
                    helperText={<ErrorMessage name="skills" />}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </SubmissionFormContainer>
  );
};

export default ProjectSubmissionForm;