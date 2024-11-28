import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  debugger;
  let proceedToExcute = true;
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    proceedToExcute = false;
    const timer = setTimeout(() => {
      console.debug(value);
      setDebouncedValue(value);
      proceedToExcute = true;
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
