import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './range-slider.css';

class RangeSlider extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 2, max: 10 },
        };
      }

    render() {
    return (
        <InputRange
        style={{"font-family": "Roboto", "font-size": "smaller"}}
        maxValue={20}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    );
    }
    
}

export default RangeSlider;