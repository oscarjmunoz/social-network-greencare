import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  CardActions,
  Box,
} from '@mui/material';
import {
  Comment as CommentIcon,
  Repeat as RepeatIcon,
  Favorite as FavoriteIcon,
  Delete as DeleteIcon,
  Bookmark as BookmarkIcon,
} from '@mui/icons-material';

const FeedItem = () => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src="../../assets/perfil1.png" alt="User Avatar" />}
        title="Username"
        subheader="2h ago" // Puedes usar una librería como `date-fns` para formatear la fecha
      />
      <CardContent>
        <Typography variant="body1">
          Contenido del comentario. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <CommentIcon />
          <Typography>10</Typography>
        </IconButton>
        <IconButton>
          <RepeatIcon />
          <Typography>20</Typography>
        </IconButton>
        <IconButton>
          <FavoriteIcon />
          <Typography>30</Typography>
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const FeedItemBox = () => {
  return (
    <Box sx={{ display: 'flex', width:'100%' , maxWidth: 600, margin: '30px auto' }}>
      <FeedItem />
    </Box>
  );
};

export default FeedItemBox;
