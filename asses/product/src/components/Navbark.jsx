import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbark = () => {
  return (
    <div>
        <AppBar
         sx={{
            // background: 'rgb(2,0,36)',
//             // background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,116,1) 0%, rgba(214,255,147,1) 63%, rgba(0,212,255,1) 93%)'
//             background: 'rgb(174,153,204)',
// background: 'radial-gradient(circle, rgba(174,153,204,1) 34%, rgba(209,0,162,0.3477766106442577) 97%)'
// 
background:' rgb(175,223,11)',
background:' radial-gradient(circle, rgba(175,223,11,1) 0%, rgba(23,23,23,1) 100%, rgba(0,96,209,1) 100%)'
        }}
        >
                
        <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
        
          
          <Typography variant="h6">MY_App</Typography><hr/>
          <Link to="/home">
          <Button color="inherit"  style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            margin: '0 5px',
          }} >home</Button> 
          </Link>
          <Link to="/add">
          <Button color="secondary"  style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            margin: '0 5px',
          }} > Add Product</Button>
         </Link>
          
                    
                    
         </Toolbar>

        </AppBar>
   <br /><br /><br />


      
    </div>
  )
}

export default Navbark