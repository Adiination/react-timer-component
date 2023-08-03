import React, { useEffect, useState } from "react";

const Timer = ({ time, direction, end }) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    let intervalId;
    if (direction === "clockwise") {
      setRemainingTime(0);
      intervalId = setInterval(() => {
        setHasStarted(true);
        setRemainingTime((prevTime) =>
          prevTime + 1 > time ? time : prevTime + 1
        );
      }, 1000);
    } else if (direction === "anticlockwise") {
      setRemainingTime(time);
      intervalId = setInterval(() => {
        setHasStarted(true);
        setRemainingTime((prevTime) => (prevTime - 1 < 0 ? 0 : prevTime - 1));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [direction, time]);
  useEffect(() => {
    if (hasStarted && (remainingTime === time || remainingTime === 0)) {
      end();
    }
  }, [remainingTime, time, end, hasStarted]);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsLeft
      .toString()
      .padStart(2, "0")}`;
  };
  return <div>{formatTime(remainingTime)}</div>;
};

export default Timer;
