import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import './Card.css'

export default function RecipeReviewCard({data}) {
  return (
    <div className="cardContainer">
      {data.map((item) => (
        <Box sx={{ flexGrow: 2 }} key={uuidv4()}>
          <Grid container direction="row" justifyContent="space-around" alignItems="center">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title={item.name}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.imageurl}
                alt={item.name}
              />
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    {item.description}
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
        </Box>
      ))}
    </div>
  );
}
