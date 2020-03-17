import React from 'react';
import { Link } from "react-router-dom";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {  Button, MenuItem, Menu, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginLeft: "20px",
        color: "white",
        outline: "0 !important"
    },

    menuItem: {
        fontSize: "0.9em"
      }
}))

export default function NavBarItem(props){
    const classes = useStyles();

    // Hooks
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Handlers
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    let menuItems = null;
    if (props.links) {
        menuItems = Object.keys(props.links).map((key, index) => {
            if (props.links[key]["type"] === "a"){
                return (
                    <a className={classes.a} href={props.links[key]["href"]} target="_blank" style={{textDecoration: "none", color: "inherit"}}>
                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                            {props.links[key]["text"]}
                        </MenuItem>
                    </a>
                )
            }
            else {
                return (
                    <Link to={props.links[key]["to"]} style={{textDecoration: "none", color: "inherit"}}>
                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                            {props.links[key]["text"]}
                        </MenuItem>
                    </Link>
                )
            }
        })
    }

    return (
        <div>
            <Button
                aria-controls={props.id}
                className={classes.menuButton}
                onClick={handleClick}
                endIcon={props.links ? <ArrowDropDownIcon></ArrowDropDownIcon> : null}
            >
                {props.buttonText}
            </Button>

            {props.links && 
                <Menu
                    keepMounted
                    id={props.id}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={Boolean(anchorEl)}
                    getContentAnchorEl={null}
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                >
                    {menuItems}
                </Menu>
            }
        </div>
    )
}