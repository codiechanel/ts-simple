import * as React from "react"
import * as ReactDOM from "react-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    headerText: {
        marginLeft: 10
    },
    avatar: {
        backgroundColor: 'inherit',
    },

};
class Home extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="homeHeader">
                    <Avatar style={styles.avatar} >
                        <HomeIcon/>
                    </Avatar>
                    <Typography variant="title" color="inherit" style={styles.headerText}>
                    Home
                    </Typography>
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
                    <div className="content">content</div>
                </div>
            </div>
        )
    }
}

export default Home