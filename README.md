# @jgordy24/react-hooks-lib

> &quot;A package of commonly used react hooks&quot;

[![NPM](https://img.shields.io/npm/v/@jgordy24/react-hooks-lib.svg)](https://www.npmjs.com/package/@jgordy24/react-hooks-lib) [![Build](https://github.com/JGordy/react-hooks-lib/actions/workflows/build-test.yml/badge.svg)](https://github.com/JGordy/react-hooks-lib/actions/workflows/build-test.yml) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jgordy24/react-hooks-lib
```

## Usage

### useHover

```jsx
import React from 'react';
import { useHover } from '@jgordy24/react-hooks-lib';

const App = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <button
        ref={hoverRef}
        style={{
          backgroundColor: isHovered ? '#424242' : '#121212',
          color: '#FFF',
        }}
      >
        My Button
      </button>
    </div>
  )
}
```

```jsx
more examples coming soon
```

## License

MIT © [JGordy](https://github.com/JGordy)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
