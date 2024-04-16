import { Button } from '@mui/material'
import React, { useState } from 'react'


export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count > 0 ? "Counts" : "Count"}: {count}</h1>
            <Button variant='contained' onClick={() => setCount(count + 1)}>Increment</Button>
        </>
    )
}
