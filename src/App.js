import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'
import Home from './Home'

const UseStyles = makeStyles({
})
 

function App() {
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
        primary: {
          main: '#d32f2f'
      },
      secondary: {
         main: '#4169e1'
      }
    }
  })

  const classes = UseStyles()

  return (
  <ThemeProvider theme={theme}>
      <Home />
  </ThemeProvider>
  )
}

export default App;
