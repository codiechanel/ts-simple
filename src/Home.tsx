import * as React from "react"
import * as ReactDOM from "react-dom"
import { observer } from "mobx-react"

import axios from "axios"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Avatar from "@material-ui/core/Avatar"
import FolderIcon from "@material-ui/icons/Folder"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import LaunchIcon from "@material-ui/icons/Launch"
import TurnedInIcon from "@material-ui/icons/TurnedIn"
import NotificationsIcon from "@material-ui/icons/Notifications"
import StarIcon from "@material-ui/icons/StarRate"
import UndoIcon from "@material-ui/icons/Undo"
import MoreIcon from "@material-ui/icons/MoreHoriz"
import RefreshIcon from "@material-ui/icons/Refresh"
import PlusOneIcon from "@material-ui/icons/PlusOne"
import Settings from "@material-ui/icons/Settings"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import { observable } from "mobx"
import DetailsIcon from "../node_modules/@material-ui/icons/Details"

// account_box

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  headerText: {
    marginLeft: 10,
    flex: 1
  },
  avatarGrey: {
    // backgroundColor: "#393f4f",
    backgroundColor: "blue",
    // fontSize: ".5rem",
    width: 25,
    height: 25
  },
  itemIcon: {
    backgroundColor: "inherit",
    color: "#606984",

    // fontSize: ".5rem",
    width: 25,
    height: 25
  },
  avatar: {
    backgroundColor: "inherit",

    // fontSize: ".5rem",
    width: 25,
    height: 25
  }
}

class HomeStore {
  showOptions = observable.box(false)
  setOption(val) {
    this.showOptions.set(val)
  }
}
const homeStore = new HomeStore()

@observer
class Home extends React.Component<any, any> {
  state = {
    query: "",
    list: []
  }
  componentDidMount() {}
  render() {
    console.log("render")
    let arr = this.props.store.repos.values()

    /**
     * Instead, use Array.from(observableMap.values()).map(fn)
     * or mobx.values(observableMap).map(fn)
     */

    let list: any = Array.from(arr)
    let optionsUI = null
    let curr = homeStore.showOptions.get()
    if (curr) {
      optionsUI = (
        <div style={{ backgroundColor: "#393f4f", padding: 10 }}>
          <div style={{ color: "9baec8" }}>Basic</div>

          <FormGroup row>
            <FormControlLabel
              control={<Switch checked={false} value="checkedA" />}
              label="Secondary"
            />
            <FormControlLabel
              control={
                <Switch checked={true} value="checkedB" color="primary" />
              }
              label="Primary"
            />
            <FormControlLabel
              control={<Switch value="checkedC" />}
              label="Uncontrolled"
            />
            <FormControlLabel
              disabled
              control={<Switch value="checkedD" />}
              label="Disabled"
            />
            <FormControlLabel
              disabled
              control={<Switch checked value="checkedE" />}
              label="Disabled"
            />
          </FormGroup>
        </div>
      )
    }

    return (
      <div className="item">
        <div className="homeHeader">
          <Avatar style={styles.avatar}>
            <HomeIcon />
          </Avatar>
          <Typography variant="body2" color="inherit" style={styles.headerText}>
            Home
          </Typography>
          <div style={{ backgroundColor: curr ? "#393f4f" : "#313543" }}>
            <Avatar
              style={styles.avatar}
              onClick={() => {
                homeStore.setOption(!curr)
              }}
            >
              <Settings />
            </Avatar>
          </div>
        </div>
        {optionsUI}
        <div className="contentHolder">
          <div className="content">
            <List component="nav" style={{ color: "white" }}>
              {list.map(l => (
                <ListItem
                  style={{ color: "white" }}
                  button
                  divider
                  key={l.id}
                  onClick={() => {
                    console.log("click")
                    this.props.store.selectRepo(l.id)
                  }}
                >
                    <Avatar alt="Remy Sharp" src={l.owner.avatar_url} />
                  <div style={{ marginLeft: 5,  display: "flex", flexDirection: "column" }}>
                    <ListItemText
                      primary={l.name}
                      primaryTypographyProps={{ color: "inherit" }}
                    />
                    <div style={{ color: "#606984" }}>@{l.owner.login}</div>
                    <ListItemText
                      primary={l.description}
                      primaryTypographyProps={{ color: "inherit" }}
                    />
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Avatar style={styles.itemIcon}>
                        <StarIcon />
                      </Avatar>
                      <Avatar style={styles.itemIcon}>
                        <UndoIcon />
                      </Avatar>
                      <Avatar style={styles.itemIcon}>
                        <RefreshIcon />
                      </Avatar>
                        <Avatar style={styles.itemIcon}>
                            <PlusOneIcon/>
                        </Avatar>
                      <Avatar style={styles.itemIcon}>
                        <LaunchIcon />
                      </Avatar>
                      <Avatar style={styles.itemIcon}>
                        <TurnedInIcon />
                      </Avatar>
                      <Avatar style={styles.itemIcon}>
                        <NotificationsIcon />
                      </Avatar>
                      <Avatar style={styles.itemIcon}>
                        <MoreIcon />
                      </Avatar>
                    </div>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
