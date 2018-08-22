import * as React from "react"
import * as ReactDOM from "react-dom"

class SideBar extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="sidebarHeader">SideBar</div>
                <div className="contentHolder">
                    <div className="content">content</div>
                </div>
            </div>
        )
    }
}

export default SideBar