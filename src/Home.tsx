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
import Settings from "@material-ui/icons/Settings"

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
  avatar: {
    backgroundColor: "inherit",
      // fontSize: ".5rem",
      width: 25,
      height: 25,
  }
}

const url =
  "https://api.github.com/search/repositories?l=javascript&q=stars%3A%3E1&s=stars&type=Repositories"
@observer
class Home extends React.Component<any, any> {
  state = {
    query: "",
    list: []
  }
  componentDidMount() {
    // axios.get(url)
    //     .then((response) => {
    //         // handle success
    //         console.log(response.data.items);
    //         let newList = [];
    //         for (let x of response.data.items) {
    //             newList.push({
    //                 name: x.name,
    //                 id: x.id,
    //             });
    //
    //         }
    //         this.setState({ list: newList });
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .then(function () {
    //         // always executed
    //     });
  }
  render() {
    console.log("render")
    let arr = this.props.store.repos.values()
    let size = this.props.store.repos.size
    // console.log('arrayers', arr, Array.from(arr))
    /*
        Instead, use Array.from(observableMap.values()).map(fn) or mobx.values(observableMap).map(fn)
     */

    let list: any = Array.from(arr)
    console.log("arrayers", list)
    // for (const x of arr) {
    //     console.log('arr', x)
    // }

    return (
      <div className="item">
        <div className="homeHeader">
          <Avatar style={styles.avatar}>
            <HomeIcon />
          </Avatar>
          <Typography variant="body2" color="inherit" style={styles.headerText}>
            Home
          </Typography>
            <Avatar style={styles.avatar}>
                <Settings/>
            </Avatar>
        </div>
        {/*<AppBar position="static">*/}
        {/*<Toolbar>*/}
        {/*<IconButton style={styles.menuButton} color="inherit" aria-label="Menu">*/}
        {/*<MenuIcon />*/}
        {/*</IconButton>*/}
        {/*<Typography variant="title" color="inherit" style={styles.flex}>*/}
        {/*News*/}
        {/*</Typography>*/}
        {/*<Button color="inherit">Login</Button>*/}
        {/*</Toolbar>*/}
        {/*</AppBar>*/}
        <div className="contentHolder">
          <div className="content">
            <List component="nav" style={{color:"white"}}>
              {list.map(l => (
                <ListItem style={{color:"white"}} button divider key={l.id} onClick={()=> {
                    console.log('click')
                    this.props.store.selectRepo(l.id)
                }}>
                  <ListItemText primary={l.name} primaryTypographyProps={{color: "inherit"}} />
                </ListItem>
              ))}

              {/*<ListItem button divider>*/}
              {/*<ListItemText primary="Trash" />*/}
              {/*</ListItem>*/}
              {/*<ListItem button component="a" href="#simple-list">*/}
              {/*<ListItemText primary="Spam" />*/}
              {/*</ListItem>*/}
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
