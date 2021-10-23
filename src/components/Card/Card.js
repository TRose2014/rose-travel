import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';

export default function ActionAreaCard({data}) {
  return (
    <div style={{"display": "flex"}}>
      {data.map((item) => (
        <Box sx={{ flexGrow: 2 }} key={uuidv4()}>
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
      ))}
    </div>
  );
}
