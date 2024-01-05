import React, { useEffect, useState } from "react"
import "./Counter.css"
import { MDBBtn } from "mdb-react-ui-kit"

function Counter() {

  // time is a state variable that represents the current time in minutes and seconds.
  // isCounting is a state variable that determines whether the timer is currently counting or paused.

  const [time, setTime] = useState({ minutes: 0, seconds: 0 })
  const [isCounting, setIsCounting] = useState(true)

  // The useEffect hook is used to handle the timer logic. It runs when the component mounts and whenever isCounting changes.
  // Inside the setInterval function, the setTime function is called with the previous time (prevTime) to update the time state.
  // If prevTime.seconds is 59, it means the next second will make it 60. In this case, 
  //we increment the minutes and reset seconds to 0. Otherwise, we increment seconds normally.


  // (prevTime.seconds + 1): This part increments the current value of seconds by 1, representing the next second in the timer.
  // % 60: This part uses the modulo operator (%) to ensure that the value of seconds stays within the range of 0 to 59. When the 
  //incremented value reaches 60, taking the modulo by 60 results in 0, effectively resetting the seconds to zero and indicating the start of a new minute.
  // If prevTime.seconds is 0, (0 + 1) % 60 is 1.
  //If prevTime.seconds is 59, (59 + 1) % 60 is 0.

  useEffect(() => {
    let interval

    if (isCounting) {
      interval = setInterval(() => {
        setTime((prevTime) => ({
          minutes: prevTime.seconds === 59 ? prevTime.minutes + 1 : prevTime.minutes,
          seconds: (prevTime.seconds + 1) % 60,
        }))
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isCounting])


  // handleToggle toggles the value of isCounting, either pausing or resuming the timer.

  const handleToggle = () => {
    setIsCounting((prevIsCounting) => !prevIsCounting)
  }

    // handleReset resets both time and isCounting to their initial states.

  const handleReset = () => {
    setTime({ minutes: 0, seconds: 0 })
    setIsCounting(true)
  }

  // formatTime takes a timeObject (with minutes and seconds properties) and formats it as a string in the format MM:SS.

  // String(timeObject.minutes).padStart(2, '0'): Converts the minutes property of timeObject to a string and 
  // pads it with leading zeros if it's less than 2 characters. This ensures that the minutes part always has at least two digits.
  // Adds a colon (:) to separate the minutes and seconds parts of the time.

  const formatTime = (timeObject) => {
    return `${String(timeObject.minutes).padStart(2, "0")}:${String(timeObject.seconds).padStart(2, "0")}`
  }

  return (
    <div className="container">
      <div className="main-box">
        <h2>AUTOMATIC COUNTER APPLICATION</h2>
        <h1>{formatTime(time)}</h1>
        <div className="button">
          <MDBBtn className="me-1" color="danger" onClick={handleToggle}>
            {isCounting ? "Pause" : "Resume"}
          </MDBBtn>
          <MDBBtn className="me-1" color="warning" onClick={handleReset}>
            RESET
          </MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default Counter
