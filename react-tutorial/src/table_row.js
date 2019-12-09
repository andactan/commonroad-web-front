import React, { Component } from 'react';

function TableRow(props){
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.job}</td>
        </tr>
    );
}

export default TableRow;