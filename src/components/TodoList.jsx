import React, { useState } from 'react'
import Input from './input'
import { Button } from '@mui/material'
import FolderList from './List'

export const TodoList = () => {
    const [title, setTitle] = useState('')
    const [array, setArray] = useState([])
    console.log(title)
    return (
      <>
        <Input type="text" placeholder="Enter title ..." value = {title} setValue={setTitle} />
        <Button variant="contained" onClick={() => {setArray([title, ...array]); setTitle(''); }}>Add</Button>
        <FolderList array={array} />
      </>
    )
}
