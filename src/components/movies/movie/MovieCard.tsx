import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type CardProps = {
    title:string,
    overview: string,
    imgUrl: string,
    votes: number
}

const MovieCard: React.FC<CardProps> = ({ title, overview, imgUrl, votes }) => {

  return (
    <Card sx={{ maxWidth: 345 }} style={{minHeight:'350px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"  style={{fontSize:'clamp(16px,1.2vw,18px)'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ overflowY:'hidden', maxHeight:'80px' }}>
            {overview}
          </Typography>
          <p><strong>{votes}</strong></p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;