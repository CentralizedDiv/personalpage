import React from "react";
import Ionicon from "react-ionicons";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Menu from "./Menu";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#f9f9f9' }
  },
});

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            open:false
        };
        this.openMenu = this.openMenu.bind(this);
    }
    
    openMenu(){
        this.setState({open: !this.state.open});    
    }

    render() {
        return (
            <MuiThemeProvider  theme={theme}>
                <Menu open={this.state.open} openMenu={this.openMenu}/>
                {/*Collapsible Logo+Menu Bar*/}
                <AppBar style={{top:'-70px'}} className="menu_bar">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            AH/
                        </Typography>
                        <div
                            className="menu_icon"
                            onClick={() => {
                                this.openMenu();
                            }}
                        >
                            <Ionicon
                                icon="ios-options-outline"
                                fontSize="30px"
                                color="#000"
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                {/*Fixed Logo+Menu Bar*/}
                <div style={{backgroundColor:'#f9f9f9'}}>
                    <Typography style={{padding:'16px'}} variant="title" color="inherit">
                            AH/
                    </Typography> 
                    <div
                        className="menu_icon"
                        onClick={() => {
                            this.openMenu();
                        }}
                    >
                    <Ionicon
                        icon="ios-options-outline"
                        fontSize="30px"
                        color="#000"
                    />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default HomePage;
