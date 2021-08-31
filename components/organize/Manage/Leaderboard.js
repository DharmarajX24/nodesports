import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    "&  .MuiDataGrid-root": {
      backgroundColor: "#282C38",
      width: "100%",
    },
  },
  grid: {
    color: "#fff",
  },
}));

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "Material-UI", col2: "is Amazing" },
];

const columns = [
  { field: "col1", headerName: "Name", width: 150 },
  { field: "col2", headerName: "Score", width: 150 },
  { field: "col3", headerName: "Rank", width: 150 },
];

function Leaderboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DataGrid rows={rows} columns={columns} className={classes.grid} />
    </div>
  );
}

export default Leaderboard;
