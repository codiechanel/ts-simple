import { observer } from "mobx-react"
import * as React from "react"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

@observer
class Contributors extends React.Component<any, any> {
  render() {
    let arr = this.props.store.contributors.values()

    /**
     * Instead, use Array.from(observableMap.values()).map(fn)
     * or mobx.values(observableMap).map(fn)
     */

    let list: any = Array.from(arr)
    return (
      <List>
        {list.map(l => (
          <ListItem button divider key={l.login}>
            <ListItemText
              primary={`@${l.login}`}
              secondary={`${l.contributions} contributions`}
              primaryTypographyProps={{ color: "inherit" }}
            />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default Contributors
