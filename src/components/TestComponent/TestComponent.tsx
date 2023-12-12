import React, { useCallback } from 'react';

const TestComponent = () => {
    const onBtnClick = useCallback(() => {
        console.log('onBtnClick');
    }, []);
    return <button onClick={onBtnClick}>Test button</button>;
};

export default TestComponent;
