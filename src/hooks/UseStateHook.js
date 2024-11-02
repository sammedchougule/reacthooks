import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Usestatehook() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false); // State to manage accordion open/close

    const handleIncrement = () => {
        setCount(count + 1);
        setMessage('You have incremented the number by adding 1.');
    };

    const handleDecrement = () => {
        setCount(count - 1);
        setMessage('You have decremented the number by subtracting 1.');
    };

    const toggleAccordion = () => {
        setIsOpen(!isOpen); // Toggle the accordion state
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className='w-full max-w-4xl p-6 mt-10 mb-10 bg-white rounded-lg shadow-lg'>
                <h1 className='mb-4 text-2xl font-bold'>UseState Hook</h1>
                <h1 className='mb-4 text-2xl font-semibold'>Count: {count}</h1>

                <div className='flex items-center justify-center mb-6 space-x-4'>
                    <button className='p-1 px-4 bg-green-500 border rounded-md' onClick={handleIncrement}>Increment</button>
                    <button className='p-1 px-4 bg-red-500 border rounded-md' onClick={handleDecrement}>Decrement</button>
                </div>

                <h2 className="text-lg">{message}</h2>

                {/* Accordion for explanation */}
                <div className="w-full mt-4">
                    <button 
                        className="flex items-center justify-center w-full p-2 text-white bg-blue-500 rounded" 
                        onClick={toggleAccordion}
                    >
                        {isOpen ? 'Hide Explanation' : 'Show Explanation'}
                    </button>

                    <div className={`accordion-content ${isOpen ? 'open' : 'closed'}`}>
                        {isOpen && (
                            <div className="p-4 mt-2 bg-gray-200 rounded">
                                <h3 className="mt-6 font-semibold">What is useState?</h3>
                                <p><strong>State Management:</strong> In React, state refers to a data structure that holds information about the component's current situation. When state changes, React re-renders the component to reflect those changes. useState allows you to create and manage state within functional components.</p>
                                
                                <h4 className="mt-6 font-semibold">Key Features of useState</h4>
                                <p><strong>Initialization:</strong> You can initialize state with a default value when you call useState. For example:</p>

                                <div className="flex justify-center mt-6">
                                    <img src="/images/img 1.png" alt="useState Initialization Example" className="mt-2 mb-4 rounded-md" />
                                </div>

                                <p className='mt-6'>In this example, <code>count</code> is the state variable initialized to 0, and <code>setCount</code> is a function that you can call to update the value of count.</p>

                                <p className='mt-6'><strong>State Update:</strong> To update the state, you call the updater function (e.g., <code>setCount</code>). React will then re-render the component with the new state value.</p>

                                <div className="flex justify-center mt-6">
                                    <img src="/images/img 2.png" alt="useState Update Example" class="mt-2 mb-4 rounded-md" />
                                </div>
                                
                                <p className='mt-6'><strong>Preserving State Across Renders:</strong> The state created with useState persists between re-renders of the component. This means that when the component re-renders, the state value remains intact unless explicitly changed.</p>

                                <p className='mt-6'><strong>Multiple State Variables:</strong> You can use useState multiple times in the same component to manage different pieces of state:</p>

                                <div className="flex justify-center mt-6">
                                    <img src="/images/img 3.png" alt="useState Multiple Variables Example" class="mt-2 mb-4 rounded-md" />
                                </div>

                                <h4 className="mt-6 font-semibold">Example Use Cases</h4>
                                <ul className="ml-5 list-disc">
                                    <li>Form Inputs: Managing the value of input fields in forms.</li>
                                    <li>Counters: Keeping track of numbers, such as increments and decrements.</li>
                                    <li>Toggle States: Managing boolean values for toggling elements (e.g., showing/hiding a modal).</li>
                                    <li>Dynamic Lists: Keeping track of items in an array and allowing for additions/removals.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    
                </div>

                {/* Navigation button to UseEffectHook */}
                <div className="mt-4">
                    <Link to="/useeffect">
                        <button className='p-2 text-white bg-gray-700 rounded'>Next UseEffect Hook</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Usestatehook;
