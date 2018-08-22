import * as React from "react"
import * as ReactDOM from "react-dom"
import { observer } from "mobx-react"
@observer
class Details extends React.Component<any, any> {
    render() {
        let val = this.props.store.selectedRepo.get()
        console.log('val', val)
        return (
            <div className="item">
                <div className="header">Details</div>
                <div className="contentHolder">
                    <div className="content">content</div>
                </div>
            </div>
        )
    }
}

export default Details