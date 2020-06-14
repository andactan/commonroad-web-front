import React from 'react';
import NavBar from '../components/navbar';
import { Typography, List, ListItem } from '@material-ui/core';

export default function Internship(){

  const listItems = [
    "Integration of operationg systems such as ROS (Python/C++)",
    "Simulation of vehicler in CommonRoad using the traffic simulator SUMO (C++)", // add link to SUMO
    "Automatic generation of critical traffic scenarios similary as in [link] (Python)",
    "Reading and writing of CommonRoad scenarios with MATLAB",
    "Connecting CommonRoad to Apollo (Python/C++)", // add link to Apollo
    "Development of our CommonRoad website for the evaluation of motion planning algorithms (Django, Python, Javascript)",
    "Improving our teaching material for motion planning (Django, Python)",
    "Programming of efficient algorithms for checking drivability of solutions (C++)",
    "Execution and preparation of hardware-in-the-loop tests or real vehicle tests (Python)"
  ]
  return (
    <div>
      <NavBar></NavBar>
      <div style={{margin: "0 auto", paddingTop: "20px", width: "80%"}}>
        <Typography variant="h4"> Internship Opportunity </Typography>
        <Typography>
          We are constantly seeking for motivated interns to further develop CommonRoad. Please note that we only accept international
          interns through DAA program.
        </Typography>

        <Typography> Current areas we are seeking expertise in are, but are not limited to: </Typography>
        <List>
          {listItems.map((item) => {

            return (
              <ListItem>
                <Typography> - {item}</Typography>
              </ListItem>
            )
          })}
        </List>

        <Typography>
        In case you are interested and want to apply for a DAAD internship, 
        please send your transcript of records and an up-to-date CV to Edmond Irani Liu (edmond.irani@tum.de) with mail title "DAAD application, YOUR NAME".
        </Typography>
      </div>
    </div>
  )
}