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
    padding: theme.spacing(3),
  },

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
            </Drawer>

            <main className={classes.content}>
                <Typography>dadasdasdasd</Typography>
            </main>
        </div>
    );
}
