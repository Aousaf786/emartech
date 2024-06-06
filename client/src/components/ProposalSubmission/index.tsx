import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid,
  styled,
  Box,
} from "@mui/material";
import ProjectFormDropZone from "./proposaDropZone";
import { getFormData } from "@/utils";
import { useNavigate, useParams } from "react-router-dom";
import { proposalService } from "@/services/proposalServiceCalls";

const ProposalSubmissionFormContainer = styled(Box)(({ theme }: any) => ({
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
      border: "1px dashed black",
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
    "& .skillBoxContainer": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
      "& .skillTagDiv": {
        background: "#F6F6F6",
        padding: "10px 20px 10px 20px",
        borderRadius: "100px",
        color: "#ADADAD",
      },
    },
    "& .formButtons": {
      display: "flex",
      alignItems: "end",
      gap: "15px",
      justifyContent: "end",
      "& button": {
        width: "180px",
        margin: "unset",
      },
      "& .submitBtn": {
        backgroundColor: theme.palette.common.headingLinesGreen,
        borderColor: theme.palette.common.headingLinesGreen,
        "& .spanText": {
          fontSize: "30px",
          lineHeight: 0,
          paddingLeft: "0.5rem",
          marginTop: "-3px",
        },
      },
    },
  },
}));

const initialValues = {
  proposalDescription: "",
  proposalFiles: [],
  proposalType: "BY PROJECT",
};

const validationSchema = Yup.object().shape({
  proposalDescription: Yup.string().required("Project description is required"),
  proposalFiles: Yup.array().min(1, "*at least one file is required"),
  proposalType: Yup.string().required("Project type is required"),
});

const ProposalSubmissionForm: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    let objectToSend = { ...values };
    objectToSend.projectId = id;
    const body = getFormData(objectToSend);
    proposalService(body, (err: any, response: any) => {
      if (err) {
      }
      if (response) {
        navigate(`/projectDetails/${id}`);
      }
    });
  };
  return (
    <ProposalSubmissionFormContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }: any) => (
          <Form className="formMain">
            <Grid container columnSpacing={2} rowSpacing={5}>
              <Grid item xs={12}>
                <h4 className="sub-heading-text">Project type?</h4>

                <FormControl component="fieldset" fullWidth>
                  <Field name="proposalType">
                    {({ field }: any) => (
                      <RadioGroup row {...field}>
                        <FormControlLabel
                          value="BY PROJECT"
                          control={<Radio size="small" />}
                          label="By Project"
                        />
                        <FormControlLabel
                          value="MILESTONES"
                          control={<Radio size="small" />}
                          label="Milestones"
                        />
                      </RadioGroup>
                    )}
                  </Field>
                  <ErrorMessage name="proposalType" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <h4 className="sub-heading-text">Describe your proposal</h4>
                <p className="para-text"></p>

                <FormControl fullWidth>
                  <Field
                    as={TextField}
                    id="proposalDescription"
                    name="proposalDescription"
                    variant="outlined"
                    size="small"
                    multiline
                    rows={10}
                    error={false}
                    InputProps={{ placeholder: "Type your text here..." }}
                    helperText={<ErrorMessage name="proposalDescription" />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                  <ProjectFormDropZone
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                  <p className="MuiFormHelperText-root MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-1l18pnj-MuiFormHelperText-root">
                    <ErrorMessage name="proposalFiles" />
                  </p>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Box className="formButtons" sx={{ height: "100%" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    className="submitBtn"
                  >
                    Send <span className="spanText">&#129170;</span>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </ProposalSubmissionFormContainer>
  );
};

export default ProposalSubmissionForm;
