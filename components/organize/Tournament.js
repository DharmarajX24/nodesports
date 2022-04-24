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
      <div className="grid sm:grid-cols-[1fr,max-content] auto-rows-[2.25em] md:auto-rows-[4em] gap-4 px-4">
        <div>
          <input
            className="w-full h-full px-1 bg-secondary md:px-4"
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
          <div className="fixed inset-0 overflow-y-auto bg-black opacity-60"></div>
        </>
      ) : null}
    </div>
  );
}

export default Tournament;
