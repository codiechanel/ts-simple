import * as React from "react"
import * as ReactDOM from "react-dom"
import JssProvider from "react-jss/lib/JssProvider"
import { create } from "jss"
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import "./index.css"
import SideBar from "./SideBar"
import Home from "./Home"
import Details from "./Details"
import store from "./MyStore"
const generateClassName = createGenerateClassName()
const jss = create(jssPreset())
/**
 * we only document.getElementById if we build using create react app
 * which strips away comments
 */
// document.getElementById("jss-insertion-point")
// jss.options.insertionPoint = 'jss-insertion-point';
jss.setup({ insertionPoint: "jss-insertion-point" })
const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "#606984"
    },
    // divider: '#606984',
    primary: {
      main: "#606984"
    },
    secondary: {
      main: "#9baec8"
    }
  }
})


console.log(theme)
class App extends React.Component<any, any> {
  componentDidMount() {
    store.makeRquest().then()
    store.searchRepo("javascript", "podcast")
  }
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <div className="flex-grid">
            <div className="col">
              <SideBar store={store} />
            </div>
            <div className="col">
              <Home store={store} />
            </div>
            <div className="col">
              <Details store={store} />
            </div>
          </div>{" "}
        </MuiThemeProvider>
      </JssProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
