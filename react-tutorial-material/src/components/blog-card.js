import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  root: {
    margin: "0 auto",
    marginBottom: "5px",
    backgroundColor: "white"
  },
}));

export default function BlogCard (props){
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title="Shrimp and Something"
        />
        <CardContent>
          <Typography variant="subtitle1">
            {props.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{marginLeft: "auto", outline: "none"}}> Continue Reading </Button>
        </CardActions>
      </Card>
    </div>
  )
}