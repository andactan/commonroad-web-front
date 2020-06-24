import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import {Link} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  body: {
    marginTop: 12,
  },
});

export default function ResearchCard(props){
    const classes = useStyles();
    const {title, authors, BibTex, more, fullText} = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">{title}</Typography>
        <Typography className={classes.body} component="p">
          Authors:
          <br />
          {authors}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={BibTex}>BibTex</Button>
        <Button size="small" color="primary" href={more}>More</Button>
        <Button size="small" color="primary" href={fullText}>FullText</Button>
      </CardActions>
    </Card>
  );
}