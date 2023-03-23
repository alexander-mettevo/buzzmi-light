import React, {useEffect, useState} from 'react';

const Timer = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000); // decrement the timeLeft by 1 second

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) => {

    if (time < 0) return "00:00:00:00";

    const days = Math.floor(time / (24 * 60 * 60 * 1000));
    const hours = Math.floor((time / (60 * 60 * 1000)) % 24);
    const minutes = Math.floor((time / (60 * 1000)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return `${days.toString().padStart(2, "0")}:${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
      <p>{formatTime(timeLeft)}</p>
  );
};

export default Timer;