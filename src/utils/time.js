import differenceInYears from "date-fns/differenceInYears"
import formatDistance from "date-fns/formatDistance"
import parseISO from "date-fns/parseISO"
import pt from "date-fns/locale/pt"

import { capitalizeFirstLetter } from "./string"

export const dateToNowInYears = (dateStr) => {
  const date = parseISO(dateStr)
  const age = differenceInYears(Date.now(), date)

  return age
}

export const dateToNowDistance = (dateStr) => {
  const date = parseISO(dateStr)
  const str = formatDistance(Date.now(), date, { locale: pt })
  const strCapitalized = capitalizeFirstLetter(str)

  return strCapitalized
}

export const formDateStringToFormat = (dateStr) => {
  const dateStr1 = dateStr.slice(0, 2) + "/" + dateStr.slice(2)
  const dateParsed = dateStr1.slice(0, 5) + "/" + dateStr1.slice(5)

  return dateParsed
}
