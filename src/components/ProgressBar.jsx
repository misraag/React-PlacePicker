import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [timeInterval, setTimeInterval] = useState(timer);

  //This will show a progress bar in the confirmation dialog.
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeInterval((prevTimeInterval) => prevTimeInterval - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={timeInterval} max={timer} />;
}
