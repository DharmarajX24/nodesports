import React, { useState, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const rows = [
  { id: 1, col1: "Hello", col2: "World", col3: "dahdha" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "dahdha" },
  { id: 3, col1: "Material-UI", col2: "is Amazing", col3: "dahdha" },
];

const columns = [
  { field: "col1", headerName: "Rank", width: 150 },
  { field: "col2", headerName: "Name", width: 150 },
  {
    field: "col3",
    headerName: "Score",
    width: 150,
    editable: true,
    type: "number",
  },
];

function Leaderboard({ data }) {
  const [rows, setRows] = useState(data.rows);

  const [editRowsModel, setEditRowsModel] = useState({});
  const handleEditRowsModelChange = useCallback(
    (model) => {
      setEditRowsModel(model);
      let indexVal = null;
      const id = Object.keys(model)[0];
      const index = rows.some((e, i) => {
        if (e.id === id) {
          indexVal = i;
        }
      });
      let getRows = rows;
      getRows[indexVal].col3 = model[id].col3.value;
      setRows(getRows);
    },
    [rows]
  );
  if (!rows)
    return <div>Leadearboard will enable once there are participants</div>;
  const updateTable = async () => {
    const res = await fetch(`/api/tournaments/${data._id}`, {
      method: "PATCH",
      body: JSON.stringify({ rows }),
      headers: { "Content-Type": "application/json" },
    });
    const { data: result, error } = await res.json();
  };

  return (
    <Box sx={{ background: "#282C38", width: "100%" }}>
      <DataGrid
        sx={{ color: "white" }}
        rows={rows}
        columns={columns}
        autoHeight
        hideFooter
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
      />
      <div className="my-2 text-right sm:my-4">
        <Button
          onClick={() => updateTable()}
          variant="contained"
          color="secondary"
        >
          Save Changes
        </Button>
      </div>
    </Box>
  );
}

export default Leaderboard;
