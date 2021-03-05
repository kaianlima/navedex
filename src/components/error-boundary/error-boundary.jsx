import React from "react"

import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

class ErrorBoundary extends React.Component {
  constructor() {
    super()

    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { error: error }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <Grid container justify="center" item xs={12}>
          <Box my={2}>
            <div>
              <Typography variant="h1" component="h2" align="center">
                404
              </Typography>
              <Typography variant="h5" gutterBottom>
                Página quebrada
              </Typography>
            </div>
          </Box>
        </Grid>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
