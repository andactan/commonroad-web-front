import React from "react";

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  TableSortLabel,
  Paper,
  TablePagination,
  Button,
} from "@material-ui/core";

const tableHeads = [
  "ID",
  "Benchmark",
  "Actions",
  "Status",
  "Public",
  "Cost",
  "CPU",
  "Processing Time",
  "Processing Time (Normalized)",
  "Created",
  "Country",
  "Organization",
  "Method",
  "Algorithm",
  "Code URL",
];

const data = [
  { ID: 5, Benchmark: 3213131 },
  { ID: 6, Benchmark: 3213131 },
  { ID: 7, Benchmark: 3213131 },
  { ID: 8, Benchmark: 3213131 },
  { ID: 9, Benchmark: 3213131 },
  { ID: 10, Benchmark: 3213131 },
  { ID: 11, Benchmark: 3213131 },
  { ID: 12, Benchmark: 3213131 },
  { ID: 13, Benchmark: 3213131 },
  { ID: 14, Benchmark: 3213131 },
  { ID: 15, Benchmark: 3213131 },
  { ID: 16, Benchmark: 3213131 },
];

export default function UserSubmissionsTable(props) {

  //const data = props.data;

  // states
  const [sortingOrder, setSortingOrder] = React.useState("asc");
  const [sortingColumn, setSortingColumn] = React.useState("Created");
  const [selected, setSelected] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [submissions, setSubmissions] = React.useState(data);


  // handlers
  const handleSortRequest = (column) => (event) => {
    const isAscending = sortingOrder === "asc" && sortingColumn === column;

    setSortingOrder(isAscending ? "desc" : "asc");
    setSortingColumn(column);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = submissions.map((n) => n["ID"]);
      setSelected(newSelected);
    }
    else {
      setSelected([]);
    }
  }

  const handleSelectClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    }
    else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    }
    else if (selectedIndex === selected.length -1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    }
    else {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

    const handleDeleteClick = event => {
    
      // traverse all removal candidates
      for (let i=0; i < selected.length; i++){
        const remove = selected[i];
        const idx = data.findIndex(e => e["ID"] === remove);
  
        data.splice(idx, 1);
      }
      
      setSubmissions(data);
      setSelected([]);

      console.log((submissions.length / rowsPerPage) + 1);
      if ((submissions.length / rowsPerPage) - 1 < page && page !== 0){
        setPage(page-1);
      }

      console.log(submissions);
    }
  

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, submissions.length - page * rowsPerPage);

  return (
    <div>
      <div id="button-group" style={{display: "flex", justifyContent: "flex-end"}}>
        <Button variant="contained" color="primary" style={{width: "100px", marginLeft: "4px"}}>Publish</Button>
        <Button variant="contained" color="secondary" style={{width: "100px", marginLeft: "4px"}} onClick={handleDeleteClick}>Delete</Button>
        <Button variant="contained" style={{width: "100px", marginLeft: "4px", backgroundColor: "#D1CDCD"}}>Edit</Button>
      </div>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                   checked={submissions.length > 0 && selected.length === submissions.length}
                   onChange={handleSelectAllClick} 
                  />
                </TableCell>
                {tableHeads.map((e) => (
                  <TableCell
                    key={e}
                    sortDirection={sortingColumn === e ? sortingOrder : "asc"}
                  >
                    <TableSortLabel
                      active={true}
                      direction={sortingColumn === e ? sortingOrder : "asc"}
                      onClick={handleSortRequest(e)}
                    >
                      {e}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {submissions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  
                  const isSelected = selected.indexOf(row["ID"]) !== -1;

                  return(

                    <TableRow 
                      key={row["ID"]} 
                      hover
                      onClick={(event) => handleSelectClick(event, row["ID"])}
                      aria-checked={isSelected}
                      role="checkbox"
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox 
                          checked={isSelected} 
                        />
                      </TableCell>
                      {tableHeads.map((e) => {
                        if (e in row) {
                          console.log("anana sor");
                          return <TableCell>{row[e]}</TableCell>;
                        } else {
                          return <TableCell>aaa</TableCell>;
                        }
                      })}
                    </TableRow>
                  
                )})}

              {emptyRows > 0 && (
                <TableRow
                  style={{ height: 53 * emptyRows, border: "white" }}
                ></TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          page={page}
          count={submissions.length}
          rowsPerPage={rowsPerPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
        ></TablePagination>
      </Paper>
    </div>
  );
}
