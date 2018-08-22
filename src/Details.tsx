import * as React from "react"
import { observer } from "mobx-react"
import Avatar from '@material-ui/core/Avatar';
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
      },
        bigAvatar: {
            width: 60,
            height: 60,
        },
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
              {this.props.forks}
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
      const styles = {
          bigAvatar: {
              width: 60,
              height: 60,
          },
      }
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
                <Avatar
                    alt={item.name}
                    src={item.owner.avatar_url}
                    style={styles.bigAvatar}
                />
                <div style={{fontSize:20}}> {item.name}</div>
                <div style={{color:"#2b90d9"}}> @{item.owner.login}</div>

              <div> {item.description}</div>
              <RepoStats stars={item.stargazers_count.toLocaleString()} forks={item.forks_count.toLocaleString()} />
            </div>
          </div>
        </div>
      )
    }
    return content
  }
}

export default Details
