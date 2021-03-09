import React from "react"
import { connect } from "react-redux"
import { Formik, Form } from "formik"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import LinearProgress from "@material-ui/core/LinearProgress"

import LoginSchema from "./login-schema"
import CustomButton from "../custom-button/custom-button"
import CustomInputField from "../custom-input-field/custom-input-field"
import { loginStart } from "../../redux/user/user.actions"

const useStyles = makeStyles((theme) => ({
  buttonText: {
    fontWeight: "600",
  },
}))

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
              <CustomInputField
                name="email"
                type="email"
                labelPlaceholder="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInputField
                name="password"
                type="password"
                labelPlaceholder="Senha"
              />
            </Grid>
            {isSubmitting && <LinearProgress />}
            <Grid item xs={12}>
              <CustomButton
                color="secondary"
                isSubmitting={isSubmitting}
                submitForm={submitForm}
              >
                <span className={classes.buttonText}>Entrar</span>
              </CustomButton>
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
