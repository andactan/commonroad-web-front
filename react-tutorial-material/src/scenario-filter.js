import React from 'react';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    select: {
        display: 'flex'
    },

    rangeSlider: {
        padding: "10px"
    }
}));

export default function ScenarioFilter(){

    const classes = useStyles();

    const [version, setVersion] = React.useState(""); // single select
    const [predType, setPredType] = React.useState(""); // single select

    const [tags, setTags] = React.useState([]); // multiple select
    const [obsTypes, setObsTypes] = React.useState([]); // multiple select

    const [timeHorizon, setTimeHorizon] = React.useState([20, 100]); // range slider
    const [initialVelocity, setInitialVelocity] = React.useState([20, 100]); // range slider
    const [staticObs, setStaticObs] = React.useState([20, 100]); // range slider
    const [dynamicObs, setDynamicObs] = React.useState([20, 100]); // range slider
    const [egoVehicle, setEgoVehicle] = React.useState([20, 100]); // range slider
    const [goalRegions, setGoalRegions] = React.useState([20, 100]); // range slider

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

    return (
        <form action="submit">
            {/* version select */}
            <Grid container spacing={5} alignItems="flex-end">
                <Grid item xs={2}>
                    <Typography>Version</Typography>
                </Grid>
                <Grid item  xs={4}>
                    <Select value={version} onChange={handleVersionChange} className={classes.select}>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            
            {/* prediction type selects */}
            <Grid container spacing={5} alignItems="flex-end">
                <Grid item xs={2}>
                    <Typography>Type of Prediction</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Select value={predType} onChange={handlePredChange} className={classes.select}>
                        <MenuItem key={1} value={1}>1</MenuItem>
                        <MenuItem key={2} value={2}>2</MenuItem>
                    </Select>
                </Grid>
            </Grid>

            {/* tags multiple select */}
            <Grid container spacing={5} alignItems="flex-end">
                <Grid item xs={2}>
                    <Typography>Tags</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Select
                    multiple
                    value={tags} 
                    onChange={handleTagChange}
                    className={classes.select}
                    renderValue={selected=>(
                        <div>
                            {selected.map(value=> (
                                <Chip key={value} label={value}></Chip>
                            ))}
                        </div>
                    )}
                    >
                        <MenuItem key={1} value={1}>1</MenuItem>
                        <MenuItem key={2} value={2}>2</MenuItem>
                    </Select>
                </Grid>
            </Grid>

            {/* types of obstacles, multiple select */}
            <Grid container spacing={5} alignItems="flex-end">
                <Grid item xs={2}>
                    <Typography>Types of Obstacles</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Select
                    multiple
                    value={obsTypes} 
                    onChange={handleObsTypesChange}
                    className={classes.select}
                    renderValue={selected=>(
                        <div>
                            {selected.map(value=> (
                                <Chip key={value} label={value}></Chip>
                            ))}
                        </div>
                    )}
                    >
                        <MenuItem key={1} value={1}>1</MenuItem>
                        <MenuItem key={2} value={2}>2</MenuItem>
                    </Select>
                </Grid>
            </Grid>

            {/* time horizon slider */}
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={2}>
                    <Typography id="range-slider">Time Horizon (s)</Typography>
                </Grid>

                <Grid item xs={4} className={classes.rangeSlider}>
                    <Slider
                    max={181}
                    value={timeHorizon}
                    onChange={handleTimeHorizonChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    ></Slider>
                </Grid>
            </Grid>

            {/* initial velocity */}
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={2}>
                    <Typography id="range-slider">Initial Velocity (m/s)</Typography>
                </Grid>

                <Grid item xs={4} className={classes.rangeSlider}>
                    <Slider
                    max={181}
                    value={initialVelocity}
                    onChange={handleInitialVelocityChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    ></Slider>
                </Grid>
            </Grid>

            {/* static obstacles */}
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={2}>
                    <Typography id="range-slider">Number of Static Obstacles</Typography>
                </Grid>

                <Grid item xs={4} className={classes.rangeSlider}>
                    <Slider
                    max={181}
                    value={staticObs}
                    onChange={handleStaticObsChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    ></Slider>
                </Grid>
            </Grid>

            {/* dynamic obstacles */}
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={2}>
                    <Typography id="range-slider">Number of Dynamic Vehicles</Typography>
                </Grid>

                <Grid item xs={4} className={classes.rangeSlider}>
                    <Slider
                    max={181}
                    value={dynamicObs}
                    onChange={handleDynamicObsChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    ></Slider>
                </Grid>
            </Grid>

            {/* ego vehicles */}
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={2}>
                    <Typography id="range-slider">Number of Ego Vehicles</Typography>
                </Grid>

                <Grid item xs={4} className={classes.rangeSlider}>
                    <Slider
                    max={181}
                    value={egoVehicle}
                    onChange={handleEgoVehicleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    ></Slider>
                </Grid>
            </Grid>

            {/* number of goal regions */}
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={2}>
                    <Typography id="range-slider">Number of Goal Regions</Typography>
                </Grid>

                <Grid item xs={4} className={classes.rangeSlider}>
                    <Slider
                    max={181}
                    value={goalRegions}
                    onChange={handleGoalRegionsChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    ></Slider>
                </Grid>
            </Grid>
        </form>
    );
}