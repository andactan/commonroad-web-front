import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Slider from '@material-ui/core/Slider';  
import NestedItem from './nested-item';
import {navMenus} from './constants';
import Logo from './logo';
import ScenarioFilter from './scenario-filter';

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
    paddingLeft: 0
  },

  menuButton: {
    marginRight: theme.spacing(2),
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
  }

}));

export default function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolBar} variant="dense">
                    <IconButton color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Logo></Logo>
                </Toolbar>
            </AppBar>

            <Drawer className={classes.drawer} anchor="left" open={open} classes={{paper: classes.drawerPaper}}>
              
              <div className={classes.drawerHeader}>
                <Typography variant="button" className={classes.drawerText}>Hallo</Typography>
                  <IconButton className={classes.drawerButton} onClick={handleDrawerClose}>
                      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
              </div>
              
              <NestedItem text="Documentation" names={navMenus.documentation.names}></NestedItem>
              <NestedItem text="Community" names={navMenus.community.names}></NestedItem>
              <NestedItem text="Scenarios" names={navMenus.scenarios.names}></NestedItem>
              <NestedItem text="Community" names={navMenus.community.names}></NestedItem>
              <NestedItem text="Tutorials" names={navMenus.tutorials.names}></NestedItem>
              <NestedItem text="Publications" names={navMenus.publications.names}></NestedItem>
            </Drawer>

            <main className={classes.content}>
                <Typography className={classes.typoContent} variant="body1">
                  Below, we visualize all our traffic scenarios, which range from simple scenarios with a few obstacles
                  to complex intersection scenarios with many road users. The scenarios are either obtained from real
                  traffic data (e.g., NGSIM dataset), simulation or are hand-crafted, mostly based on real road networks.
                  The source of each scenario is also tagged in each scenario file. Please note that we continously add 
                  more scenarios.
                </Typography>

                <Typography className={classes.typoContent} variant="body1">
                  The data for each scenario is stored in separate XML files named by the unique ID and can be downloaded
                  from below or from the scenario repository. For details on the data in the XML files, please have a look
                  at the XML format documentation.
                </Typography>

                <Divider className={classes.divider} variant="middle"></Divider>

                <Typography className={classes.typoContent} variant="body1">
                  Apply filters the narrow down scenarios list
                </Typography>

                <ScenarioFilter></ScenarioFilter>
            </main>
        </div>
    );
}
