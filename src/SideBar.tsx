import * as React from "react"
import * as ReactDOM from "react-dom"
import Button from "@material-ui/core/Button"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"

let newList = []
newList.push({ title: "javascript" })
newList.push({ title: "java" })
newList.push({ title: "python" })


class SideBar extends React.Component<any, any> {
  render() {
    return (
      <div className="item">
        <div className="sidebarHeader">SideBar</div>

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
