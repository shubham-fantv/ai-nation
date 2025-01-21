import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import styles from './styles';

const LaunchApp = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Box sx={styles.wrapper}>
      <Box
        style={{
          background: isMobile
            ? 'none'
            : 'center/contain no-repeat url(/images/ai/launch-app-bg.png)',
        }}
        sx={styles.imageContainer}
      >
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Box sx={styles.content}>
            <Typography variant='h1' className='text-white font-bold text-6xl'>
              The home for every creator
            </Typography>
            <Typography
              variant='h5'
              className='text-white font-extrabold text-xl'
              sx={styles.noteTextStyles}
            >
              Start earning and owning new Agents now
            </Typography>
            <Button
              variant='contained'
              className='bg-white text-sm	 font-bold text-black px-4 py-2 text-lg  w-fit rounded-xl'
            >
              Launch App
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LaunchApp;
