import React, { Component } from 'react';
import TableRow from './table_row';

function TableBody(props) {
    const rows = props.data.map((row, index) => {
        return <TableRow name={row.name} job={row.job}/>
    })

    return <tbody>{rows}</tbody>
}

export default TableBody;