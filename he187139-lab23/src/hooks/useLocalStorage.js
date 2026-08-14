import { useState, useEffect } from "react";
import { initialClasses } from "../data/Classes";

function useLocalStorage(key, initialValue) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialClasses;
    } catch (error) {
      return initialClasses;
    }
  });

  useEffect(() => {
    try {
        window.localStorage.setItem(key, JSON.stringify())
    } catch (error) {
        
    }
  })
}

export default useLocalStorage