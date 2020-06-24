import React from 'react';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Navbar from '../components/navbar';
import BlogCard from '../components/blog-card';
import ForumCard from '../components/forum-card';
import { Typography, Paper, Divider, Button, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import StatisticCard from '../components/statistic-card';

import Menu from '../components/menu';
 
export default class Index2 extends React.Component {
  render() {
    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <Navbar></Navbar>

            <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={{width: "75%", margin: "0 auto"}}>
              <Grid item xs={12} sm={7} style={{padding: "0"}}>
                <Grid container spacing={2} direction="column" justify="center" alignItems="flex-start">
                  <Grid item>
                    <Typography variant="h3" align="left" style={{fontWeight: "bold"}}>
                      Welcome to CommonRoad
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography align="left" style={{fontWeight: "500"}}>
                      CommonRoad is a collection of composable benchmarks for motion planning on roads.
                      This website presents our benchmark collection and provides researchers with a means of evaluating and
                      comparing their motion planners. For further information, read up on the introduction below.
                      Also, have a look at our scenarios.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={5} style={{padding: "0"}}>
                <img  style={{width:"90%"}} src={require("../assets/static_img_cr_flowchart.svg")} />
              </Grid>
            </Grid> {/** welcome container */}

            <Divider style={{marginTop: "40px"}}></Divider>
            
            <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={{width: "75%", margin: "0 auto"}}>
              <Grid item xs={12} style={{padding:"0"}}>
                <Typography variant="h3" align="left" style={{fontWeight: "bold"}}>
                    Scenarios and Benchmarks
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={1} direction="row">
                      <Grid item sm={12} md={4}>
                        <StatisticCard text="active users"></StatisticCard>
                      </Grid>
                      <Grid item sm={12} md={4}>
                        <StatisticCard text="scenarios"></StatisticCard>
                      </Grid>
                      <Grid item sm={12} md={4}>
                        <StatisticCard text="submissions"></StatisticCard>
                      </Grid>
                    </Grid> 
                  </Grid>{/** statistic cards */}

                  <Grid item xs={12} sm={6}>
                    <img style={{width:"100%"}} src={require("../assets/scenario.gif")} />  
                  </Grid> {/** some image */}
                </Grid>
              </Grid>
            </Grid> {/** scenarios and benchmarks */}

            <Divider style={{marginTop: "40px"}}></Divider>

            <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={{width: "75%", margin: "0 auto"}}>
              <Grid item xs={12}>
                <Typography variant="h3" align="left" style={{fontWeight: "bold"}}>
                  Tools"12  qWA<
                </Typography>
              </Grid>

              <Grid item>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                  <Grid item sm={12} md={3}>
                    <BlogCard text="This is a blog post header"></BlogCard>
                  </Grid>
                  <Grid item sm={12} md={3}>
                    <BlogCard text="This is a blog post header"></BlogCard>
                  </Grid>
                  <Grid item sm={12} md={3}>
                    <BlogCard text="This is a blog post header"></BlogCard>
                  </Grid>
                  <Grid item sm={12} md={3}>
                    <BlogCard text="This is a blog post header"></BlogCard>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Button variant="outlined" style={{outline: "none", background: "#1D3557", color: "white"}}>View More</Button>
              </Grid>
            </Grid> {/** tools */}

            <Divider style={{marginTop: "40px"}}></Divider>

            <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={{width: "75%", margin: "0 auto"}}>
              <Grid item xs={12}>
                <Typography variant="h3" align="left" style={{fontWeight: "bold"}}>
                  News
                </Typography>
              </Grid>

              <Grid item>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                  <Grid item sm={12} md={3}>
                    <BlogCard text="This is a blog post header"></BlogCard>
                  </Grid>
                  <Grid item sm={12} md={3}>
                    <BlogCard text="This is a blog post header"></BlogCard>
                  </Grid>
                  <Grid item sm={12} md={3}>
                    <BlogCard text="This is a blog post header"></BlogCard>
                  </Grid>
                  <Grid item sm={12} md={3}>
                    <BlogCard text="This is a blog post header"></BlogCard>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Button variant="outlined" style={{outline: "none", background: "#1D3557", color: "white"}}>View More</Button>
              </Grid>
            </Grid> {/** news */}

            <Divider style={{marginTop: "40px"}}></Divider>

            <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={{width: "75%", margin: "0 auto"}}>
              <Grid item xs={12}>
                <Typography variant="h3" style={{fontWeight: "bold"}}>
                  Forum
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="center" style={{fontWeight: "500"}}>
                  CommonRoad has also a welcoming and open community and our ecosystem grows larger day by day.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" style={{outline: "none", background: "#1D3557", color: "white"}}>View More</Button>
              </Grid>
            </Grid>

            <Divider style={{marginTop: "40px"}}></Divider>
        </div>
    );
  }
}
