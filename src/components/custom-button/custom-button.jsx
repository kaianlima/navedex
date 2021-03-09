import React from "react"

import Button from "@material-ui/core/Button"

const CustomButton = ({ children, color, isSubmitting, submitForm }) => {
  return (
    <Button
      variant="contained"
      color={color}
      size="large"
      fullWidth
      disabled={isSubmitting}
      onClick={submitForm}
    >
      {children}
    </Button>
  )
}

export default CustomButton
