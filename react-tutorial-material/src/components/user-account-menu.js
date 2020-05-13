import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Menu, MenuItem, makeStyles, Typography, Button} from '@material-ui/core';

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  menuIcon: {
    outline: "0 !important",
    color: "white"
  },

  menuLink: {
    textDecoration: "none",
    color: "inherit"
  },

  menuItem: {
    fontSize: "0.9em"
  }
}))

export default function UserAccountMenu(props) {

  const classes = useStyles();

  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  }

  const handleClose = () => {
    setAnchor(null);
  }

  return (
    <div style={props.style}>
      <Button
        className={classes.menuIcon}
        aria-controls="account-menu"
        onClick={handleClick}
        startIcon={<AccountCircleIcon></AccountCircleIcon>}
      > USERNAME </Button>
      
      
      <Menu
        id="account-menu"
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{vertical: "bottom", horizontal: "left"}}
      >
        <Link style={{textDecoration: "none", color: "inherit"}} to="/">
          <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
        </Link>

        <Link style={{textDecoration: "none", color: "inherit"}} to="/submissions/new">
          <MenuItem className={classes.menuItem} onClick={handleClose}>New Submission</MenuItem>
        </Link>
        
        <Link style={{textDecoration: "none", color: "inherit"}} to="/develop">
          <MenuItem className={classes.menuItem} onClick={handleClose}>My Submissions</MenuItem>
        </Link>

      </Menu>
    </div>
  )
}