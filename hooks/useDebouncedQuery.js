import { debounce } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

export default function useDebouncedQuery(fnToRunOnChange, debounceInterval) {
  const [searchStr, setSearchStr] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      if (searchStr === "") {
        return;
      }
      const data = await fnToRunOnChange(searchStr);
      setData(data);
    })();
  }, [searchStr, fnToRunOnChange]);

  const debouncedFn = debounce((str) => setSearchStr(str), debounceInterval);

  const setSearchStrDebounced = useCallback(
    (str) => debouncedFn(str),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    data,
    searchStr,
    setSearchStrDebounced,
  };
}
