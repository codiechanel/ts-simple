import * as React from "react"
import * as ReactDOM from "react-dom"
import { observer } from "mobx-react"
import * as style from "./repoStats.module.css"

class RepoStats extends React.Component<any, any> {
  render() {
    const styles = {
      root: {
        backgroundColor: "blue"
      },
      boxes: {
        borderColor: "#363c4b",
        backgroundColor: "#282c37",
        borderStyle: "solid",
        color: "#9baec8",
        width: 100
        // textAlign: "center"
      }
    }
    return (
      <div className={style.cool}>
        <div style={styles.boxes}>
          <span
            style={{
              display: "block",
              textTransform: "uppercase",
              fontSize: 11,
              textAlign: "center"
            }}
          >
            stars
          </span>
          <strong>
            <span
              style={{
                color: "#fff",
                  display: "block",
                textAlign: "center"
              }}
            >
              {this.props.stars}
            </span>
          </strong>
        </div>
        <div style={styles.boxes}>
          <span
            style={{
              display: "block",
              textTransform: "uppercase",
              fontSize: 11,
              textAlign: "center"
            }}
          >
            forks
          </span>
            <strong>
            <span
                style={{
                    color: "#fff",
                    display: "block",
                    textAlign: "center"
                }}
            >
              {this.props.stars}
            </span>
            </strong>
        </div>
      </div>
    )
  }
}

@observer
class Details extends React.Component<any, any> {
  render() {
    let val = this.props.store.selectedRepo.get()
    let item = this.props.store.repos.get(val)
    console.log("val", val, item)
    let content = (
      <div className="item">
        <div className="header">Details</div>
        <div className="contentHolder">
          <div className="content">content</div>
        </div>
      </div>
    )
    if (item) {
      content = (
        <div className="item">
          <div className="header">Details</div>
          <div className="contentHolder">
            <div className="content">
              {" "}
              <div> {item.name}</div>
              <div> {item.description}</div>
              <RepoStats stars={6} />
            </div>
          </div>
        </div>
      )
    }
    return content
  }
}

export default Details
