import React from 'react';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Navbar from '../components/navbar';
import ForumCard from '../components/forum-card';
import { Typography } from '@material-ui/core';
 
export default class SimpleSlider extends React.Component {
  render() {
    return (
        <div>
        <Navbar></Navbar>
        <div style={{width:"70%", margin: "0 auto", paddingTop: "40px"}}>
            <Carousel 
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
            initialSlideHeight="50px"
            style={{width: "300px", margin: "0 auto"}}
            >
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
            </Carousel>
        </div>

        <div style={{width:"70%", margin: "0 auto", paddingTop: "40px"}}>
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