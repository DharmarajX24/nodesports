import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    "&  .MuiDataGrid-root ": {
      backgroundColor: "#282C38",
      width: "100%",
    },
  },
  child: {
    "& .MuiDataGrid-selectedRowCount 	.MuiDataGrid-selectedRowCount": {
      color: "#fff",
    },
  },
  grid: {
    color: "#fff",
  },
}));

const rows = [
  { id: 1, col1: "Hello", col2: "World", col3: "dahdha" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "dahdha" },
  { id: 3, col1: "Material-UI", col2: "is Amazing", col3: "dahdha" },
];

const columns = [
  { field: "col1", headerName: "Rank", width: 150 },
  { field: "col2", headerName: "Name", width: 150 },
  { field: "col3", headerName: "Score", width: 150, editable: true },
];

function Leaderboard({ data }) {
  const classes = useStyles();
  const [rows, setRows] = useState(data.rows);

  const updateTable = async () => {
    const res = await fetch(`/api/tournaments/${data._id}`, {
      method: "PATCH",
      body: JSON.stringify({ rows }),
      headers: { "Content-Type": "application/json" },
    });
    const { data: result, error } = await res.json();
    console.log(result);
  };
  console.log(rows);

  return (
    <div className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        className={`${classes.grid} `}
        autoHeight
        hideFooter
      />
      <div className="my-2 sm:my-4 text-right">
        <Button
          onClick={() => updateTable()}
          variant="contained"
          color="secondary"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default Leaderboard;
