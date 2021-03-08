import React from "react"
import { connect } from "react-redux"
import { Formik, Form, Field } from "formik"
import { TextField } from "formik-material-ui"
import * as Yup from "yup"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"

import MaskFormatDate from "../mask-format-date/mask-format-date"
import { postNaverStart } from "../../redux/naver/naver.actions"

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
  buttonText: {
    fontWeight: "600",
  },
}))

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

const NaverForm = ({ postNaverStart }) => {
  const classes = useStyles()

  return (
    <Formik
      initialValues={{
        job_role: "",
        admission_date: "",
        birthdate: "",
        project: "",
        name: "",
        url: "",
      }}
      validationSchema={NaverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false)

        postNaverStart(values)
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container direction="column" spacing={4} item>
            <Grid container item spacing={4}>
              <Grid item xs={6}>
                <Field
                  className={classes.inputModified}
                  component={TextField}
                  name="name"
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Nome"
                  placeholder="Nome"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  className={classes.inputModified}
                  component={TextField}
                  name="job_role"
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Cargo"
                  placeholder="Cargo"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={4}>
              <Grid item xs={6}>
                <Field
                  className={classes.inputModified}
                  component={TextField}
                  name="birthdate"
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Ano de Nascimento"
                  placeholder="Ano de Nascimento"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    inputComponent: MaskFormatDate,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  className={classes.inputModified}
                  component={TextField}
                  name="admission_date"
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Data de Admissão"
                  placeholder="Data de Admissão"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    inputComponent: MaskFormatDate,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={4}>
              <Grid item xs={6}>
                <Field
                  className={classes.inputModified}
                  component={TextField}
                  name="project"
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Projetos que participou"
                  placeholder="Projetos que participou"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  className={classes.inputModified}
                  component={TextField}
                  name="url"
                  type="text"
                  variant="outlined"
                  size="small"
                  label="URL da foto do Naver"
                  placeholder="URL da foto do Naver"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            {isSubmitting && <LinearProgress />}
            <Grid container item justify="flex-end">
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  <span className={classes.buttonText}>Salvar</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = (dispatch) => ({
  postNaverStart: (naverData) => dispatch(postNaverStart(naverData)),
})

export default connect(null, mapDispatchToProps)(NaverForm)
