import React from 'react';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Navbar from '../components/navbar';
import BlogCard from '../components/blog-card';
import ForumCard from '../components/forum-card';
import { Typography, Paper, Divider} from '@material-ui/core';
 
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
                
                <div style={{display: "flex"}}>
                    <div id="welcome-text">
                        <Typography>
                            CommonRoad is a collection of composable benchmarks for motion planning on roads. 
                            This website presents our benchmark collection and provides researchers with a means of evaluating and 
                            comparing their motion planners. For further information, read up on the introduction below. 
                            Also, have a look at our scenarios.
                        </Typography>
                    </div>

                    <div id="welcome-image">
                    <img src={require('../assets/tutorial_preview.png')}></img>
                    </div>
                </div>
                <Divider style={{marginTop: "40px"}}></Divider>
            </div>
            
            <div id="blog-and-forum" style={{display: "flex", width:"70%", margin: "0 auto", paddingTop: "70px"}}>
                <div style={{flexGrow: "5", marginRight: "10px"}}>
                    <Typography variant="h4"> News From CommonRoad </Typography>
                    <BlogCard text="adsagagasdasdhasdjasda"></BlogCard>
                    <BlogCard text="adsagagasdasdhasdjasda"></BlogCard>
                    <BlogCard text="adsagagasdasdhasdjasda"></BlogCard>
                    <BlogCard text="adsagagasdasdhasdjasda"></BlogCard>
                    <BlogCard text="adsagagasdasdhasdjasda"></BlogCard>
                </div>
                <div style={{flexGrow: "2"}}>
                    <Typography variant="h4">Recent Forum Entries</Typography>
                    <Paper>
                        <ForumCard poster="andac" title="Forum post" date="anan 22, 2222"></ForumCard>
                        <Divider></Divider>
                        <ForumCard poster="andac" title="Forum post" date="anan 22, 2222"></ForumCard>
                        <Divider></Divider>
                        <ForumCard poster="andac" title="Forum post" date="anan 22, 2222"></ForumCard>
                    </Paper>
                </div>

            </div>
        </div>
    );
  }
}