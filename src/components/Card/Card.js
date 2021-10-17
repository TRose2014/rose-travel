import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import data from '../../data.json';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function ActionAreaCard() {
  return (
    <div style={{"display": "flex"}}>
      {data.map((item) => (
        <>
          <Box sx={{ flexGrow: 2 }}>
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={item.imageurl}
                    alt={item.name}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Box>
        </>

      ))}
    </div>
  );
}
