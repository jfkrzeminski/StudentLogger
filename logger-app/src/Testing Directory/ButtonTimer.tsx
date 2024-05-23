import React, { useState, useEffect } from 'react';
import './ButtonWithTimer.css'; // Import custom CSS for additional styling

const ButtonWithTimer: React.FC = () => {
  const [isToggledOn, setIsToggledOn] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isToggledOn && startTime !== null) {
      timer = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isToggledOn, startTime]);

  const handleButtonClick = () => {
    if (isToggledOn) {
      setIsToggledOn(false);
      setElapsedTime(0); // Reset elapsed time when toggled off
    } else {
      setIsToggledOn(true);
      setStartTime(Date.now());
    }
  };

  return (
    <div className="text-center mt-5">
      <button
        onClick={handleButtonClick}
        className={`btn btn-lg education-button ${isToggledOn ? 'btn-danger' : 'btn-primary'}`}
      >
        {isToggledOn ? 'Stop' : 'Start'}
      </button>
      {isToggledOn && <p className="mt-3">Time toggled on: {Math.floor(elapsedTime / 1000)} seconds</p>}
    </div>
  );
};

export default ButtonWithTimer;

