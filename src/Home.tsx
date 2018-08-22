import * as React from "react"
import * as ReactDOM from "react-dom"
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
const url = "https://api.github.com/search/repositories?l=javascript&q=stars%3A%3E1&s=stars&type=Repositories"
class Home extends React.Component {
    state = {
        query: "",
        list: []
    };
    componentDidMount() {
        axios.get(url)
            .then((response) => {
                // handle success
                console.log(response.data.items);
                let newList = [];
                for (let x of response.data.items) {
                    newList.push({
                        name: x.name,
                        id: x.id,
                    });

                }
                this.setState({ list: newList });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    render() {
        console.log('render')

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
                    <div className="content">
                        <List component="nav">
                            {this.state.list.map(l => (
                                <ListItem button divider
                                          key={l.id}

                                >
                                    <ListItemText primary={l.name} />
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