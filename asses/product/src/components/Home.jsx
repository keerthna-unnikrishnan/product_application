import axios from 'axios'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import * as React from 'react';

const Home = () => {
    var[user,SetUser]=useState([])
    axios.get(" https://fakestoreapi.com/products")
    .then((response)=>{
        SetUser(response.data)
        console.log(response.data)
    })

  return (
    <div>
        <Grid container spacing={2} padding={2}>
         {user.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
 <Card> 
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.title}
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {product.description}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            Price: {product.price}
                        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
      ))}
      </Grid>
    </div>
  );
};

export default Home;