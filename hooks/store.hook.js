import { useEffect, useState } from "react";
export function useStore(initStoreState, deps = []) {
  const [state, setState] = useState(initStoreState.initial);
  const [computed, setComputed] = useState({});

  useEffect(() => {
    setComputed(
      Object.keys(initStoreState.computed).reduce((acc, computedKey) => {
        acc[computedKey] = initStoreState.computed[computedKey](state);
        return acc;
      }, {})
    );
  }, [state, ...deps]);

  return { state, computed, setState };
}
