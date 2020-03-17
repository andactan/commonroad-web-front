import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, IconButton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
      width: "100%",
      border: "none",
      marginBottom: "5px"
    },

    cardHeader: {
        background: "#F5F5F5",
        height: "52px"
    },

    action: {
        alignSelf: "center",
        marginTop: "0px",
        marginRight: "-10px"
    },

    iconButton: {
        marginTop: "0px",
        alignSelf: "center",
        "&:focus": {
            outline: 0
        }
    },

    collapse: {
        display: "flex",
        justifyContent: "space-between"
    },

    content: {
        paddingBottom: "40px"
    },

    table: {
        padding: "20px",
        width: "100%"
    },

    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }

  }));

export default function ForumCard(props){

    const classes = useStyles();
    const style = {
        width: "auto",
        display: "block",
        margin: "1.5% auto"
    };

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const buttonGroupStyle = {
        width: "50%",
        float: "right",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const buttonStyle = {
        margin: "10px"
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                className={classes.cardHeader}
                classes={{action: classes.action}}
                title="Example Forum Card"
                action={
                    <IconButton
                        className={clsx(classes.iconButton, classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </IconButton> 
                }
                >   
                </CardHeader>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>This is an exemplary forum entry</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )

}