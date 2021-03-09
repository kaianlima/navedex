import * as Yup from "yup"

const NaverSchema = Yup.object().shape({
  job_role: Yup.string()
    .min(2, "Muito curto")
    .max(100, "Muito longo")
    .required("Obrigatório"),
  admission_date: Yup.string()
    .min(2, "Muito curto")
    .max(10, "Muito longo")
    .required("Obrigatório"),
  birthdate: Yup.string()
    .min(2, "Muito curto")
    .max(10, "Muito longo")
    .required("Obrigatório"),
  project: Yup.string()
    .min(2, "Muito curto")
    .max(100, "Muito longo")
    .required("Obrigatório"),
  name: Yup.string()
    .min(2, "Muito curto")
    .max(100, "Muito longo")
    .required("Obrigatório"),
  url: Yup.string()
    .min(2, "Muito curto")
    .max(200, "Muito longo")
    .required("Obrigatório"),
})

export default NaverSchema
