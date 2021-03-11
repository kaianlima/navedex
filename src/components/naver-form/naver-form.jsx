import React from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { Formik, Form } from "formik"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Grid from "@material-ui/core/Grid"
import LinearProgress from "@material-ui/core/LinearProgress"

import NaverSchema from "./naver-schema"
import MaskFormatDate from "../mask-format-date/mask-format-date"
import CustomButton from "../custom-button/custom-button"
import CustomInputField from "../custom-input-field/custom-input-field"
import { selectCurrentNaver } from "../../redux/naver/naver.selectors"
import { postNaverStart, putNaverStart } from "../../redux/naver/naver.actions"
import { dateISOFormat } from "../../utils/time"

const useStyles = makeStyles((theme) => ({
  buttonText: {
    fontWeight: "600",
  },
}))

const NaverForm = ({ id, naver, postNaverStart, putNaverStart }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  const history = useHistory()
  const values = {
    job_role: id ? naver.job_role : "",
    admission_date: id ? dateISOFormat(naver.admission_date) : "",
    birthdate: id ? dateISOFormat(naver.birthdate) : "",
    project: id ? naver.project : "",
    name: id ? naver.name : "",
    url: id ? naver.url : "",
  }

  return (
    <Formik
      initialValues={values}
      validationSchema={NaverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false)

        if (id) {
          values["id"] = id
          await putNaverStart(values)
        } else {
          await postNaverStart(values)
        }
        history.push("/")
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container direction="column" spacing={4} item>
            <Grid container item spacing={4}>
              <Grid item xs={matchesXs ? 12 : 6}>
                <CustomInputField
                  name="name"
                  type="text"
                  labelPlaceholder="Nome"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={matchesXs ? 12 : 6}>
                <CustomInputField
                  name="job_role"
                  type="text"
                  labelPlaceholder="Cargo"
                />
              </Grid>
            </Grid>
            <Grid container item spacing={4}>
              <Grid item xs={matchesXs ? 12 : 6}>
                <CustomInputField
                  name="birthdate"
                  type="text"
                  labelPlaceholder="Ano de Nascimento"
                  autoComplete="off"
                  InputProps={{
                    inputComponent: MaskFormatDate,
                  }}
                />
              </Grid>
              <Grid item xs={matchesXs ? 12 : 6}>
                <CustomInputField
                  name="admission_date"
                  type="text"
                  labelPlaceholder="Data de Admissão"
                  autoComplete="off"
                  InputProps={{
                    inputComponent: MaskFormatDate,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={4}>
              <Grid item xs={matchesXs ? 12 : 6}>
                <CustomInputField
                  name="project"
                  type="text"
                  labelPlaceholder="Projetos que participou"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={matchesXs ? 12 : 6}>
                <CustomInputField
                  name="url"
                  type="text"
                  labelPlaceholder="URL da foto do Naver"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            {isSubmitting && <LinearProgress />}
            <Grid container item justify="flex-end">
              <Grid item xs={matchesXs ? 6 : 4}>
                <CustomButton
                  color="secondary"
                  isSubmitting={isSubmitting}
                  submitForm={submitForm}
                >
                  <span className={classes.buttonText}>Salvar</span>
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = createStructuredSelector({
  naver: selectCurrentNaver,
})

const mapDispatchToProps = (dispatch) => ({
  postNaverStart: (naverData) => dispatch(postNaverStart(naverData)),
  putNaverStart: (naverData) => dispatch(putNaverStart(naverData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NaverForm)
