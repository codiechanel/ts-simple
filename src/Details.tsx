import * as React from "react"
import { observer } from "mobx-react"
import Avatar from "@material-ui/core/Avatar"
import * as style from "./repoStats.module.css"
import Typography from "@material-ui/core/Typography"
import HomeIcon from "@material-ui/icons/Home"
import DetailsIcon from "@material-ui/icons/Details"
import Settings from "../node_modules/@material-ui/icons/Settings"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Contributors from "./Contributors"

import * as commonStyle from './common.module.css'

let newList = []
newList.push({ title: "javascript" })
newList.push({ title: "java" })
newList.push({ title: "python" })
newList.push({ title: "html" })
newList.push({ title: "node" })

class DetailsHeader extends React.Component<any, any> {
  render() {
    const styles = {
      avatar: {
        backgroundColor: "inherit",
        // fontSize: ".5rem",
        width: 25,
        height: 25
      },
      headerText: {
        marginLeft: 10,
        flex: 1
      }
    }
    return (
      <div className="detailsHeader">
        <IconButton style={{color:"white"}} className={commonStyle.iconSmall}>
          <DetailsIcon />
        </IconButton>
        <Typography variant="body2" style={styles.headerText}>
          Details
        </Typography>
        <IconButton color={"primary"} className={commonStyle.iconSmall}>
          <Settings />
        </IconButton>
      </div>
    )
  }
}

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
        width: 100,
        flex: 1,
        display: "flex",
        flexDirection: "col"
        // textAlign: "center"
      },
      bigAvatar: {
        width: 60,
        height: 60
      }
    }

    return (
      <div className={style.cool}>
        <div className={style.boxes}>
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
        <div className={style.boxes}>
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
        <div className={style.boxes}>
          <span
            style={{
              display: "block",
              textTransform: "uppercase",
              fontSize: 11,
              textAlign: "center"
            }}
          >
            issues
          </span>
          <strong>
            <span
              style={{
                color: "#fff",
                display: "block",
                textAlign: "center"
              }}
            >
              {this.props.issues}
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
        height: 60
      }
    }
    let val = this.props.store.selectedRepo.get()
    let item = this.props.store.repos.get(val)

    let content = (
      <div className="item">
        <DetailsHeader />
        <div className="contentHolder">
          <div className="content">content</div>
        </div>
      </div>
    )
    if (item) {
        console.log(item)
      content = (
        <div className="item">
          <DetailsHeader />
          <div className="contentHolder">
            <div className="detailsContent">
              <Avatar
                alt={item.name}
                src={item.owner.avatar_url}
                style={styles.bigAvatar}
              />
              <div style={{ fontSize: 20 }}>{item.name}</div>
              {/*<div style={{ color: "#2b90d9" }}>@{item.owner.login}</div>*/}

                {item.html_url && (
                    <div
                        style={{ color: "#2b90d9" }}
                        onClick={() => {
                            window.open(item.html_url, "_blank")
                        }}
                    >
                        @{item.full_name}
                    </div>
                )}
              <div style={{margin:5}}> {item.description}</div>
              <RepoStats
                stars={item.stargazers_count.toLocaleString()}
                forks={item.forks_count.toLocaleString()}
                issues={item.open_issues.toLocaleString()}
              />
            </div>

            <div style={{ backgroundColor: "#1f232b", padding: 5 }}>
              Contributors
            </div>

            <div style={{ display: "flex", flex: 1 }}>
              <Contributors store={this.props.store} />
            </div>
          </div>
        </div>
      )
    }
    return content
  }
}

export default Details
