import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
        (
            <div>
                <h4>Counter: {count}</h4>
                <button onClick={() => setCount(count++)}>➕</button>
                <button onClick={() => setCount(count--)}>➖</button>
            </div>
        )
}

export default Counter