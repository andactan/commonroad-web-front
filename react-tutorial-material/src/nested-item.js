import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Collapse, ListItemText, List, ListItemIcon } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      paddingTop: '0px',
      paddingBottom: '0px'
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
}
));

export default function NestedItem(props){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    let nestedItems = [];
    for (let i = 0; i < props.names.length; i++){
        let listItem = (
            <ListItem key={i} button className={classes.nested} style={{paddingTop: 0}}>
                <ListItemText primary={props.names[i]}></ListItemText>
            </ListItem>
        )

        nestedItems.push(listItem);
    }

    if (nestedItems.length !== 0){
        return (
            <List className={classes.root} style={{width: "100%"}}>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary={props.text}></ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                
                <Collapse in={open} unmountOnExit>
                    <List disablePadding>
                        {nestedItems}
                    </List>
                </Collapse>
            </List>
        )
    }
    else {
        return (
            <List className={classes.root} style={{width: "100%"}}>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary={props.text}></ListItemText>
                </ListItem>
            </List>
        )
    }
}