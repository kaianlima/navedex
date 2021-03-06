import React from "react"
import NumberFormat from "react-number-format"

const MaskFormatDate = (props) => {
  const { inputRef, onChange, placeholder, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      format="##/##/####"
      placeholder={placeholder}
    />
  )
}

export default MaskFormatDate
