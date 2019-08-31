import { useState } from 'react';

const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue);

    const setInputValue = event => {
        setValue(event.target.value || event.target.innerText);
    };

    return {
        value,
        onChange: setInputValue,
    };
};

export default useInputValue;