import React from 'react';
import { Typography } from '@material-ui/core';
import NavBar from '../components/navbar';

export default function Teaching(){

  return (
    <div>
      <NavBar></NavBar>
      <div style={{display: "flex", flexDirection: "row", margin: "0 auto", width: "70%"}}>
        <div style={{paddingTop: "20px"}}>{/** Left div with text */}
          <div> {/** teaching material */}
            <Typography variant="h4">
              Teaching Material
            </Typography>

            <Typography variant="body1">
              Besides benchmarking motion planners, CommonRoad is also a useful tool for teaching. In our lecture, Foundations
              of Artificial Intelligence, students solve planning problems using motion primitives as a programming exercise, which
              can be evaluated on our website. We welcome faculty and students from other universities to use and modify our teaching
              material on search algorithms, which is based on the book Artificial Intelligence: A Modern Approach by Stuart Russell and
              Peter Norvig.
            </Typography>
          </div>

          <div style={{paddingTop: "20px"}}> {/** lecture slides */}
            <Typography variant="h4">
              Introduction and Lecture Slides
            </Typography>
            
            <Typography> Introduction to CommonRoad </Typography>{/**TODO: add pdf and tex link */}
            <Typography> Uninformed Search </Typography>{/**TODO: add pdf and tex link */}
            <Typography> Informed Search </Typography>{/**TODO: add pdf and tex link */}
          </div>

          <div style={{paddingTop: "20px"}}> {/** programming exercise */}
            <Typography variant="h4"> Programming Exercise </Typography>
            <Typography>blaaagaga</Typography>
          </div>
        </div> 

        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>  {/** Right div with image */}
          <img src={require("../assets/teaching_material.png")} />
        </div>
      </div>
    </div>
  )
}