import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { useMemo } from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <>
      <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          hello
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
