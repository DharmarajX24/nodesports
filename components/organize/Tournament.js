import React, { useCallback, useEffect, useState } from "react";
import PopUp from "./PopUp";
import Button from "@material-ui/core/Button";
import TournamentCards from "../common/TournamentCards";
import { debounce } from "@material-ui/core";
import axios from "axios";

function Tournament({ createUserTournament, handlePopup, showPopUp, data: initData }) {
  const [searchStr, setSearchStr] = useState("")
  const [data, setData] = useState([])

  // search when searchStr is set
  useEffect(() => {
    (async () => {
      if(searchStr === "") {
        return;
      }
      const {data} = await axios.get(`/api/tournaments/search/${searchStr}`)
      setData(data)
    })()
  }, [searchStr])

  const setSearchStrDebounced = useCallback((str) => {
    debounce(() => {
      setSearchStr(str), 2000
    })()
  }, [])
  

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
      <TournamentCards data={searchStr === "" ? initData : data} baseRoute="organize" />
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
