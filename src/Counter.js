import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h4>Counter: {count}</h4>
            <button onClick={() => setCount(count + 1)}>➕</button>
            <button onClick={() =>
                counter > 0 ? setCount(count - 1) : counter == 0}>➖</button>
        </div>
    )
}

export default Counter