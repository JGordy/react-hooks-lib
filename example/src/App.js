import React from 'react';
import {
  useDarkMode,
  useHover,
  useScript,
  useWhyDidYouUpdate,
} from '@jgordy24/react-hooks-lib';

const buttonStyles = {
  boxShadow: '5px 5px 5px rgba(0,0,0,0.3)',
  padding: '0.5rem',
  borderRadius: '5px',
};

const App = (props) => {
  const [hoverRef, isHovered] = useHover();
  const [darkMode, setDarkMode] = useDarkMode();
  const [loaded, error] = useScript(
    'https://pm28k14qlj.codesandbox.io/test-external-script.js'
  );

  useWhyDidYouUpdate('App', props);

  return (
    <div>
      <button
        ref={hoverRef}
        onClick={() => setDarkMode(!darkMode)}
        style={{
          ...buttonStyles,
          backgroundColor: darkMode ? '#FFF' : isHovered ? '#424242' : '#121212',
          color: darkMode ? '#121212' : '#FFF',
        }}
      >
        Set {darkMode ? 'light' : 'dark'} theme
      </button>
      <div>
        Script loaded: <b>{loaded.toString()}</b>
      </div>
      <div>
        Script error: <b>{error.toString()}</b>
      </div>
      {/* TODO: this is not working. I think setting a setTimeout might fix the timing issue?
        loaded && !error && (
        <div>
          Script function call response: <b>{TEST_SCRIPT.start()}</b>
        </div>
      )*/}


    </div>
  )
}
export default App