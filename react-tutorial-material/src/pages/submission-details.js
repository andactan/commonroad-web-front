import React from 'react';
import NavBar from '../components/navbar';
import { Table, TableHead, TableContainer, TableRow, TableBody, TableCell, Typography } from '@material-ui/core';

export default function SubmissionDetails(){

    const submissionDetails = {
        "submission-id": {
            placeholder: "Submission ID",
            value: 2711
        },

        "username": {
            placeholder: "Username",
            value: "andac"
        },

        "country": {
            placeholder: "Country",
            value: "Germany"
        },

        "organization": {
            placeholder: "Organization",
            value: "TUM"
        },

        "submission-date": {
            placeholder: "Submission Date",
            value: "00:00, 99/99/9999"
        },

        "method": {
            placeholder: "Method",
            value: "mMm"
        },

        "code-url": {
            placeholder: "Code URL",
            value: "https://url.com"
        }
    }

    const benchmarkDetails= {
        "benchmark-id": {
            placeholder: "Benchmark ID",
            value: "AYYYYYYYYYYYYYYYDI"
        },

        "status": {
            placeholder: "Status",
            value: "Success"
        },

        "total-cost": {
            placeholder: "Total Cost",
            value: 123456
        },

        "cpu": {
            placeholder: "CPU",
            value: "cPu"
        },

        "processing-time": {
            placeholder: "Processing Time",
            value: "100 ms"
        },

        "normalized-time": {
            placeholder: "Normalized Time",
            value: "100 ms"
        },

        "algorithm": {
            placeholder: "Algorithm",
            value: "Dijkstra"
        }
    }

    const solutionDetails = {
        "total-cost": {
            placeholer: "Total Cost",
            value: 10000
        },

        "A": {
            placeholder: "A",
            value: 1
        },

        "SA": {
            placeholder: "SA",
            value: 1
        },

        "SR": {
            placeholder: "SR",
            value: 1
        },

        "LC": {
            placeholder: "LC",
            value: 1
        },

        "V": {
            placeholder: "V",
            value: 1
        },

        "O": {
            placeholder: "O",
            value: 1
        }
    }

    return (
        
        <div>
            <NavBar></NavBar>
            <div style={{width: "80%", margin: "0 auto"}}>

                <Typography variant="h4" style={{marginTop: "30px"}}> Submission Details </Typography>
                <TableContainer style={{marginBottom: "50px"}}>
                    <Table style={{maxWidth: "500px"}}>
                        <TableBody>
                            {Object.keys(submissionDetails).map((key, index)=> {
                                return (
                                    <TableRow key={key}>
                                        <TableCell align="left">{submissionDetails[key]["placeholder"]}</TableCell>
                                        <TableCell align="right">{submissionDetails[key]["value"]}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <Typography variant="h4"> Benchmark Details </Typography>
                <TableContainer>
                    <Table style={{maxWidth: "500px"}}>
                        <TableBody>
                            {Object.keys(benchmarkDetails).map((key, index)=> {
                                return (
                                    <TableRow key={key}>
                                        <TableCell align="left">{benchmarkDetails[key]["placeholder"]}</TableCell>
                                        <TableCell align="right">{benchmarkDetails[key]["value"]}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography variant="h4"> Solution Details </Typography>
                <TableContainer>
                    <Table style={{maxWidth: "500px"}}>
                        <TableBody>
                            {Object.keys(solutionDetails).map((key, index)=> {
                                return (
                                    <TableRow key={key}>
                                        <TableCell align="left">{solutionDetails[key]["placeholder"]}</TableCell>
                                        <TableCell align="right">{solutionDetails[key]["value"]}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}