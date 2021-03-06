import React from 'react';
import { Grid } from '@material-ui/core';

export default function Logo(){
    return (
        <div style={{paddingRight: "50px"}}>
            <Grid container spacing={2}>
                <Grid item>
                    <a href="#">
                        <img src={require('../assets/static_img_tum-logo-white-xs.svg')} alt="logo" height="30px"/>
                    </a>
                    
                </Grid>
                
                <Grid item>
                    <a href="#">
                        <img src={require('../assets/static_img_commonroad_logo_white.svg')} alt="logo" height="30px"/>
                    </a>  
                </Grid>
            </Grid>
        </div>
    )
}