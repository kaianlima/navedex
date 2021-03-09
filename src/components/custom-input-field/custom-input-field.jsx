import React from "react"

import { Field } from "formik"
import { TextField } from "formik-material-ui"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  inputModified: {
    "& .MuiFormLabel-root": {
      fontWeight: 600,
      color: theme.palette.secondary.main,
      top: theme.spacing(-1.5),
      left: theme.spacing(-1.5),
    },
    "& .MuiInputBase-input": {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.palette.secondary.main,
    },
    "&:hover .MuiOutlinedInput-input": {
      borderColor: theme.palette.secondary.main,
    },
  },
}))

const CustomInputField = ({ name, type, labelPlaceholder, ...otherProps }) => {
  const classes = useStyles()

  return (
    <Field
      className={classes.inputModified}
      component={TextField}
      name={name}
      type={type}
      variant="outlined"
      size="small"
      label={labelPlaceholder}
      placeholder={labelPlaceholder}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      {...otherProps}
    />
  )
}

export default CustomInputField
