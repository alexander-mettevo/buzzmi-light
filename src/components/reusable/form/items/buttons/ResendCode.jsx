import {useEffect, useState} from "react";

const ResendCode = ({handleResendCode}) => {
  const [time, setTime] = useState(5)
  const [intervalState, setIntervalState] = useState(null)

  const startTimer = () => {
    const timer = setInterval(() => {
      setTime(prev => prev - 1)
    }, 1000)

    setIntervalState(timer)

    return timer
  }

  useEffect(() => {
    const timer = startTimer()
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (time === 0 && intervalState) {
      clearInterval(intervalState)
    }
  }, [time])
  const handleClick = () => {
    setTime(5)
    startTimer()
    handleResendCode()
  }


  return (
    <button
      className='h6 text-primary text-b content-auth__resend-code'
      onClick={handleClick}
      disabled={time !== 0}
    >
      {time !== 0 ? `You will be able to resend the code after  (${time}) seconds` : 'Resend code'}
    </button>
  )
}

export default ResendCode