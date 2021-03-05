import React from "react"
import { connect } from "react-redux"
import { Formik, Form, Field } from "formik"
import { TextField } from "formik-material-ui"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"

import { loginStart } from "../../redux/user/user.actions"

const useStyles = makeStyles((theme) => ({
  buttonText: {
    fontWeight: "600",
  },
}))

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = "Obrigatório"
  } else if (values.email.length > 100) {
    errors.email = "Máximo de 100 caracteres"
  }

  if (!values.password) {
    errors.password = "Obrigatório"
  } else if (values.password.length > 100) {
    errors.password = "Máximo de 100 caracteres"
  }

  return errors
}

const LoginForm = ({ loginStart }) => {
  const classes = useStyles()

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validate}
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
                component={TextField}
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="password"
                type="password"
                variant="outlined"
                label="Senha"
                fullWidth
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
