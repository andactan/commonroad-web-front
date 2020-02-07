import React from 'react';
import Typography from '@material-ui/core/Typography';
import BenchmarkRankingTable from '../components/benchmark-ranking-table';
import NavBar from '../components/navbar';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function createData(rank, user, country, organization, method, algorithm, submission_date, cpu, processing_time, relative_cost) {
    return { rank, user, country, organization, method, algorithm, submission_date, cpu, processing_time, relative_cost };
}

const rows = [
    createData(1, "dog", "DE", "TUM", "Method Name", "Algo Name", "2019/02/02 22:22", 1, 150, "100%"),
    createData(2, "dog", "DE", "TUM", "Method Name", "Algo Name", "2019/02/02 22:22", 1, 150, "100%"),
    createData(3, "dog", "DE", "TUM", "Method Name", "Algo Name", "2019/02/02 22:22", 1, 150, "100%"),
    createData(4, "dog", "DE", "TUM", "Method Name", "Algo Name", "2019/02/02 22:22", 1, 150, "100%"),
    createData(5, "dog", "DE", "TUM", "Method Name", "Algo Name", "2019/02/02 22:22", 1, 150, "100%"),
];

export default function BenchmarkRanking(props) {
    const {match, location} = props;

    const benchmarkArray = location.state.sortedArray;
    const benchmarkName = match.params.benchmarkID;
    const benchmarkIndex = benchmarkArray.findIndex(x=>x.benchmark_name === benchmarkName);

    let nextBenchmarkIndex = benchmarkIndex + 1;
    let prevBenchmarkIndex = benchmarkIndex - 1;

    if (nextBenchmarkIndex === benchmarkArray.length){
        nextBenchmarkIndex = 0;
    }

    if (prevBenchmarkIndex < 0) {
        prevBenchmarkIndex = benchmarkArray.length - 1;
    }

    const nextButtonTo = {
        pathname: "/submissions/ranking/" + benchmarkArray[nextBenchmarkIndex].benchmark_name,
        state: {
            sortedArray: benchmarkArray
        }
    }

    const prevButtonTo = {
        pathname: "/submissions/ranking/" + benchmarkArray[prevBenchmarkIndex].benchmark_name,
        state: {
            sortedArray: benchmarkArray
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <div style={{width: "80%", margin: "0 auto"}}>
                
                <div style={{marginBottom: "20px", marginTop: "40px"}}>
                    <Typography variant="h4">
                        Ranking for Benchmark ID {benchmarkName}
                    </Typography>
                    <Typography>
                        In this ranking, we compare the costs of each submssion with respect to
                        the best solution so far. To get a detailed report on the costs for each submission,
                        click on the respective solution.
                    </Typography>
                </div>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Link to={prevButtonTo} style={{textDecoration: "none"}}>
                        <Button style={{outline: "none", padding: "0px"}} startIcon={<ArrowBackIcon/>}>Previous</Button>
                    </Link>
                        
                    <Link to={nextButtonTo} style={{textDecoration: "none"}}>
                        <Button style={{outline: "none", padding: "0px"}} endIcon={<ArrowForwardIcon></ArrowForwardIcon>}>Next</Button>
                    </Link>

                </div>
                <div style={{marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Typography variant="h5">
                        Visualization of the best solution
                    </Typography>
                    <img src={require('../assets/placeholder.gif')}></img>
                </div>

                <div>
                    <BenchmarkRankingTable rows={rows}></BenchmarkRankingTable>
                </div>
            </div>
        </div>
    )
}