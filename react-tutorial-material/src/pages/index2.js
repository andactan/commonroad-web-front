import React from 'react';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Navbar from '../components/navbar';
import BlogCard from '../components/blog-card';
import ForumCard from '../components/forum-card';
import { Typography, Paper, Divider, Button} from '@material-ui/core';
import CountUp from 'react-countup';
import StatisticCard from '../components/statistic-card';
 
export default class Index2 extends React.Component {
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

                <Divider style={{marginTop: "40px"}}></Divider>
            </div>

            <div style={{width:"70%", margin: "0 auto", paddingTop: "50px"}}>
                <Typography variant="h2" align="center">
                    Welcome to CommonRoad
                </Typography>
                
                <div style={{display: "flex"}}>
                    <div id="welcome-text" style={{display: "flex", alignItems: "center"}}>
                        <Typography>
                            CommonRoad is a collection of composable benchmarks for motion planning on roads. 
                            This website presents our benchmark collection and provides researchers with a means of evaluating and 
                            comparing their motion planners. For further information, read up on the introduction below. 
                            Also, have a look at our scenarios.
                        </Typography>
                    </div>

                    <div id="welcome-image">
                      <img src={require('../assets/static_img_cr_flowchart.svg')}></img>
                    </div>
                </div>
                
                <Divider style={{marginTop: "40px"}}></Divider>
            </div>
            
            <div id="blog-and-forum" style={{display: "flex", width:"70%", margin: "0 auto", paddingTop: "50px", flexDirection: "column"}}>
                <div>
                    <Typography variant="h4" align="center"> News & Announcements </Typography>
                    <Typography variant="body1" align="center"> Check out our latest news and announcements made in our blog</Typography>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "20px"}}>
                      <BlogCard text="This is a blog post header"></BlogCard>
                      <BlogCard text="This is a blog post header"></BlogCard>
                      <BlogCard text="This is a blog post header"></BlogCard>
                      <BlogCard text="This is a blog post header"></BlogCard>
                    </div>
                    
                    <div style={{textAlign: "center", marginTop: "20px"}}>
                      <Button style={{outline: "none", background: "#F8F8F8"}}>View More</Button>
                    </div>
                    

                    <Divider style={{marginTop: "40px"}}></Divider>
                </div>

                <div style={{marginTop: "50px"}}>
                    <Typography variant="h4" align="center"> Resources and Community </Typography>
                    <Typography variant="body1" align="center">CommonRoad has also a welcoming and open community and our ecosystem grows larger day by day.</Typography>
                    <div style={{textAlign: "center", marginTop: "20px"}}>
                      <Button style={{outline: "none", background: "#F8F8F8"}}>Go to Forum</Button>
                    </div>
                      <div style={{display: "flex", justifyContent: "space-around"}}>
                        <StatisticCard style={{width:"20%"}} text="active users"></StatisticCard>
                        <StatisticCard style={{width:"20%"}} text="scenarios"></StatisticCard>
                        <StatisticCard style={{width:"20%"}} text="submissions"></StatisticCard>
                      </div>
                    
                    
                    
                    <Divider style={{marginTop: "40px", marginBottom: "20px"}}></Divider>
                </div>

            </div>
        </div>
    );
  }
}