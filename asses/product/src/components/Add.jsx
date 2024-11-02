import { Button, TextField } from '@mui/material'
import React from 'react'
import './Add.css'
const Add = () => {
  return (
    <div className='signup'>
    <h1 className="signup-header">Add product</h1>
    
    <TextField id='name'    label="Product name" variant="filled" /> <br /> <br />
    <TextField id='name'   label="Description" variant="filled" /><br /> <br />
    <TextField id='name'   label="Price" variant="filled" /><br /> <br />
    <TextField id='name'   label="Category" variant="filled" /><br /><br />
    <Button type="submit" className="signup-button"  style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            margin: '0 5px',
          }}>Add </Button>
    
</div>
  )
}

export default Add