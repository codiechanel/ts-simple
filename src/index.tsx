import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"
import SideBar from './SideBar'
import Home from './Home'
import Details from './Details'

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="flex-grid">
        <div className="col">
            <SideBar/>
        </div>
        <div className="col">
            <Home/>
        </div>
        <div className="col">
            <Details/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
