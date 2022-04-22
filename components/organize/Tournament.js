import React, { useCallback, useEffect, useState } from "react";
import PopUp from "./PopUp";
import Button from "@mui/material/Button";
import TournamentCards from "../common/TournamentCards";
import { debounce } from "@mui/material";
import axios from "axios";
import useDebouncedQuery from "../../hooks/useDebouncedQuery";

function Tournament({
  createUserTournament,
  handlePopup,
  showPopUp,
  data: initData,
}) {
  const fnToRunOnChange = useCallback(async (searchStr) => {
    const { data } = await axios.get(`/api/tournaments/search/${searchStr}`);
    return data;
  }, []);
  const { data, setSearchStrDebounced, searchStr } = useDebouncedQuery(
    fnToRunOnChange,
    2000
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-searchBarAndBtnColums auto-rows-searchBarAndBtnRowsSmall md:auto-rows-searchBarAndBtnRows gap-4 px-4">
        <div>
          <input
            className="bg-secondary px-1 md:px-4 w-full h-full"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchStrDebounced(e.target.value)}
          />
        </div>

        <Button
          onClick={() => handlePopup()}
          size="small"
          variant="contained"
          color="secondary"
        >
          Create Tournament
        </Button>
      </div>
      <TournamentCards
        data={searchStr === "" ? initData : data || []}
        baseRoute="organize"
      />
      {showPopUp ? (
        <>
          <PopUp
            closePopUp={handlePopup}
            createUserTournament={createUserTournament}
          />
          <div className="fixed opacity-60 bg-black inset-0 overflow-y-auto"></div>
        </>
      ) : null}
    </div>
  );
}

export default Tournament;
