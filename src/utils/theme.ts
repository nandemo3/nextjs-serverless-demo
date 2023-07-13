import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme()

const theme = createTheme({
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: '#1B305E', // Strong
      light: '#D1D9E8', // Pale
      dark: '#A4ACBE', // Medium
    },
    background: {
      default: '#F7F8FA',
    },
    success: {
      main: '#20C9AC', // Strong
      light: '#DBFFF9', // Pale
    },
    warning: {
      main: '#FFA500', // Strong
      light: '#DBFFF9', // Pale
    },
    error: {
      main: '#D32F2F', // Strong
      light: '#FFE9E9', // Pale
    },
  },
})

export default theme
