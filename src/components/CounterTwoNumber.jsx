import { useCallback, useMemo, useState } from "react";

export const CounterTwoNumber = () => {
    const [a, setA] = useState (0);
    const [b, setB] = useState (0);
    
    const resultDirect = a + b;

    const result = useMemo (() => {
        return a + b;
    }, [a, b]);

    const handleIncrementA = useCallback(() => {
        setA ( a + 1)
    }, [a])
    const handleIncrementB = useCallback(() => {
        setB ( b + 1)
    }, [b])

    return <div>
        <h2>Counter Two Number</h2>
        <p>A: {a}, B: {b}, Result Memo: {result}, Result Direct: {resultDirect}</p>
        <button onClick={handleIncrementA}>Increment A</button>
        <button onClick={handleIncrementB}>Increment B</button>
    </div>
}