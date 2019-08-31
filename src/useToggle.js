import {
    useState,
    useCallback,
} from 'react';

const useToggle = initial => {
    const [enabled, setEnabled] = useState(initial);

    const toggleValue = useCallback(() => setEnabled(status => !status));

    return [enabled, toggleValue];
}

export default useToggle;