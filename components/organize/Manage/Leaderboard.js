import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    "&  .MuiDataGrid-root ": {
      backgroundColor: "#282C38",
      width: "100%",
    },
  },
  child: {
      "& .MuiDataGrid-selectedRowCount 	.MuiDataGrid-selectedRowCount": {
          color: "#fff"
      }
  },
  grid: {
    color: "#fff",
  },
}));

const rows = [
  { id: 1, col1: "Hello", col2: "World",col3: "dahdha" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome",col3: "dahdha" },
  { id: 3, col1: "Material-UI", col2: "is Amazing" ,col3: "dahdha"},
];

const columns = [
  { field: "col1", headerName: "Rank", width: 150, contenteditable:"true"},
  { field: "col2", headerName: "Name", width: 150 ,contenteditable:"true" },
  { field: "col3", headerName: "Score", width: 150,contenteditable:"true"},
];

function Leaderboard({data}) {
  const classes = useStyles();
  //const [rows,setRows] = useState(data.rows)
    //const [columns,setColumns] = useState(data.columns)
   // console.log(rows,columns)
  const updateTable = async () => {
    const res = await fetch(`/api/tournaments/${data._id}`, {
        method: "PATCH",
        body: JSON.stringify({leaderboard:[rowscolumns]}),
        headers: { "Content-Type": "application/json" },
      });
      const { data: result, error } = await res.json();
      console.log(result);
  }
  return (
    <div className={classes.root}>
      <DataGrid rows={rows} columns={columns} className={`${classes.grid} `} autoHeight />
      <button onClick={()=> updateTable()}>Save Changes</button>
    </div>
  );
}

export default Leaderboard;
