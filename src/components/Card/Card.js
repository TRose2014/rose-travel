import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import './Card.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard({data}) {

  const [displayInfo, setdisplayInfo] = useState(false)

  const toggleClass = () => {
    setdisplayInfo(!displayInfo);
  };

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
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={displayInfo}
                    onClick={toggleClass}
                    aria-expanded={displayInfo}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={displayInfo} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Description:</Typography>
                    <Typography paragraph>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Collapse>
            </Card>
          </Grid>
        </Box>
      ))}
    </div>
  );
}
