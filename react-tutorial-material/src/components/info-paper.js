import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import {Typography, Link, Paper} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

export default function InfoPaper(props){
  const classes = useStyles();
  const {title, link, description} = props;

  return (
    <div>
      <Paper className={classes.paper}>
        <Link href={link} variant="h5">{title}</Link>
        <Typography style={{marginTop: "10px"}}>{description}</Typography>
      </Paper>
    </div>
  )
}
