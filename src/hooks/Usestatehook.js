import React, { useState } from 'react';

function Usestatehook() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>UseState Hook</h1>
            <h1>Count: {count}</h1> {/* Corrected spelling here */}

            <div >
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    );
}

export default Usestatehook;
