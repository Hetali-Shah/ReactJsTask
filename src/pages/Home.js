import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import  '../assets/style/home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="main-div">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <div className="buttonDiv" >
              <Button color="inherit" onClick={() => {this.props.history.push('login')}}>Login</Button>
            </div>
            <div className="buttonDiv" >
              <Button color="inherit" onClick={() => {this.props.history.push('signup')}}>SignUp</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Home;
