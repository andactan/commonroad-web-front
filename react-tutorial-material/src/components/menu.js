import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';

import Logo from './logo';
import {MenuItem, Menu } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    menuButton: {
        marginRight: "10px",
    },
    nested: {
        paddingLeft: "25px",
    }
}));


export default function Menu2(){

     /* navigation links */
    const links = {
        documentation: {
            vehicleModel: {
              type: "a",
              text: "Vehicle Model Documentation",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-vehicle-models/blob/master/vehicleModels_commonRoad.pdf",
            },
      
            costFunction: {
              type: "a",
              text: "Cost Function Documentation",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-cost-functions/blob/master/costFunctions_commonRoad.pdf"
            },
            
            xmlFormat: {
              type: "a",
              text: "XML Format Documentation",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-scenarios/blob/master/documentation/XML_commonRoad.pdf"
            },
      
            xmlSchema: {
              type: "a",
              text: "XML Schema Definition",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-scenarios/blob/master/documentation/XML_commonRoad_XSD.xsd"
            },
      
            commonroadDoc: {
              type: "a",
              text: "CommonRoad_IO Documentation",
              href: "https://commonroad.in.tum.de/static/docs/commonroad-io/index.html"
            },
      
            driveToLanelet: {
              type: "a",
              text: "OpenDRIVE to Lanelet Converter Documentation",
              href: "https://commonroad.in.tum.de/static/docs/opendrive2lanelet/index.html"
            },
      
            collisionChecker: {
              type: "a",
              text: "Collision Checker Documentation",
              href: "https://commonroad.in.tum.de/static/docs/collision-checker/index.html"
            },
      
            commonSumo: {
              type: "a",
              text: "CommonRoad-SUMO Interface",
              href: "https://commonroad.in.tum.de/static/docs/commonroad-sumo-interface/index.html"
            },
      
            commonSearch: {
              type: "a",
              text: "CommonRoad Search: Sampling-based Motion Planning",
              href: "https://commonroad.in.tum.de/static/docs/commonroad-search/index.html"
            }
        },
        tutorials: {

        },
        tools: {
            commonPyPi: {
              type: "a",
              text: "CommonRoad_io",
              href: "https://pypi.org/project/commonroad-io/"
            },
      
            collisionChecker: {
              type: "a",
              text: "Collision Checker",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-collision-checker"
            },
      
            commonSumo: {
              type: "a",
              text: "CommonRoad-SUMO Interface",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-sumo-interface"
            },
      
            driveToLanelet: {
              type: "a",
              text: "OpenDRIVE to Lanelet Converter",
              href: "https://pypi.org/project/opendrive2lanelet/"
            },
      
            commonSearch: {
              type: "a",
              text: "CommonRoad Search: Sampling-based Motion Planning",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-search"
            },
      
            spot: {
              type: "a",
              text: "SPOT",
              href: "http://koschi.gitlab.io/spot/"
            },
      
            vehicleModelMATLAB: {
              type: "a",
              text: "Vehicle Models for MATLAB",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-vehicle-models/tree/master/MATLAB"
            },
      
            vehicleModelPython: {
              type: "a",
              text: "Vehicle Models for Python",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-vehicle-models/tree/master/Python"
            }
        },
        scenarios: {
            repo: {
              type: "a",
              text: "Repository",
              href: "https://gitlab.lrz.de/tum-cps/commonroad-scenarios"
      
            },
      
            scenarios: {
              type: "link",
              text: "Scenarios and Visualizations",
              to: "/scenarios"
            },
      
            ranking: {
              type: "link",
              text: "Submissions and Ranking",
              to: "/submissions"
            }
        },
        publications: {

        },
        community: {
            forum: {
              type: "a",
              text: "Forum",
              href: "#"
            },
      
            teachingMaterial: {
              type: "link",
              text: "Teaching Material",
              to: "/"
            },
      
            intern: {
              type: "link",
              text: "Internship Opportunities",
              to: "/"
            },
      
            team: {
              type: "link",
              text: "Team",
              to: "/"
            }
        }
    };

    var contentKeys = Object.keys(links);

    const [drawer, setDrawer] = useState(false);
    const [sub1, setSub1] = useState(false);

    const openDrawer = () => {
        setDrawer(true);
    }

    const closeDrawer = () => {
        setDrawer(false);
        setSub1(false);
    }
    
    const classes = useStyles();

        return (
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Logo></Logo>
                    <IconButton edge="start" className={classes.menuButton} onClick={openDrawer} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

                {contentKeys.map(keys => (<h3>{keys}</h3>))}

                {links.map(title => (<h3>{title.keys}</h3>))}

                <Drawer anchor="top" open={drawer} onClose={closeDrawer}>
                    <List component="nav" className={classes.root} >
                        <ListItem button onClick={closeDrawer} onKeyDown={closeDrawer}>
                            <ListItemText primary="Test1" />
                        </ListItem>

                        <ListItem button onClick={closeDrawer} onKeyDown={closeDrawer}>
                            <ListItemText primary="Test2" />
                        </ListItem>

                        <ListItem button onClick={() => setSub1(!sub1)}>
                            <ListItemText primary="Test3" />
                            {sub1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse in={sub1} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                <ListItem button className={classes.nested} onClick={closeDrawer} onKeyDown={closeDrawer}>
                                    <ListItemText primary="subtest3.1" />
                                </ListItem>

                                <ListItem button className={classes.nested} onClick={closeDrawer} onKeyDown={closeDrawer}>
                                    <ListItemText primary="subtest3.2" />
                                </ListItem>

                                <ListItem button className={classes.nested} onClick={closeDrawer} onKeyDown={closeDrawer}>
                                    <ListItemText primary="subtest3.3" />
                                </ListItem>
                            </List>
                        </Collapse>
                        
                        <ListItem button onClick={closeDrawer} onKeyDown={closeDrawer}>
                            <ListItemText primary="Test4" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }