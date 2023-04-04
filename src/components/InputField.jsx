import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { setCounter } from 'reduxs/counter/counterRedux'

const Styles = styled.div``

function InputField() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const handleChange = useCallback((event) => {
    const inputValue = Math.max(Math.min(100, event.target.value))
    setText(inputValue)
  }, [])
  const onButtonClick = useCallback(() => {
    dispatch(setCounter(text))
  }, [dispatch, text])

  return (
    <Styles>
      <input type="number" value={text} onChange={handleChange} />
      <button type="button" onClick={onButtonClick}>
        set speed
      </button>
    </Styles>
  )
}

export default InputField
