import React from "react"
import { connect } from "react-redux"
import { Formik, Form, Field } from "formik"
import { TextField } from "formik-material-ui"
import * as Yup from "yup"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"

import { loginStart } from "../../redux/user/user.actions"

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

const LoginForm = ({ loginStart }) => {
  const classes = useStyles()

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false)

        loginStart(values)
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container direction="column" spacing={4} item>
            <Grid item xs={12}>
              <Field
                className={classes.inputModified}
                component={TextField}
                name="email"
                type="email"
                variant="outlined"
                size="small"
                label="Email"
                placeholder="Email"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                className={classes.inputModified}
                component={TextField}
                name="password"
                type="password"
                variant="outlined"
                size="small"
                label="Senha"
                placeholder="Senha"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {isSubmitting && <LinearProgress />}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                disabled={isSubmitting}
                onClick={submitForm}
              >
                <span className={classes.buttonText}>Entrar</span>
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loginStart: (loginData) => dispatch(loginStart(loginData)),
})

export default connect(null, mapDispatchToProps)(LoginForm)
