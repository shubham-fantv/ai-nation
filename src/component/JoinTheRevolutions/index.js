import { Box, Typography, useMediaQuery, IconButton } from '@mui/material';
import React, { useState } from 'react';
import styles from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { display } from '@mui/system';

const JoinTheRevolutions = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [currentPage, setCurrentPage] = useState(0);

  const carouselData = [
    {
      title: '2024 Q1',
      items: [
        'Creator Tipping',
        'Live Streaming Launch',
        'Engagement Points',
        'Content Nodes - Testnet',
        'Game Zone',
      ],
    },
    {
      title: '2024 Q2',
      items: [
        'Mobile App Launch',
        'NFT Marketplace',
        'Community Governance',
        'Token Launch',
        'Creator Dashboard',
      ],
    },
    {
      title: '2024 Q3',
      items: [
        'DeFi Integration',
        'Cross-chain Bridge',
        'Social Features',
        'Content Mining',
        'Staking Platform',
      ],
    },
    {
      title: '2024 Q4',
      items: [
        'DeFi Integration',
        'Cross-chain Bridge',
        'Social Features',
        'Content Mining',
        'Staking Platform',
      ],
    },
  ];

  console.log(carouselData.length - 1, 'carouselData.length - 1');
  const handleNext = () => {
    if (currentPage !== carouselData.length - 1) {
      setCurrentPage((prev) => (prev + 1) % carouselData.length);
    }
  };

  const handlePrev = () => {
    if (currentPage !== 0) {
      setCurrentPage(
        (prev) => (prev - 1 + carouselData.length) % carouselData.length
      );
    }
  };

  const progressPercentage = ((currentPage + 1) / carouselData.length) * 100;

  return (
    <Box>
      <Typography sx={styles.title} variant='h1'>
        Join the revolution
      </Typography>

      <Box sx={styles.wrapper}>
        <Box
          style={{
            background: isMobile
              ? 'none'
              : 'center/contain no-repeat url(/images/tokenPoolBg.png)',
            backgroundSize: 'cover',
          }}
          sx={styles.imageContainer}
        >
          <Box
            sx={{
              textAlign: 'center',
              width: isMobile ? '100%' : '400px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <Box sx={styles.topLeftPadding}>
              <Typography variant='h1'>
                {carouselData[currentPage].title}
              </Typography>
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: '10px',
                width: '100%',
              }}
            >
              <IconButton
                onClick={handlePrev}
                style={{
                  ...styles.iconContainer,
                  opacity: currentPage === 0 ? 0.5 : 1,
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <Box sx={styles.topLeftPadding}>
                <Typography variant='body1'>
                  Page {currentPage + 1} of {carouselData.length}
                </Typography>
              </Box>
              <IconButton
                onClick={handleNext}
                style={{
                  ...styles.iconContainer,
                  opacity: currentPage === carouselData.length - 1 ? 0.5 : 1,
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={styles.cardContainer}>
            <Box sx={styles.cardWrapContainer}>
              {carouselData[currentPage].items.map((item, index) => (
                <Box key={index} sx={styles.container}>
                  <img
                    src='/images/ai/star.svg'
                    width='20px'
                    height='20px'
                    alt='star'
                  />
                  <p>{item}</p>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinTheRevolutions;
