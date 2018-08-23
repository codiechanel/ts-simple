import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"
import SideBar from "./SideBar"
import Home from "./Home"
import Details from "./Details"
import store from "./MyStore"
class App extends React.Component<any, any> {
  componentDidMount() {
    store.searchRepo("javascript", "podcast")
  }
  render() {
    return (
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
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
