import { useApi } from "@/hooks/api.hook";
import { useStore } from "@/hooks/store.hook";
import _sortBy from "lodash/sortBy";

import { useEffect, useState } from "react";

const FILTER = {
  meal_name(listItem, filterValue) {
    return listItem.meal_name.toLowerCase().includes(filterValue.toLowerCase());
  },
};

const useSearchResultsStore = () => {
  const { data, isFetched, isLoading, hasData, call, apiState } = useApi({
    url: "/api/meals",
    defaultData: [],
  });

  const filtered = useStore(
    {
      initial: {},
      computed: {
        filteredList: (state) => {
          return [
            ...data.filter((listItem) =>
              Object.keys(state).every((key) =>
                FILTER[key](listItem, state[key])
              )
            ),
          ];
        },
      },
    },
    [apiState]
  );

  const sorted = useStore(
    {
      initial: false,
      computed: {
        sortedList: (state) => {
          return state
            ? _sortBy(filtered.computed.filteredList, ["final_price"])
            : filtered.computed.filteredList || [];
        },
      },
    },
    [apiState, filtered.state, filtered.computed.filteredList]
  );

  return {
    data,
    isFetched,
    isLoading,
    hasData,
    call,
    filtersState: filtered.state,
    setFilters: filtered.setState,
    filteredList: filtered.computed.filteredList,
    filteredSortedList: sorted.computed.sortedList,
    sortState: sorted.state,
    setSorting: sorted.setState,
  };
};

export default useSearchResultsStore;
