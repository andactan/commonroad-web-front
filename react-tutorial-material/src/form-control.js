import React from 'react';
import { FormControl, FormControlLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Form(){

    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const handleChange = event => {
      setAge(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <FormControlLabel id="demo-simple-select-label">Age</FormControlLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )

}