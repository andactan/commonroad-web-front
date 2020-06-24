import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography } from '@material-ui/core';


export default function StatisticCard(props){
  const {text} = props;

  return (
    <div>
      <Card elevation={1} style={{backgroundColor: "white"}}>
        <CardContent>
          <div style={{textAlign: "center"}}>
            <CountUp start={0} end={1000} duration={10} style={{fontSize: "50px", fontFamily: "Rubik", margin: "0 auto"}}></CountUp>
          </div>
          
          <Typography variant="h4" align="center">{text}</Typography>
        </CardContent>
      </Card>

    </div>
  )
}