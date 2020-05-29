import React from 'react';
import { Card, CardHeader, CardContent, Typography, CardActions, Button } from '@material-ui/core';


export default function ForumCard(props){
  const {poster, title, date} = props;

  return (
    <div>
      <Card elevation={0}>
        <CardContent>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>

          <Typography variant="subtitle1">
            {date}
          </Typography>

          <Typography variant="subtitle1">
            {"by " + poster}
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" style={{marginLeft: "auto", outline: "none"}}> Go to post </Button>      
        </CardActions>
      </Card>
    </div>
  )
}