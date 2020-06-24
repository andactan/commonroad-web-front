import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from './logo';
import {  Button, MenuItem, Menu } from '@material-ui/core';

import NavBarItem from './navbar-item';
import UserAccountMenu from './user-account-menu';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Hidden from '@material-ui/core/Hidden';

import { useState } from 'react';

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
    overflowX: "auto",
    background: "#1D3557"
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
  },

  list: {
    width: 250,
  },

  menuButton: {
    marginLeft: "auto"
  },

  nested: {
    paddingLeft: "35px",
  }

}));

export default function NavBar() {
    const classes = useStyles();

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
    }
    
    const titles = Object.keys(links);
    const [drawer, setDrawer] = useState(false);
    const [sub, setSub] = useState(new Array(titles.length).fill(false));
    
    const openSub = (i) => {
        var arr = new Array(titles.length).fill(false);
        arr[i] = true; 
        setSub(arr);

    }

    const closeSubs = () => {
        setSub(new Array(titles.length).fill(false));
    }

    const openDrawer = () => {
        setDrawer(true);
    }

    const closeDrawer = () => {
        setDrawer(false);
        closeSubs();
    }

    const [logged, setLogged] = React.useState(false);
    React.useEffect(() => {
      const loginFlag = localStorage.getItem('IS_LOGGED_IN');
      const loggedIn = !!loginFlag;
      console.log("use effect did this: " + loggedIn);
      setLogged(loggedIn);
    })

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolBar} variant="dense">
                  <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                    <Logo></Logo>
                  </Link>
                    <Hidden mdDown>
                      {/* Documentation Menu */}
                      {titles.map(function (title){
                        
                        if (Object.keys(links[title]).length <= 1){
                          return(
                            <NavBarItem id={title} buttonText={title}></NavBarItem>
                          )    
                        } else {
                          return (
                            <NavBarItem id={title} buttonText={title} links={links[title]}></NavBarItem>
                          )
                        }
                      })}
                      {logged  
                        ? <UserAccountMenu style={{marginLeft: "auto"}}></UserAccountMenu>
                        : <Button href="signin" style={{marginLeft: "auto", color: "white"}}></Button>
                      }
                    </Hidden>
                    <Hidden lgUp>
                      <IconButton edge="end" display="none" className={classes.menuButton} onClick={openDrawer} color="inherit" aria-label="menu">
                          <MenuIcon />
                      </IconButton>
                    </Hidden>
                    
                </Toolbar>
            </AppBar>
            <Hidden lgUp>
                <Drawer anchor="top" open={drawer} onClose={closeDrawer}>
                    <List component="nav">

                        {titles.map(function (title) {

                            const names = Object.keys(links[title])

                            if (names.length <= 1){
                                return (
                                    <ListItem button onClick={closeDrawer} onKeyDown={closeDrawer}>
                                        <ListItemText primary={title.charAt(0).toUpperCase() + title.slice(1)} />
                                    </ListItem>
                                );
                            } else {
                                const index = titles.indexOf(title);
                                
                                return (
                                    <div>
                                        <ListItem button onClick={sub[index] ? closeSubs : (e) => {openSub(index)}}>
                                            <ListItemText primary={title.charAt(0).toUpperCase() + title.slice(1)} />
                                            {sub[index] ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>

                                        <Collapse in={sub[index]} timeout="auto" unmountOnExit>
                                            <List disablePadding>
                                                { names.map(name => {
                                                    const link = links[title][name];

                                                    return(
                                                        <ListItem button className={classes.nested} onClick={closeDrawer} onKeyDown={closeDrawer}>
                                                            <ListItemText primary={link.text} />
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        </Collapse>
                                    </div>
                                );
                            }                             
                        })}
                    </List>
                </Drawer>
            </Hidden>

        </div>
    );
}
