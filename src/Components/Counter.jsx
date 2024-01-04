import React, { useEffect, useState } from "react"
import "./Counter.css"
import { MDBBtn } from "mdb-react-ui-kit"

function Counter() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 })
  const [isCounting, setIsCounting] = useState(true)

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

  const handleToggle = () => {
    setIsCounting((prevIsCounting) => !prevIsCounting)
  }

  const handleReset = () => {
    setTime({ minutes: 0, seconds: 0 })
    setIsCounting(true)
  }

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
