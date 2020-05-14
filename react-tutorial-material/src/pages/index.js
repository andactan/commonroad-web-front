import React from 'react';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Navbar from '../components/navbar';
import ForumCard from '../components/forum-card';
import { Typography } from '@material-ui/core';
 
export default class Index extends React.Component {
  render() {
    return (
        <div>
        <Navbar></Navbar>
        <div style={{width:"70%", margin: "0 auto", paddingTop: "20px"}}>
            <Carousel
                heightMode="max"
                wrapAround={true}
                
                renderCenterLeftControls={({previousSlide})=>(
                <IconButton onClick={previousSlide} size="small" style={{outline: "none"}}>
                    <ArrowBackIosIcon></ArrowBackIosIcon>  
                </IconButton>
            )}
                renderCenterRightControls={({nextSlide})=>(
                <IconButton onClick={nextSlide} size="small" style={{outline: "none"}}>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </IconButton>
            )}
               
            >
                <img src={require("../assets/scenario.gif")} style={{width: "100%", margin: "auto", position: "absolute", top: "0", bottom: "0"}} />
                <img src={require("../assets/scenario-2.gif")} style={{width: "100%", margin: "auto", position: "absolute", top: "0", bottom: "0"}}/>
                <img src={require("../assets/scenario-3.gif")} style={{width: "100%", margin: "auto", position: "absolute", top: "0", bottom: "0"}}/>
            </Carousel>
        </div>

        <div style={{width:"70%", margin: "0 auto", paddingTop: "70px"}}>
            <Typography variant="h2">
                Welcome to CommonRoad
            </Typography>

            <Typography>
            CommonRoad is a collection of composable benchmarks for motion planning on roads. 
            This website presents our benchmark collection and provides researchers with a means of evaluating and 
            comparing their motion planners. For further information, read up on the introduction below. 
            Also, have a look at our scenarios.
            </Typography>
        </div>

        <div style={{width:"70%", margin: "0 auto", paddingTop: "40px"}}>
            <ForumCard></ForumCard>
            <ForumCard></ForumCard>
            <ForumCard></ForumCard> 
        </div>
        </div>
    );
  }
}