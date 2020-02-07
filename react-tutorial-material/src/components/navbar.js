import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NestedItem from './nested-item';
import {navMenus} from '../constants';
import Logo from './logo';
import { Link, Button, MenuItem, Menu } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
        placeholder: "Vehicle Model Documentation",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-vehicle-models/blob/master/vehicleModels_commonRoad.pdf",
      },

      costFunction: {
        placeholder: "Cost Function Documentation",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-cost-functions/blob/master/costFunctions_commonRoad.pdf"
      },
      
      xmlFormat: {
        placeholder: "XML Format Documentation",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-scenarios/blob/master/documentation/XML_commonRoad.pdf"
      },

      xmlSchema: {
        placeholder: "XML Schema Definition",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-scenarios/blob/master/documentation/XML_commonRoad_XSD.xsd"
      },

      commonroadDoc: {
        placeholder: "CommonRoad_IO Documentation",
        href: "https://commonroad.in.tum.de/static/docs/commonroad-io/index.html"
      },

      driveToLanelet: {
        placeholder: "OpenDRIVE to Lanelet Converter Documentation",
        href: "https://commonroad.in.tum.de/static/docs/opendrive2lanelet/index.html"
      },

      collisionChecker: {
        placeholder: "Collision Checker Documentation",
        href: "https://commonroad.in.tum.de/static/docs/collision-checker/index.html"
      },

      commonSumo: {
        placeholder: "CommonRoad-SUMO Interface",
        href: "https://commonroad.in.tum.de/static/docs/commonroad-sumo-interface/index.html"
      },

      commonSearch: {
        placeholder: "CommonRoad Search: Sampling-based Motion Planning",
        href: "https://commonroad.in.tum.de/static/docs/commonroad-search/index.html"
      }
    }

    const toolsLinks = {
      commonPyPi: {
        placeholder: "CommonRoad_io",
        href: "https://pypi.org/project/commonroad-io/"
      },

      collisionChecker: {
        placeholder: "Collision Checker",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-collision-checker"
      },

      commonSumo: {
        placeholder: "CommonRoad-SUMO Interface",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-sumo-interface"
      },

      driveToLanelet: {
        placeholder: "OpenDRIVE to Lanelet Converter",
        href: "https://pypi.org/project/opendrive2lanelet/"
      },

      commonSearch: {
        placeholder: "CommonRoad Search: Sampling-based Motion Planning",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-search"
      },

      spot: {
        placeholder: "SPOT",
        href: "http://koschi.gitlab.io/spot/"
      },

      vehicleModelMATLAB: {
        placeholder: "Vehicle Models for MATLAB",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-vehicle-models/tree/master/MATLAB"
      },

      vehicleModelPython: {
        placeholder: "Vehicle Models for Python",
        href: "https://gitlab.lrz.de/tum-cps/commonroad-vehicle-models/tree/master/Python"
      }
    }

    /* set distinct anchor elements for each menu */
    const [documentationAnchorEl, setDocumentationAnchorEl] = React.useState(null);
    const [toolsAnchorEl, setToolsAnchorEl] = React.useState(null);
    const [scenariosAnchorEl, setScenariosAnchorEl] = React.useState(null);
    const [commAnchorEl, setCommAnchorEl] = React.useState(null);
    
    /* Click handlers */
    const handleDocumentationClick = event => {
      setDocumentationAnchorEl(event.currentTarget)
    }

    const handleToolsClick = event => {
      setToolsAnchorEl(event.currentTarget);
    }

    const handleScenariosClick = event => {
      setScenariosAnchorEl(event.currentTarget);
    }

    const handleCommClick = event => {
      setCommAnchorEl(event.currentTarget);
    }
    
    /* Close handlers */
    const handleDocumentationClose = () => {
      setDocumentationAnchorEl(null);
    }

    const handleToolsClose = () => {
      setToolsAnchorEl(null);
    }

    const handleScenariosClose = () => {
      setScenariosAnchorEl(null);
    }

    const handleCommClose = () => {
      setCommAnchorEl(null);
    }


    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolBar} variant="dense">
                    <Logo></Logo>

                    {/* Documentation Menu */}
                    <Button 
                      aria-controls="documentation" 
                      className={classes.menuButton} 
                      onClick={handleDocumentationClick}
                      endIcon={<ArrowDropDownIcon></ArrowDropDownIcon>}
                      >
                       Documentation </Button>
                    <Menu
                      id="documentation" 
                      anchorEl={documentationAnchorEl} 
                      keepMounted 
                      onClose={handleDocumentationClose} 
                      open={Boolean(documentationAnchorEl)} 
                      getContentAnchorEl={null} 
                      anchorOrigin={{vertical: "bottom", horizontal: "left"}}>

                      {Object.keys(documentationLinks).map((key, index) => {
                        return (
                        <a className={classes.a} href={documentationLinks[key]["href"]} target="_blank">
                          <MenuItem className={classes.menuItem}  onClick={handleDocumentationClose}>
                            {documentationLinks[key]["placeholder"]}
                          </MenuItem>
                        </a>
                        
                        )})}
                    </Menu> 

                    {/* Tutorials Menu */}
                    <Button aria-controls="tutorials" className={classes.menuButton}> Tutorials </Button>

                    {/* Tools Menu */}
                    <Button aria-controls="tools" 
                      className={classes.menuButton} 
                      onClick={handleToolsClick} 
                      endIcon={<ArrowDropDownIcon></ArrowDropDownIcon>}> 
                    Tools </Button>
                    <Menu 
                      id="tools" 
                      anchorEl={toolsAnchorEl} 
                      keepMounted 
                      onClose={handleToolsClose} 
                      open={Boolean(toolsAnchorEl)} 
                      getContentAnchorEl={null} 
                      anchorOrigin={{vertical: "bottom", horizontal: "left"}}>

                      {Object.keys(toolsLinks).map((key, index) => {
                        return (
                        <a className={classes.a} href={toolsLinks[key]["href"]} target="_blank">
                          <MenuItem className={classes.menuItem}  onClick={handleDocumentationClose}>
                            {toolsLinks[key]["placeholder"]}
                          </MenuItem>
                        </a>
                        
                        )})}

                    </Menu>

                    {/* Scenarios menu -dropdown*/}
                    <Button aria-controls="scenarios" className={classes.menuButton} onClick={handleScenariosClick}> Scenarios </Button>
                    <Menu
                      id="scenarios"
                      anchorEl={scenariosAnchorEl}
                      keepMounted
                      onClose={handleScenariosClose}
                      open={Boolean(scenariosAnchorEl)}
                      getContentAnchorEl={null}
                      anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    >
                      <MenuItem className={classes.menuItem} onClick={handleScenariosClose}> Repository </MenuItem>
                      <MenuItem className={classes.menuItem} onClick={handleScenariosClose}> Ranking </MenuItem>
                      <MenuItem className={classes.menuItem} onClick={handleScenariosClose}> Visualization </MenuItem>
                    </Menu>

                    {/* Publications menu - single button */}
                    <Button aria-controls="publications" className={classes.menuButton}> Publications </Button>

                    {/* Community menu - dropdown*/}
                    <Button 
                      aria-controls="community" 
                      className={classes.menuButton} 
                      onClick={handleCommClick}
                      endIcon={<ArrowDropDownIcon></ArrowDropDownIcon>}
                      > 
                      Community </Button>
                    <Menu
                      id="community"
                      anchorEl={commAnchorEl}
                      keepMounted
                      onClose={handleCommClose}
                      open={Boolean(commAnchorEl)}
                      getContentAnchorEl={null}
                      anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                      
                    >
                      <MenuItem className={classes.menuItem} onClick={handleCommClose}> Forum </MenuItem>
                      <MenuItem className={classes.menuItem} onClick={handleCommClose}> Team </MenuItem>
                      <MenuItem className={classes.menuItem} onClick={handleCommClose}> Internship Opportunity </MenuItem>
                      <MenuItem className={classes.menuItem} onClick={handleCommClose}> Teaching Material - Search Algorithms </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}
