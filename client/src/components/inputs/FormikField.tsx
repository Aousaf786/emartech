/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState, KeyboardEvent } from "react";
import { useField } from "formik";
// import { useDebouncedCallback } from "use-debounce";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  customInputLabelStyle,
  customInputLeftIconStyle,
  customInputRightIconStyle,
  CustomTextField,
} from "@/styles/mui";

interface ICustomFieldProps {
  textArea?: boolean;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  placeholder?: string;
  className?: string;
  type?: "text" | "email" | "password" | "number" | "search";
  label?: string;
  variant?: "standard" | "outlined" | "filled";
  name: string;
  onChange?: (fieldValue: string | number, fieldName?: string) => void;
  onBlur?: (fieldValue: string | number, fieldName?: string) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLDivElement>) => void;
}

// const INPUT_DELAY = 200;

const FormikField: React.FC<ICustomFieldProps> = (props) => {
  const {
    name,
    type = "text",
    textArea,
    label,
    disabled = false,
    required = false,
    variant = "outlined",
    rows,
    className,
    startIcon,
    endIcon,
    onChange,
    onBlur,
    onKeyUp,
    ...restProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [innerValue, setInnerValue] = useState("");

  const [field, meta] = useField(name);
  const {
    onChange: onValueChange,
    onBlur: onFieldBlur,
    value,
    ...rest
  } = field;
  const { touched, error } = meta;

  const isOutlined = variant === "outlined";
  const isPasswordField = type === "password";

  useEffect(() => {
    if (value !== undefined && value !== null) {
      setInnerValue(value);
    } else {
      setInnerValue("");
    }
  }, [value]);

  const debouncedHandleOnChange =
    // useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // Don't update the value if the field is disabled
      onValueChange(disabled ? value || innerValue : event);
      if (onChange && !disabled) onChange(event.target.value, name);
    };
  //   INPUT_DELAY
  // );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // Don't update the value if the field is disabled
      setInnerValue(disabled ? value || innerValue : event.target.value);
      debouncedHandleOnChange(event);
    },
    [value, debouncedHandleOnChange]
  );

  const handleBlur = useCallback(
    (
      event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
    ) => {
      onFieldBlur(event);
      if (onBlur && !disabled) onBlur(event.target.value, name);
    },
    [value, onBlur]
  );

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (onKeyUp) onKeyUp(e);
  };

  return (
    <div className={className}>
      {/* {isOutlined && (
        <InputLabel shrink sx={customInputLabelStyle} required={required}>
          {label}
        </InputLabel>
      )} */}
      <FormControl variant="standard" error={touched && !!error} fullWidth>
        <CustomTextField
          {...rest}
          {...restProps}
          type={isPasswordField ? (showPassword ? "text" : "password") : type}
          multiline={!!textArea}
          variant={variant || "outlined"}
          rows={rows || 4}
          disabled={disabled}
          required={!isOutlined ? required : false} // To Avoid HTML "required" prompt message
          label={label}
          size="small"
          error={touched && !!error}
          autoComplete="nope"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
          value={innerValue}
          placeholder={`Enter your ${name}`}
          InputProps={{
            startAdornment: startIcon && (
              <InputAdornment position="start" sx={customInputLeftIconStyle}>
                {startIcon}
              </InputAdornment>
            ),
            endAdornment: (endIcon || isPasswordField) && (
              <InputAdornment position="end" sx={customInputRightIconStyle}>
                {isPasswordField ? (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ) : (
                  endIcon
                )}
              </InputAdornment>
            ),
          }}
        />
        {error && <FormHelperText>{!!touched && error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default FormikField;
