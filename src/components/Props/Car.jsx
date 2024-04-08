import { useState, React } from 'react'

const Car = ({ TypeName, color, customClass }) => {
    const [carName, SetCarName] = useState(TypeName)

    return (

        <>
            <div className="text-center py-20">
                <h2 className='text-4xl'> Hi, I am a Car.</h2>
                <input className='border px-4 py-3 my-6 rounded-lg' type="text" placeholder="Enter the car's name" onChange={(e) => SetCarName(e.target.value)} />
                <p className='text-pink-500 text-2xl'>My car name is {carName}</p>
                <p className={`text-3xl ${customClass}`}>My car color is {color}</p>

            </div>
        </>
    )
}

export default Car;