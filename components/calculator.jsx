// import React from 'react'
import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')

  const calculateAnswer = () => {
    if (Number(num1) && Number(num1)) {
      if (error) setError('')

      switch (operator) {
        case '+':
          setAnswer(Number(num1) + Number(num2))
          break
        case '-':
          setAnswer(Number(num1) - Number(num2))
          break
        case '*':
          setAnswer(Number(num1) * Number(num2))
          break
        case '/':
          setAnswer(Number(num1) / Number(num2))
          break
        default:
      }
    } else {
      setError('Enter a numeric in both boxes')
    }
  }

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <className input="num1" type="text" name="num1" onChange={event => setNum1(event.target.value)} />
      <select id="operator" onChange={event => setOperator(event.target.value)}>

        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input className="num2" type="text" name="num1" onChange={event => setNum2(event.target.value)} />
      <input className="calculateAnswer" type="button" value="=" onClick={calculateAnswer} />
      <input className="answer" type="text" name="answer" defaultValue={answer} />
      <div className="error">{error}</div>
    </div>

  )
}
