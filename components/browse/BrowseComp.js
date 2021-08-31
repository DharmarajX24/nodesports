import axios from "axios";
import React, { useCallback } from "react";
import useDebouncedQuery from "../../hooks/useDebouncedQuery";
import TournamentCards from "../common/TournamentCards";

function BrowseComp({ data: initData }) {
  const isTournamentExist = initData.length;
  const fnToRunOnChange = useCallback(async (searchStr) => {
    const { data } = await axios.get(
      `/api/tournaments/unAuthSearch/${searchStr}`
    );
    return data;
  }, []);
  const { data, setSearchStrDebounced, searchStr } = useDebouncedQuery(
    fnToRunOnChange,
    3000
  );
  return (
    <div className="max-w-6xl mx-auto p-2 md:p-6">
      {isTournamentExist ? (
        <div>
          <div className="px:1 md:px-4 h-9">
            <input
              className="bg-secondary w-full h-full px-4 py-8"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchStrDebounced(e.target.value)}
            />
          </div>

          <div className="mt-8">
            <TournamentCards
              data={searchStr === "" ? initData : data || []}
              baseRoute="browse"
            />
          </div>
        </div>
      ) : (
        <div className="text-3xl text-center p-10">
          There are no Active tournaments going on
        </div>
      )}
    </div>
  );
}

export default BrowseComp;
