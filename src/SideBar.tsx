import * as React from "react"
import * as ReactDOM from "react-dom"
import Button from "@material-ui/core/Button"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import AccountBox from "@material-ui/icons/AccountBox"
import AllInbox from "@material-ui/icons/AllInbox"
import Announcement from "@material-ui/icons/Announcement"
import Build from "@material-ui/icons/Build"

import Avatar from "@material-ui/core/Avatar"
import HomeIcon from "../node_modules/@material-ui/icons/Home"
import Typography from "@material-ui/core/Typography"

let newList = []
newList.push({ title: "javascript" })
newList.push({ title: "java" })
newList.push({ title: "python" })
newList.push({ title: "php" })
newList.push({ title: "node" })

const styles = {
    headerText: {
        marginLeft: 10
    },

    avatar: {
        backgroundColor: "inherit",
        // fontSize: ".5rem",
        color: "#9baec8",
        width: 25,
        height: 25,
    }
}

class SideBar extends React.Component<any, any> {
  render() {
    return (
      <div className="item">
        <div className="sidebarHeader">
            <Avatar style={styles.avatar}>
                <AccountBox/>
            </Avatar>
            <Avatar style={styles.avatar}>
                <HomeIcon/>
            </Avatar>
            <Avatar style={styles.avatar}>
                <AllInbox/>
            </Avatar>
            <Avatar style={styles.avatar}>
                <Announcement/>
            </Avatar>
            <Avatar style={styles.avatar}>
                <Build/>
            </Avatar>
        </div>

        <div className="contentHolder">
          <div className="content">
            {" "}
            <Button variant="contained" color="primary">
              Hello World
            </Button>
            <List component="nav">
              {newList.map(l => (
                <ListItem
                  button
                  divider
                  key={l.title}
                  onClick={() => {
                    console.log("click")
                    // this.props.store.selectQuery(l.title)
                      this.props.store.searchRepo(l.title)
                  }}
                >
                  <ListItemText primary={l.title} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar
