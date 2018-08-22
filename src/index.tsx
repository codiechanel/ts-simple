import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="flex-grid">
        <div className="col">hello</div>
        <div className="col">coolness</div>
        <div className="col">great</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
