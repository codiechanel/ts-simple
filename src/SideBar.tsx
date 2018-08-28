import * as React from "react"
import * as ReactDOM from "react-dom"
import Button from "@material-ui/core/Button"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import AccountBox from "@material-ui/icons/AccountBox"
import AllInbox from "@material-ui/icons/AllInbox"
import MenuIcon from "@material-ui/icons/Menu"
import Announcement from "@material-ui/icons/Announcement"
import Build from "@material-ui/icons/Build"
import IconButton from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"
import HomeIcon from "@material-ui/icons/Home"

import SearchIcon from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography"
import Input from "@material-ui/core/Input"
import axios from "axios"
import { runInAction } from "mobx"

import * as commonStyle from './common.module.css'

let newList = []
newList.push({ title: "javascript" })
newList.push({ title: "java" })
newList.push({ title: "python" })
newList.push({ title: "php" })
newList.push({ title: "node" })
newList.push({ title: "typescript" })
newList.push({ title: "dart" })
newList.push({ title: "html" })
newList.push({ title: "css" })

const styles = {
  headerText: {
    marginLeft: 10
  },
  searchIcon: {
    backgroundColor: "inherit",
    // fontSize: ".5rem",
    color: "#606984",
    width: 25,
    height: 25
  },
  textField: {
    flex: 1,
    color: "#9baec8"
  },

  avatar: {
    backgroundColor: "inherit",
    // fontSize: ".5rem",
    color: "#9baec8",
    width: 25,
    height: 25
  }
}

class SearchBar extends React.Component<any, any> {
  state = {
    val: ""
  }
  render() {
    return (
      <div className="searchBar">
        <Input
          placeholder="Search"
          disableUnderline
          // margin={"dense"}
          onKeyDown={e => {
            if (e.keyCode == 13) {
              this.props.store.searchRepo("javascript", this.state.val)
            }
          }}
          onChange={event => {
            this.setState({ val: event.target.value })
          }}
          style={styles.textField}
        />
        <IconButton color={"primary"} className={commonStyle.iconSmall}>
          <SearchIcon />
        </IconButton>
      </div>
    )
  }
}

class SideBar extends React.Component<any, any> {
  state = {
    msg: "welcome"
  }
  componentDidMount() {
    axios
      .get("/.netlify/functions/hello")
      .then(response => {
        // handle success
        console.log(response.data.title)
        this.setState({ msg: response.data.title })
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
      })
  }
  render() {
    return (
      <div className="item">
        <div className="sidebarHeader">
          <IconButton style={{color:"white"}} className={commonStyle.iconSmall}>
            <MenuIcon />
          </IconButton>
          <IconButton color={"secondary"} className={commonStyle.iconSmall}>
            <HomeIcon />
          </IconButton>
          <IconButton color={"secondary"} className={commonStyle.iconSmall}>
            <AllInbox />
          </IconButton>
          <IconButton color={"secondary"} className={commonStyle.iconSmall}>
            <Announcement />
          </IconButton>
          <IconButton color={"secondary"} className={commonStyle.iconSmall}>
            <Build />
          </IconButton>
        </div>

        <SearchBar store={this.props.store} />

        <div className="contentHolder">
          <div className="content">
            <div>{this.state.msg}</div>
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
}

export default SideBar
