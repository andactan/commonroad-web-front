import React from 'react';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, IconButton, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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
        width: "60%"
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

export default function ScenarioCard(){

    const classes = useStyles();
    const style = {
        width: "30%",
        float: "left",
        margin: "1.5% 1.5%"
    };

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                className={classes.cardHeader}
                classes={{action: classes.action}}
                title="Example Scenario Card"
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
                        <img src={require("./assets/placeholder.jpg")} style={style}></img>
                        <TableContainer className={classes.table}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert</TableCell>
                                        <TableCell>Salt</TableCell>
                                        <TableCell>Sour</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>0</TableCell>
                                        <TableCell>1</TableCell>
                                        <TableCell>2</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )

}