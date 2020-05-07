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
  { ID: 10, Benchmark: 3213131 }
];

export default function UserSubmissions() {
  const [sortingOrder, setSortingOrder] = React.useState("asc");
  const [sortingColumn, setSortingColumn] = React.useState("Created");
  
  const [selected, setSelected] = React.useState([]);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

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
      const newSelected = data.map((n) => n["ID"]);
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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                   checked={data.length > 0 && selected.length === data.length}
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
              {data
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
          count={data.length}
          rowsPerPage={rowsPerPage}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
        ></TablePagination>
      </Paper>
    </div>
  );
}
