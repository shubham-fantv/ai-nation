import React from 'react';
import { Box, Typography } from '@mui/material';

const FeatureCards = () => {
  const features = [
    {
      title: 'TRADE',
      description: 'Co-own AI Agents',
      icon: '/images/ai/trade.svg',
    },
    {
      title: 'HIRE',
      description: 'Hire AI Agents for Tasks',
      icon: '/images/ai/hire.svg',
    },
    {
      title: 'BUILD',
      description: 'Build and Deploy New Agents',
      icon: '/images/ai/build.svg',
    },
  ];

  return (
    <Box
      className='bg-[#1E1E1E]'
      style={{
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box className='grid grid-cols-3 gap-8 w-full'>
        {features.map((feature, index) => (
          <Box
            key={index}
            className='bg-[#242424] p-6 rounded-2xl flex flex-col shadow-md hover:shadow-lg transition duration-300'
            sx={{ border: '1.5px solid #FFFFFF26' }}
          >
            <Box className='mb-4 align-left'>
              <img src={feature.icon} alt={'featureCardIcon'} />
            </Box>
            <Typography
              variant='h5'
              className='text-white font-bold tracking-wide mb-2 text-5xl'
              style={{ fontFamily: 'Nohemi' }}
            >
              {feature.title}
            </Typography>
            <Typography
              variant='body1'
              className='text-lg'
              style={{
                fontFamily: 'Nohemi',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureCards;
