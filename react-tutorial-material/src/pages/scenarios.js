import React from 'react';
import NavBar from '../components/navbar';
import ScenarioCard from '../components/scenario-card';
import ScenarioFilter from '../components/scenario-filter';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';

let scenarioCards = [];
for (let i=0; i < 2; i++){
  const card = {
    version: '2018b',
    predType: 'Trajectory',
    tags: ['comfort'],
    obsTypes: ['BICYCLE', 'CAR'],
    sources: ['1'],
    timeHorizon: 15,
    initialVelocity: 0,
    staticObs: 2,
    dynamicObs: 2,
    egoVehicle: 1,
    goalRegions: 1
  }

  scenarioCards.push(card)
}

console.log(scenarioCards);


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

    const [version, setVersion] = React.useState(""); // single select
    const [predType, setPredType] = React.useState(""); // single select

    const [tags, setTags] = React.useState([]); // multiple select
    const [obsTypes, setObsTypes] = React.useState([]); // multiple select
    const [sources, setSources] = React.useState([]); // multiple select

    const [timeHorizon, setTimeHorizon] = React.useState([20, 100]); // range slider
    const [initialVelocity, setInitialVelocity] = React.useState([20, 100]); // range slider
    const [staticObs, setStaticObs] = React.useState([20, 100]); // range slider
    const [dynamicObs, setDynamicObs] = React.useState([20, 100]); // range slider
    const [egoVehicle, setEgoVehicle] = React.useState([20, 100]); // range slider
    const [goalRegions, setGoalRegions] = React.useState([20, 100]); // range slider
    

    const handleSourcesChange = event => {
        setSources(event.target.value);
    }

    const handleVersionChange = event => {
        setVersion(event.target.value);
    };

    const handlePredChange = event => {
        setPredType(event.target.value);
    };

    const handleTagChange = event => {
        setTags(event.target.value);
    };

    const handleObsTypesChange = event => {
        setObsTypes(event.target.value);
    };

    const handleTimeHorizonChange = (event, newValue) => {
        setTimeHorizon(newValue);
    };

    const handleInitialVelocityChange = (event, newValue) => {
        setInitialVelocity(newValue);
    };

    const handleStaticObsChange = (event, newValue) => {
        setStaticObs(newValue);
    };

    const handleDynamicObsChange = (event, newValue) => {
        setDynamicObs(newValue);
    };

    const handleEgoVehicleChange = (event, newValue) => {
        setEgoVehicle(newValue);
    };

    const handleGoalRegionsChange = (event, newValue) => {
        setGoalRegions(newValue);
    };

    const filterProps = {
      version: version,
      predType: predType,
      tags: tags,
      obsTypes: obsTypes,
      sources: sources,
      timeHorizon: timeHorizon,
      initialVelocity: initialVelocity,
      staticObs: staticObs,
      dynamicObs: dynamicObs,
      egoVehicle: egoVehicle,
      goalRegions: goalRegions,
      handleSourcesChange:  handleSourcesChange,
      handleVersionChange: handleVersionChange,
      handlePredChange: handlePredChange,
      handleTagChange: handleTagChange,
      handleObsTypesChange: handleObsTypesChange,
      handleTimeHorizonChange: handleTimeHorizonChange,
      handleInitialVelocityChange: handleInitialVelocityChange,
      handleStaticObsChange: handleStaticObsChange,
      handleDynamicObsChange: handleDynamicObsChange,
      handleEgoVehicleChange: handleEgoVehicleChange,
      handleGoalRegionsChange: handleGoalRegionsChange
    }

    let queryResult = [];
    if (version && predType && tags.length && obsTypes.length) {
      queryResult = scenarioCards.find(element => (
        element.version === version &&
        element.predType === predType &&
        element.tags.filter(x => tags.includes(x)).length &&
        element.obsTypes.filter(x => obsTypes.includes(x))
        ))

      if (!queryResult) {
        queryResult = []
      }
    }
    else {
      queryResult = scenarioCards;
    }


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
                    <ScenarioFilter {...filterProps}></ScenarioFilter>
                  </div>
                  
                  <div>
                    {queryResult.map(function(item, i){
                      const cardProps = {
                        version: item.version,
                        timeHorizon: item.timeHorizon,
                        initialVelocity: item.initialVelocity,
                        staticObs: item.staticObs,
                        dynamicObs: item.dynamicObs
                      }

                      return <ScenarioCard {...cardProps}></ScenarioCard>
                    })}
                  </div>

              </main>
            </div>
        </div>
    );
}