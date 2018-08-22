import * as React from "react"
import * as ReactDOM from "react-dom"
import Button from '@material-ui/core/Button';

class SideBar extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="sidebarHeader">SideBar</div>

                <div className="contentHolder">
                    <div className="content"> <Button variant="contained" color="primary">
                        Hello World
                    </Button></div>
                </div>
            </div>
        )
    }
}

export default SideBar