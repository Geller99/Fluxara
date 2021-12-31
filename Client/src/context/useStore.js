import { useState } from "react";


export const useStore = () => {
    const [storeData, setStoreData] = useState({});
  
    return { storeData, setStoreData }
  }