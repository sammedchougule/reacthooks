import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Useeffecthook() {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false); // State to manage accordion open/close

    // useEffect to update document title whenever count changes
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // Dependency array with `count`

    const toggleAccordion = () => {
        setIsOpen(!isOpen); // Toggle the accordion state
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className='mt-10 mb-10 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl'>
                <h1 className='text-2xl font-bold mb-4'>UseEffect Hook</h1>

                <h1 class='text-2xl font-semibold mb-4'>Counter: {count}</h1>
                <button class='bg-green-500 border rounded-md p-1 px-4' onClick={() => setCount(count + 1)}>Increment</button>


                {/* Accordion for explanation */}
                <div className="mt-4 w-full">
                    <button 
                        className="bg-blue-500 text-white rounded p-2 w-full flex items-center justify-center" 
                        onClick={toggleAccordion}
                    >
                        {isOpen ? 'Hide Explanation' : 'Show Explanation'}
                    </button>

                    <div className={`accordion-content ${isOpen ? 'open' : 'closed'}`}>
                        {isOpen && (
                            <div className="mt-2 p-4 bg-gray-200 rounded">
                                <h3 className="font-semibold">What is useEffect?</h3>
                                <p><strong>useEffect:</strong> is a built-in hook in React that allows you to perform side effects in functional components. Side effects can include data fetching, subscriptions, timers, manually changing the DOM, and more. It is called after the render and can also be used to clean up before the component unmounts.</p>
                                
                                <div className="flex justify-center">
                                    <img src="/images/img 4.png" alt="useEffect Example" className="mt-2 mb-4 rounded-md" />
                                </div>

                                <h4 className="font-semibold">State Initialization:</h4>
                                <ul className="list-disc ml-5">
                                    <li>useState(0) initializes the count variable at 0.</li>
                                </ul>

                                <p><strong>Effect Hook (useEffect):</strong></p>
                                <ul className="list-disc ml-5">
                                    <li>useEffect is called after every render, so we use it to set document.title.</li>
                                    <li>The dependency array [count] tells useEffect to only run when count changes.</li>
                                </ul>

                                <div className="flex justify-center">
                                    <img src="/images/img 5.png" alt="useEffect Example" className="mt-2 mb-4 rounded-md" />
                                </div>


                                <p><strong>Updating the Count:</strong></p>
                                <ul className="list-disc ml-5">
                                    <li>The button increments the count each time it’s clicked.</li>
                                    <li>Since count is in the dependency array, every time it changes, useEffect runs again, updating the document title.</li>
                                </ul>


                                <h4 className="font-semibold text-lg">Result</h4>
                                <p>As you click the button, the document’s title changes to reflect the updated count. This example shows how useEffect can react to changes in state and side effects, like updating the document title.</p>
                                

                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation button to UsestateHook */}
                <div className="mt-4">
                    <Link to="/usememo">
                        <button className='bg-purple-500 text-white rounded p-2'>Go to UseMemo Hook Example</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Useeffecthook;
