import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import InputField from 'components/InputField'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { incrementStart, decrementStart } from 'reduxs/counter/counterRedux'

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: #fff;
  text-align: center;

  .app__logo {
    height: 40vmin;
    pointer-events: none;

    &--spin {
      animation: spin infinite ${(props) => props.speed}s linear;
    }
  }

  .app__button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 50px;

    button {
      width: 100px;
      height: 100px;
      font-size: 40px;
      font-weight: 800;
      color: #282c34;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

function CounterContainer() {
  const dispatch = useDispatch()
  const number = useSelector((store) => store.counter.number)
  const speed = (100 / Math.max(Math.min(100, number), 1)) * 0.5

  return (
    <Styles speed={speed}>
      <Logo className="app__logo app__logo--spin" alt="logo" />
      <p>
        Your speed : <code>{number}</code>
        <br />
        {number > 100 && 'highest speed'}
        {number < 1 && 'lowest speed'}
      </p>
      <div className="app__button">
        <button type="button" onClick={() => dispatch(incrementStart(10))}>
          ＋
        </button>
        <button type="button" onClick={() => dispatch(decrementStart(20))}>
          －
        </button>
      </div>
      <InputField />
    </Styles>
  )
}

export default CounterContainer
