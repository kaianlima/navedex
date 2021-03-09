import * as Yup from "yup"

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(1, "Muito curto")
    .max(100, "Muito longo")
    .email("Email inválido")
    .required("Obrigatório"),
  password: Yup.string()
    .min(1, "Muito curto")
    .max(100, "Muito longo")
    .required("Obrigatório"),
})

export default LoginSchema
