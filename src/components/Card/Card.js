import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import defaultImage from '../../assets/snacks-default.jpg';
import './Card.css';

export default function ItemCard(data) {
  const result = data.data ? data.data : data;
  const [expandedId, setExpandedId] = useState(-1);
  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <div className="cardGrid">
      {result.map((item, i) => (
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
              {/* <CardActions disableSpacing>
                <IconButton
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedId === i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    {item.description}
                  </Typography>
                </CardContent>
              </Collapse> */}
            </Card>
          </Grid>
        </Box>
      ))}
    </div>
  );
}
