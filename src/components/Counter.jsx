import { useState, React } from 'react'

function Counter() {

    const [count, setcounter] = useState(0)
    function updateCount() { setcounter(count + 1) }

    return (
        <>
            <h1 className='text-center text-4xl mt-16'> {count} </h1>

            <div className="text-center mt-8">
                <button onClick={updateCount} className='tex-2xl text-red-500 py-2 px-4 text-center mx-auto border border-red-500 rounded-lg hover:bg-red-200 hover:text-black duration-200'  > Add </button>
            </div>

        </>
    )
}

export default Counter