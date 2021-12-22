import React, { useState, useEffect } from "react";

const DateTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{time.toLocaleString()}</h1>
    </div>
  );
};

export default DateTimeClock;
