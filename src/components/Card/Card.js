import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import defaultImage from '../../assets/snacks-default.jpg';
import './Card.css';

export default function ItemCard(data) {
  const result = data.data ? data.data : data;

  return (
    <div className="cardGrid">
      {result.map((item) => (
        <Box sx={{ flexGrow: 2 }} key={uuidv4()}>
          <Grid container direction="row" justifyContent="space-around" alignItems="center">
            <Card sx={{ maxWidth: 345 }} className="cardContainer">
              <CardHeader
                title={item.name}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.imageurl ? item.imageurl : defaultImage}
                alt={item.name}
              />
            </Card>
          </Grid>
        </Box>
      ))}
    </div>
  );
}
