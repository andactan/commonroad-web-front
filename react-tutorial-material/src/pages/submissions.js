import React from 'react';
import Typography from '@material-ui/core/Typography';
import SubmissionTable from '../components/submission-table';
import NavBar from '../components/navbar';
import RankingFilter from '../components/ranking-filter';

function createData(benchmark_name, user, country, organization, processing_time, submissions) {
    return { benchmark_name, user, country, organization, processing_time, submissions };
}

const rows = [
    createData('B1', 'andac', 'andac', 'andac', 15, 10),
    createData('B2', 'andac', 'andac', 'andac', 15, 10),
    createData('B3', 'andac', 'andac', 'andac', 15, 10),
    createData('B4', 'andac', 'andac', 'andac', 15, 10),
    createData('B5', 'andac', 'andac', 'andac', 15, 10),
    createData('B6', 'andac', 'andac', 'andac', 15, 10),
    createData('B7', 'andac', 'andac', 'andac', 15, 10),
    createData('B8', 'andac', 'andac', 'andac', 15, 10),
];


export default function Submissons(){

    return (
        <div>
            <NavBar></NavBar>
            <div style={{width: "70%", margin: "0 auto"}}>
                <div style={{marginBottom: "20px", marginTop: "20px"}}>
                    <Typography variant="h4">Best Submissons</Typography>
                    <Typography>
                        Here we show the best solutions for each benchmark. To see the rankings
                        for a benchmark, please click on the benchmark ID.
                    </Typography>
                </div>


                <div style={{marginBottom:"40px", margin: "0 auto"}}>
                    <RankingFilter></RankingFilter>
                </div>
                
                <div>
                    <SubmissionTable rows={rows}></SubmissionTable>                   
                </div>
            </div>
            
        </div>
    )
    
}