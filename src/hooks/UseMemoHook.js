import React from 'react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';

import { initialItems } from './utils';

function Usememohook() {

  const [isOpen, setIsOpen] = useState(false); // State to manage accordion open/close

  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items] // Only add 'items' to the dependency array if items are expected to change
  );


  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the accordion state
};


  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className='w-full max-w-4xl p-6 mt-10 mb-10 bg-white rounded-lg shadow-lg'>
                <h1 className='mb-4 text-2xl font-bold'>useMemo Hook</h1>

                <h1 class='text-2xl font-semibold mb-4'>Count: {count}</h1>
                <h1 class='text-xl font-semibold mb-4'>Selected Item: {selectedItem?.id}</h1>
                <button class='bg-green-500 border rounded-md p-1 px-4' onClick={() => setCount(count + 1)}>Increment</button>


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
                                <h3 className="font-semibold">What is useMemo?</h3>
                                <p> The purpose of <strong>useMemo</strong> is to memoize (cache) the result of a function so that it only recalculates when its dependencies change. This is particularly useful for expensive calculations or functions that might slow down your application if they run repeatedly without any need.</p>
                                
                                <div className="flex justify-center mt-6">
                                    <img src="/images/img 6.png" alt="useEffect Example" className="mt-2 mb-4 rounded-md" />
                                </div>

                                <h4 className="mt-6 font-semibold">Explanation:</h4>
                                <ul className="ml-5 list-disc">
                                    <h1 className="font-semibold"><strong>useMemo</strong> takes two arguments</h1>
                                    <li>A function that returns a computed value (() => items.find((item) => item.isSelected))</li>
                                    <li>A dependency array ([items]), which tells React when to re-run the function and recompute the memoized value.</li>
                                    <h1 className="font-semibold">In this case, it’s calculating selectedItem by looking for an item in items where item.isSelected is true.</h1>
                                </ul>

                                <h4 className="mt-6 font-semibold">Dependency Array [items]:</h4>
                                <ul className="ml-5 list-disc">
                                    <li>This array controls when the useMemo calculation should run.</li>
                                    <li><strong>useMemo</strong> will only recalculate selectedItem if items changes. If items remains the same, React will use the previously computed result, saving unnecessary calculations on each render.</li>
                                </ul>

                                <br />

                                <h4 className="mt-6 text-lg font-semibold">Why Use <strong>useMemo</strong> Here?</h4>
                                <p>If the items array were large or if the computation within useMemo was complex, running this function on every render could affect performance. By memoizing the calculation, React avoids recalculating selectedItem on each render unless items actually changes.</p>

                                <h4 className="mt-6 font-semibold">What Happens in the Component</h4>
                                <ul className="ml-5 list-disc">
                                    <li>When the component renders, useMemo will calculate selectedItem only if items has changed. Otherwise, it reuses the previous result.</li>
                                    <li>Since items is passed as a dependency, if it remains constant, useMemo will prevent recalculating selectedItem, making the component more efficient.</li>
                                </ul>
                                

                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation button to UsestateHook */}
                <div className="mt-4 space-x-4">

                    <Link to="/useeffect">
                        <button className='p-2 text-white bg-gray-400 rounded'>Back to UseState Hook</button>
                    </Link>

                    <Link to="/useeffect">
                        <button className='p-2 text-white bg-gray-700 rounded'>Next UseCallback Hook</button>
                    </Link>
                </div>

            </div>
        </div>
  )
}

export default Usememohook
