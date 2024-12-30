/* eslint-disable @typescript-eslint/no-explicit-any */
/********************************************************************************* 
    Custom hook that dispatch an API action on component mount if 
    the cache is invalid, it is related to the Redux store
*********************************************************************************/

import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import { cacheInvalidationCheck } from "@/utils/apiHelpers";


const useStoreCacheApiCall = (
  action: any,
  lastFetch: number | null,
  cacheTime?: number,
  dependencyArray: Array<any> = []
) => {
  const dispatcher = useAppDispatch();

  useEffect(() => {    
    if (cacheInvalidationCheck(lastFetch, cacheTime)) {
      dispatcher(action());
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [dispatcher, ...dependencyArray]);
}

export default useStoreCacheApiCall

// we are not including action, lastFetch, cacheTime in the dependency array to avoid
// infinite loop of re-rendering as the references of these objects are changing 
// with every re-render of the component where this hook is used