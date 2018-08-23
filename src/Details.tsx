import * as React from "react"
import { observer } from "mobx-react"
import Avatar from "@material-ui/core/Avatar"
import * as style from "./repoStats.module.css"
import Typography from "@material-ui/core/Typography"
import HomeIcon from "@material-ui/icons/Home"
import DetailsIcon from "@material-ui/icons/Details"
import Settings from "../node_modules/@material-ui/icons/Settings"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
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
        <Avatar style={styles.avatar}>
          <DetailsIcon />
        </Avatar>
        <Typography variant="body2" color="inherit" style={styles.headerText}>
          Details
        </Typography>
        <Avatar style={styles.avatar}>
          <Settings />
        </Avatar>
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
    console.log("val", val, item)
    let content = (
      <div className="item">
        <DetailsHeader />
        <div className="contentHolder">
          <div className="content">content</div>
        </div>
      </div>
    )
    if (item) {
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
              <div style={{ fontSize: 20 }}>
                {item.name}
              </div>
              <div style={{ color: "#2b90d9" }}>@{item.owner.login}</div>

              <div > {item.description}</div>
                <RepoStats
                    stars={item.stargazers_count.toLocaleString()}
                    forks={item.forks_count.toLocaleString()}
                />
            </div>

            <div style={{ backgroundColor: "#1f232b", padding: 5 }}>
              Repositories | Contributors
            </div>

            <div style={{ display: "flex", flex: 1 }}>
              <List>
                {newList.map(l => (
                  <ListItem button divider key={l.title}>
                    <ListItemText
                      primary={l.title}
                      primaryTypographyProps={{ color: "inherit" }}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </div>
      )
    }
    return content
  }
}

export default Details
