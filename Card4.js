import React, { useState } from "react";
function Card4() {
  const [time, setTime] = useState(now());
  function now() {
    return new Date().toLocaleTimeString();
  }
  function update() {
    setTime(now());
  }
  setInterval(update, 1000);

  return (

    <React.Fragment>
      <div>
        <h1>Time now:{time}</h1>
      </div>
    </React.Fragment>

  );
}

export default Card4;
