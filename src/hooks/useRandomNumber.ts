import { useState, useEffect } from "react";

function useRandomNumber(containerSize: number): [number[], number] {
  const [numbers, setNumbers] = useState([
    Math.random() * containerSize,
    Math.random() * containerSize,
  ]);
  const [intervalLength, setIntervalLength] = useState(0);

  useEffect(() => {
    const interval = Math.random() * 2500 + 500;
    setIntervalLength(interval / 1000); // convert ms to seconds
    const intervalId = setInterval(() => {
      setNumbers([
        Math.random() * containerSize,
        Math.random() * containerSize,
      ]);
    }, interval);
    return () => clearInterval(intervalId);
  }, [containerSize]);

  return [numbers, intervalLength];
}

export default useRandomNumber;
