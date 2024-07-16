import React, { useState, useEffect } from 'react';

interface StopwatchProps {
  isActive: boolean;
  onReset: () => void; // Callback to notify parent component when the stopwatch is reset
}

const Stopwatch: React.FC<StopwatchProps> = ({ isActive, onReset }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!);
      onReset(); // Notify parent component on reset
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds, onReset]);

  return (
    <div>
      <span>{new Date(seconds * 1000).toISOString().substr(11, 8)}</span>
    </div>
  );
};

export default Stopwatch;