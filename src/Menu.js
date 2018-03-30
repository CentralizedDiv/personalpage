import React from "react";
import Ionicon from "react-ionicons";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Dialog, { DialogContent } from 'material-ui/Dialog';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000' }
  },
});

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.animateActions = this.animateActions.bind(this);
    }
    
    /*Fade In Effect Actions*/
    animateActions(){
        window.requestAnimationFrame(function() {
            var actions = $('.actions ul li');
            setTimeout(function() {
                actions.each(function(index){
                    $(this).css({opacity:1});
                });
            }, 300);
        });
    }
    
    componentDidUpdate(){
        this.animateActions();
    }
    
    render() {
        return (
            <MuiThemeProvider  theme={theme}>
                <Dialog
                    fullScreen
                    open={this.props.open}
                    onClose={this.props.openMenu}
                >
                    <AppBar>
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                AH/
                            </Typography>
                            <div
                                className="close_icon"
                                onClick={this.props.openMenu}
                            >
                                <Ionicon
                                    icon="ios-close"
                                    fontSize="45px"
                                    color="#fff"
                                />
                            </div>
                        </Toolbar>
                    </AppBar>
                    <DialogContent style={{'backgroundColor': '#000'}}>
                        <div className="actions">
                            <ul>
                                <li>Home</li>
                                <li>Portfolio</li>
                                <li>About Me</li>
                                <li>
                                    <Ionicon
                                        icon="logo-facebook"
                                        fontSize="38px"
                                        color="#fff"
                                    />
                                    <Ionicon
                                        icon="logo-twitter"
                                        fontSize="38px"
                                        color="#fff"
                                    />
                                    <img className="logo_behance" src="../icons/behance-logo.svg" alt="Behance" />
                                </li>
                            </ul>
                        </div>
                    </DialogContent>
                </Dialog>
            </MuiThemeProvider>
        );
    }
}
export default Menu;