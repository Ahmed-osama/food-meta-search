import { useState, useCallback } from "react";
import { useStore } from "./store.hook";
import _isEmpty from "lodash/isEmpty";
import axios from "axios";
const API_STATE = {
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};
export function useApi({ url, defaultData }) {
  const [error, setError] = useState(null);
  //Data Observable
  const dataStore = useStore({
    initial: defaultData,
    computed: {
      hasData: (data) => !_isEmpty(data) && data !== null,
    },
  });
  // Api Observable
  const apiStore = useStore({
    initial: API_STATE.INITIAL,
    computed: {
      isLoading: (state) => state === API_STATE.LOADING,
      isFetched: (state) => state === API_STATE.SUCCESS,
      isFailed: (state) => state === API_STATE.FAILED,
    },
  });

  // Call api Action
  const call = useCallback(() => {
    apiStore.setState(API_STATE.LOADING);
    axios
      .get(url)
      .then((data) => {
        dataStore.setState(data);
        apiStore.setState(API_STATE.SUCCESS);
      })
      .catch((err) => {
        setError(err);
        apiStore.setState(API_STATE.FAILED);
      });
  });

  return {
    data: dataStore.state,
    ...apiStore.computed,
    ...dataStore.computed,
    call,
  };
}
