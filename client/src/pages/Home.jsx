import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar/Sidebar'; 
import Feed from '../components/Feed/Feed';
import Widget from '../components/Novedades/widgets';

function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Feed />
      <Widget />
    </Box>
  );
}

export default Home;
