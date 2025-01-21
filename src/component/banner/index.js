import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect, useRef } from 'react';
import styles from './styles';
import TextReveal from '../TextRevel';

const Banner = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div className='min-h-screen bg-gradient-to-r from-custom-gradient-start via-custom-gradient-middle to-custom-gradient-end  rounded-t-[48px] rounded-b-none'>
      <Box sx={{ ...styles.landingPage }} className='p-10'>
        <Container sx={styles.containerStyle} maxWidth={false}>
          <Box sx={styles.mainPage}>
            <Box sx={styles.middleSection}>
              <Box
                sx={styles.middleLeftSection}
                className='animate__animated animate__fadeInLeft animate__delay-0.3s'
              >
                <Box sx={{ display: 'block' }}>
                  {isMobile ? (
                    <>
                      <TextReveal delay={0.5}>
                        <Typography
                          variant='h1'
                          style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                          10 Mn{' '}
                        </Typography>
                        <Typography
                          variant='h1'
                          style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                          $fAN IN
                        </Typography>
                        <Typography
                          variant='h1'
                          style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                          Rewards{' '}
                        </Typography>
                      </TextReveal>
                    </>
                  ) : (
                    <>
                      <TextReveal delay={0.5}>
                        <Typography
                          variant='h1'
                          style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                          Nation state for AI
                        </Typography>
                      </TextReveal>
                      <TextReveal delay={0.8}>
                        <Typography
                          variant='h1'
                          style={{ fontFamily: 'Bricolage Grotesque' }}
                        >
                          AGents
                        </Typography>
                      </TextReveal>
                    </>
                  )}
                </Box>
                <Typography variant='h2' className=' mb-6'>
                  Discover, build and co-own AI agents
                </Typography>
                <Button
                  variant='contained'
                  className='bg-white text-sm	 font-bold text-black px-4 py-2 text-lg  w-fit rounded-xl'
                >
                  Launch App
                </Button>
              </Box>

              <Box sx={styles.middleRightSection}>
                <p>images</p>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Typography variant='h5' className='font-semibold text-center mb-6'>
        Featured Agents
      </Typography>
      <Box className='grid grid-cols-5 gap-6 pb-10 bg-gradient-to-t from-black'>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Box
              key={index}
              className='rounded-lg p-4 text-center hover:shadow-md transition duration-300 justify-start align-center'
            >
              <img
                src='/images/ai/mona.png'
                alt='Agent'
                className='rounded-md mb-4 mx-auto'
              />
              <Box className='flex flex-row justify-center align-center gap-2 text-center'>
                <Typography variant='body1' className='font-bold text-white'>
                  Mona AI
                </Typography>
                <Typography
                  variant='body2'
                  className='font-thin text-white mt-0.5'
                >
                  M cap. $513K
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </div>
  );
};

export default Banner;
