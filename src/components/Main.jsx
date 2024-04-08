import React from 'react'
// import Counter from './Counter'
import Car from './Props/Car'

function Main(props) {
    return (
        <>
            {/* <Counter /> */}
            <Car TypeName="xyz" color="red" customClass="text-green-500" />
        </>

    )
}

export default Main