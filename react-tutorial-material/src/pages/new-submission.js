import React from 'react';

import FileUpload from '../components/file-upload';
import NavBar from '../components/navbar';

import {  Typography, Card, CardContent, Collapse, Table, TableHead, TableContainer, TableCell, TableBody, TableRow, Divider } from '@material-ui/core';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';

import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

const useStyles = makeStyles({

    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
    },

    main: {
        width: "70%",
        margin: "0 auto"
    },

    "row-1": {
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    "item": {
        flexBasis: "45%"
    },

    "submission-format": {
        marginTop: "20px"
    },

    "xml-formats": {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    "cost-and-vehicle-models": {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }

    
});

function MinusSquare(props) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
      </SvgIcon>
    );
  }
  
  function PlusSquare(props) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
      </SvgIcon>
    );
  }
  
  function CloseSquare(props) {
    return (
      <SvgIcon className="close" fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
      </SvgIcon>
    );
  }
  
  function TransitionComponent(props) {
    const style = useSpring({
      from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
    });
  
    return (
      <animated.div style={style}>
        <Collapse {...props} />
      </animated.div>
    );
  }
  
  TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
  };
  
  const StyledTreeItem = withStyles((theme) => ({
    iconContainer: {
      '& .close': {
        opacity: 0.3,
      },
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
  }))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);
  

export default function NewSubmission(){

    const classes = useStyles();
    return (
        <div>
            <NavBar></NavBar>
            <div id="main" className={classes.main}>
                <div id="row-1" className={classes["row-1"]}>
                    <div id="column-1" className={classes.item}>
                        <Typography variant="h4">Submit Benchmark Results</Typography>
                        <Typography variant="body1" style={{marginBottom: "10px"}}>
                            Results to CommonRoad benchmarks have to be uploaded as .xml files according to format specified below.
                            Valid solution files can be easily created by using our solution writer. After submitting your solution,
                            you can check your results before publishing it.
                        </Typography>
                        <FileUpload></FileUpload>
                    </div>


                    <div id="column-2" className={classes.item}>
                        <Typography variant="h4">Tutorial</Typography>
                        <Typography variant="body1">
                            This tutorial for our tool CommonRoad_io guides through the process of opening a CommonRoad scenario,
                            implementing a simple trajectory planner, and finally creating and uploading a solution file.
                        </Typography>
                        <img src={require('../assets/tutorial_preview.png')}></img>
                    </div>
                </div>

                <Divider variant="middle"></Divider>

                <div id="submission-format" className={classes["submission-format"]}>
                    <Typography variant="h4">Submission Format</Typography>
                    <Typography variant="body1">
                        A compherensive introduction to CommonRoad benchmarks can be found in our paper. In short, a benchmark consists of
                        a scenario ID, a cost function, a vehicle model and a vehicle type. The solution file has to be uploaded as a formatted XML file
                        adhering to ".xsd schema definition" in "commonroad_solution_shema.xsd"
                    </Typography>

                    <Typography variant="body1" style={{marginTop: "10px"}}>
                        A solution file contains the solutions for all planning problems in the scenario. Each planning problem solution can be
                        either specified as a trajectory or as an input vector of the chosen vehicle model. Both types have to specify ID of their
                        planning problem in the "planningProblemId" attribute. The two solution formats are described below.
                    </Typography>

                    <div id="xml-formats" className={classes["xml-formats"]}>
                        <div id="xml-format-trajectory" className={classes.item}>
                            <Typography variant="h5"> XML format for trajectories</Typography>
                            <Typography variant="body2">
                                Trajectories are submitted as state vectors describing the vehicle state at each time step.css
                                Depending on the vehicle model in the planning problem, different Trajectories types containing different state vectors 
                                need to be selected. We provide a shorthened description of trajectory formats, the full format can be found in the schema
                                definition file.
                            </Typography>
                            <Card>
                                <CardContent>
                                    <TreeView 
                                    defaultExpanded={['1', '2', '3', '4']} 
                                    defaultCollapseIcon={<MinusSquare />}
                                    defaultExpandIcon={<PlusSquare />}
                                    defaultEndIcon={<CloseSquare />}>
                                        
                                        <StyledTreeItem nodeId="1" label="pmTrajectory">
                                            <StyledTreeItem nodeId="1.1" label="pmState">
                                                <StyledTreeItem nodeId="1.1.1" label="x"></StyledTreeItem>
                                                <StyledTreeItem nodeId="1.1.2" label="y"></StyledTreeItem>
                                                <StyledTreeItem nodeId="1.1.3" label="xAcceleration: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="1.1.4" label="yAcceleration: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="1.1.5" label="time: int"></StyledTreeItem>
                                            </StyledTreeItem>
                                        </StyledTreeItem>

                                        <StyledTreeItem nodeId="2" label="ksTrajectory">
                                            <StyledTreeItem nodeId="2.1" label="ksState">
                                                <StyledTreeItem nodeId="2.1.1" label="x: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="2.1.2" label="y: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="2.1.3" label="orientation: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="2.1.4" label="velocity: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="2.1.5" label="steeringAngle: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="2.1.6" label="time: int"></StyledTreeItem>
                                            </StyledTreeItem>
                                        </StyledTreeItem>

                                        <StyledTreeItem nodeId="3" label="stTrajecory">
                                            <StyledTreeItem nodeId="3.1" label="stState">
                                                <StyledTreeItem nodeId="3.1.1" label="x: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="3.1.2" label="y: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="3.1.3" label="orientation: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="3.1.4" label="velocity: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="3.1.5" label="steeringAngle: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="3.1.6" label="yawRate: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="3.1.7" label="slipAngle: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="3.1.8" label="time: int"></StyledTreeItem>
                                            </StyledTreeItem>
                                        </StyledTreeItem>

                                        <StyledTreeItem nodeId="4" label="mbTrajectory">
                                            <StyledTreeItem nodeId="4.1" label="mbState">
                                                <StyledTreeItem nodeId="4.1.1" label="x: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.2" label="y: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.3" label="steeringAngle: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.4" label="velocity: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.5" label="orientation: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.6" label="yawRate: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.7" label="rollAngle: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.8" label="rollRate: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.9" label="pitchAngle: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.10" label="pitchRate: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.11" label="yVelocity: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.12" label="zPosition: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.13" label="zVelocity: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.14" label="rollAngleFront: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.15" label="rollRateFront: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.16" label="yVelocityFront: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.17" label="zPositionFront: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.18" label="zVelocityFront: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.19" label="rollAngleRear: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.20" label="rollRateRear: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.21" label="yVelocityRear: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.22" label="zPositionRear: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.23" label="zVelocityRear: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.24" label="leftFrontWheelAngularSpeed: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.25" label="rightFrontWheelAngularSpeed: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.26" label="leftRearWheelAngularSpeed: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.27" label="rightRearWheelAngularSpeed: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.28" label="deltaYf: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.29" label="deltaYr: float"></StyledTreeItem>
                                                <StyledTreeItem nodeId="4.1.30" label="time: int"></StyledTreeItem>
                                            </StyledTreeItem>
                                        </StyledTreeItem>

                                    </TreeView>
                                </CardContent>
                            </Card>
                        </div>
                        <div id="xml-format-input-vector" className={classes.item}>
                            <Typography variant="h5">XML format for input vectors</Typography>
                            <Typography variant="body2">
                                Vehicle inputs are submitted as inputt vectors for the vehicle model. The defaultCollapseIcon
                                inputVector type "inputVector" is applicable for all vehicle models except the PointMass model.
                            </Typography>

                            <Card>
                                <CardContent>
                                    <TreeView
                                    defaultExpanded={['1', '2', '3']} 
                                    defaultCollapseIcon={<MinusSquare />}
                                    defaultExpandIcon={<PlusSquare />}
                                    defaultEndIcon={<CloseSquare />}>

                                    <StyledTreeItem nodeId="1" label="inputVector">
                                        <StyledTreeItem nodeId="1.1" label="input">
                                            <StyledTreeItem nodeId="1.1.1" label="acceleration: float"></StyledTreeItem>
                                            <StyledTreeItem nodeId="1.1.2" label="steeringAngleSpeed: float"></StyledTreeItem>
                                            <StyledTreeItem nodeId="1.1.3" label="time: time"></StyledTreeItem>
                                        </StyledTreeItem>
                                    </StyledTreeItem>

                                    <StyledTreeItem nodeId="2" label="pmInputVector">
                                        <StyledTreeItem nodeId="2.1" label="pmInput">
                                            <StyledTreeItem nodeId="2.1.1" label="xAcceleration: float"></StyledTreeItem>
                                            <StyledTreeItem nodeId="2.1.2" label="yAcceleration: float"></StyledTreeItem>
                                            <StyledTreeItem nodeId="2.1.3" label="time: int"></StyledTreeItem>
                                        </StyledTreeItem>
                                    </StyledTreeItem>

                                    </TreeView>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div id="cost-functions-vehicle-models" className={classes["cost-and-vehicle-models"]}>
                        <div id="cost-functions" className={classes.item}>
                            <Typography variant="h5"> Cost Functions and Vehicle Models</Typography>
                            <Typography variant="body2">
                                Cost functions are specified by the IDs shown below. Each function consists of partial
                                cost functions and a weight. For details on all partial cost functions, have a look at
                                the "documentation".
                            </Typography>

                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableCell>Cost Function ID</TableCell>
                                        <TableCell>Partial Cost Functions and Weights</TableCell>
                                    </TableHead>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell>JB1</TableCell>
                                            <TableCell>(T|1)</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>SA1</TableCell>
                                            <TableCell>(SA|0.1), (SR|0.1), (D|10<sup>5</sup>)</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>WX1</TableCell>
                                            <TableCell>(T|10), (V|1), (A|0.1), (J|0.1), (D|0.1), (LC|10)</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>SM1</TableCell>
                                            <TableCell>(A|50), (SA|50), (SR|50), (LC|1), (V|20), (O|50)</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>SM2</TableCell>
                                            <TableCell>(A|50), (SA|50), (SR|50), (LC|1), (O|50)</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>SM3</TableCell>
                                            <TableCell>A|50), (SA|50), (SR|50), (V|20), (O|50)</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>MW1</TableCell>
                                            <TableCell>(J<sub>lat</sub>|5.0), (J<sub>long</sub>|0.5), (V|50), (ID|1)</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                        <div id="vehicle-models" className={classes.item}>
                            <Typography variant="h5"> Cost Functions and Vehicle Models</Typography>
                            <Typography variant="body2">
                                Cost functions are specified by the IDs shown below. Each function consists of partial
                                cost functions and a weight. For details on all partial cost functions, have a look at
                                the "documentation".
                            </Typography>

                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Model ID</TableCell>
                                            <TableCell>Vehicle Models</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell>PM</TableCell>
                                            <TableCell>Point-Mass</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>KS</TableCell>
                                            <TableCell>Kinematic Single-Track</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>ST</TableCell>
                                            <TableCell>Single-Track</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>MB</TableCell>
                                            <TableCell>Multi-Body</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 