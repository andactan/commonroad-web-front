import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from './logo';
import {  Button, MenuItem, Menu } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import NavBarItem from './navbar-item'

const drawerWidth = '25%';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  toolBar: {
    flex: 1,
    justifyContent: "flex-start",
    overflowX: "auto"
  },

  menuSelect: {
    paddingLeft: "20px"
  },

  menuButton: {
    marginLeft: "20px",
    color: "white",
    outline: "0 !important"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '18px',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },

  drawerText: {
  },

  drawerButton: {
    marginLeft: 'auto'
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },

  typoContent: {
    marginBottom: 14
  },

  divider: {
    marginTop: 10,
    marginBottom: 10
  },

  menuItem: {
    fontSize: "0.9em"
  },

  a: {
    color: "inherit",
    textDecoration: "none !important"
  }

}));

function createLink(link, className) {

  const {placeholder, href} = link
  return (
    <a className={className} href={href}>{placeholder}</a>
  )
}

export default function NavBar() {
    const classes = useStyles();

    /* navigation links */
    const documentationLinks = {
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
    }

    const toolsLinks = {
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
    }

    const scenariosLinks = {
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
    }

    const communityLinks = {
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

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolBar} variant="dense">
                  <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                    <Logo></Logo>
                  </Link>
                  
                    
                    {/* Documentation Menu */}
                    <NavBarItem id="documentation" buttonText="Documentation" links={documentationLinks}></NavBarItem>
                    <NavBarItem id="tutorials" buttonText="Tutorials"></NavBarItem>
                    <NavBarItem id="tools" buttonText="Tools" links={toolsLinks}></NavBarItem>
                    <NavBarItem id="scenarios" buttonText="Scenarios" links={scenariosLinks}></NavBarItem>
                    <NavBarItem id="publications" buttonText="Publications"></NavBarItem>
                    <NavBarItem id="community" buttonText="Community" links={communityLinks}></NavBarItem>

                    

               
                </Toolbar>
            </AppBar>
        </div>
    );
}
