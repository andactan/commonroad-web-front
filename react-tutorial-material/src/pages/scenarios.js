import React from 'react';
import NavBar from '../components/navbar';
import ScenarioCard from '../components/scenario-card';
import ScenarioFilter from '../components/scenario-filter';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';


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

export default function Scenarios() {
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
            <NavBar></NavBar>
            <div style={{width: "70%", margin: "0 auto"}}>
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

                  <div>
                    <Typography className={classes.typoContent} variant="body1">
                      Apply filters the narrow down scenarios list
                    </Typography>
                  </div>
 
                  <div style={{marginBottom: "40px"}}>
                    <ScenarioFilter></ScenarioFilter>
                  </div>
                  
                  <div>
                    <ScenarioCard></ScenarioCard>
                    <ScenarioCard></ScenarioCard>
                  </div>

              </main>
            </div>
        </div>
    );
}