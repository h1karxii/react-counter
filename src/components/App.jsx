import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from 'styles/globalStyles'
import { ReactComponent as Logo } from 'assets/logo.svg'

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
      animation: ${(props) =>
          props.isClockwise ? 'clockwise' : 'counterclockwise'}
        infinite 20s linear;
    }
  }

  .app__button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: 800;
    color: #282c34;
  }

  @keyframes clockwise {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes counterclockwise {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(-360deg);
    }
  }
`

function App() {
  const [isClockwise, setIsClockwise] = useState(true)

  return (
    <Styles isClockwise={isClockwise}>
      <GlobalStyle whiteColor={isClockwise} />
      <Logo className="app__logo app__logo--spin" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button
        type="button"
        className="app__button"
        onClick={() => {
          setIsClockwise(!isClockwise)
        }}
      >
        Turn around
      </button>
    </Styles>
  )
}

export default App
