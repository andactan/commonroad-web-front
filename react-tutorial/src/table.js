import React, { Component } from 'react'
import TableBody from './table_body'
import TableHead from './table_head'


function Table(props){
    return (
        <table>
            <TableHead></TableHead>
            <TableBody data={props.data}></TableBody>
        </table>
    );
}

export default Table