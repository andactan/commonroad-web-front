import React from 'react';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Navbar from '../components/navbar';
 
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
            style={{width: "200px", margin: "0 auto"}}
            >
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
            </Carousel>
        </div>
        </div>
    );
  }
}