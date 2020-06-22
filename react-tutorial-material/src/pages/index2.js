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

import Menu from '../components/menu';
 
export default class Index2 extends React.Component {
  render() {
    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <Menu></Menu>
            <div class="wrapper" style={{display: "flex", flexDirection: "row", justifyContent: "center", "alignItems": "center", paddingTop: "130px", width:"70%", margin: "0 auto"}}>
              <div class="wrapper" style={{paddingTop: "30px"}}> {/** left div */}
                <div>
                    <Typography variant="h3" align="center" style={{fontWeight: "bold"}}>
                        Welcome to CommonRoad
                    </Typography>
                    
                    <div style={{display: "flex", justifyContent: "center" , alignItems: "center", paddingTop: "1%"}}>
                        <div id="welcome-text" style={{width: "70%"}}>
                            <Typography align="center" style={{fontWeight: "500"}}>
                                CommonRoad is a collection of composable benchmarks for motion planning on roads. 
                                This website presents our benchmark collection and provides researchers with a means of evaluating and 
                                comparing their motion planners. For further information, read up on the introduction below. 
                                Also, have a look at our scenarios.
                            </Typography>
                        </div>
                    </div>    
                </div>
                
              </div>
              
              <div style={{width:"50%", margin: "0 auto", paddingTop: "20px"}}>
                <img src={require("../assets/tutorial_preview.png")} />
              </div>
              <Divider style={{marginTop: "40px"}}></Divider>
            </div>
            
            <div class="wrapper">
              <div style={{width:"70%", margin: "0 auto", paddingTop: "100px"}}>
                  <Typography variant="h3" align="center" style={{fontWeight: "bold"}}>
                      Scenarios and Benchmarks
                  </Typography>

                  <div style={{display: "flex", justifyContent: "center" , alignItems: "center", paddingTop: "1%"}}>
                      <div id="welcome-text" style={{width: "70%"}}>
                          <Typography align="center" style={{fontWeight: "500"}}>
                              CommonRoad makes autonomous driving scenarios more plausible and understandable
                          </Typography>
                      </div>
                  </div>

                  <div style={{width:"70%", margin: "0 auto", paddingTop: "20px"}}>
                    <img src={require("../assets/scenario.gif")} />
                  </div>
                  
                  <Divider style={{marginTop: "40px"}}></Divider>
              </div>
            </div>
            
            <div class="wrapper">
              <div id="blog-and-forum" style={{display: "flex", width:"70%", margin: "0 auto", paddingTop: "50px", flexDirection: "column"}}>
                  <div>
                      <Typography variant="h3" align="center" style={{fontWeight: "bold"}}> News & Announcements </Typography>
                      <Typography variant="body1" align="center" style={{fontWeight: "500"}}> Check out our latest news and announcements made in our blog</Typography>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "20px"}}>
                        <BlogCard text="This is a blog post header"></BlogCard>
                        <BlogCard text="This is a blog post header"></BlogCard>
                        <BlogCard text="This is a blog post header"></BlogCard>
                        <BlogCard text="This is a blog post header"></BlogCard>
                      </div>
                      
                      <div style={{textAlign: "center", marginTop: "20px"}}>
                        <Button variant="outlined" style={{outline: "none", background: "#1D3557", color: "white"}}>View More</Button>
                      </div>
                      

                      <Divider style={{marginTop: "40px"}}></Divider>
                  </div>
                </div>
                
                <div>
                  <div style={{marginTop: "50px"}}>
                      <Typography variant="h3" align="center" style={{fontWeight: "bold"}}> Resources and Community </Typography>
                      <Typography variant="body1" align="center" style={{fontWeight: "500"}}>CommonRoad has also a welcoming and open community and our ecosystem grows larger day by day.</Typography>
                      <div style={{textAlign: "center", marginTop: "20px"}}>
                        <Button variant="outlined" style={{outline: "none", background: "#1D3557", color: "white"}}>Go to Forum</Button>
                      </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginTop: "20px"}}>
                          <StatisticCard style={{width:"20%"}} text="active users"></StatisticCard>
                          <StatisticCard style={{width:"20%"}} text="scenarios"></StatisticCard>
                          <StatisticCard style={{width:"20%"}} text="submissions"></StatisticCard>
                        </div>
                      
                      <Divider style={{marginTop: "40px"}}></Divider>
                  </div>
                </div>

            </div>
        </div>
    );
  }
}