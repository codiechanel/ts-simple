import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="flex-grid">
        <div className="col">
            <div className="item">hello</div>
        </div>
        <div className="col">
            <div className="item">cool</div>
        </div>
        <div className="col">
            <div className="item">great</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
