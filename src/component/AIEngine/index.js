import React, { useState } from 'react';
import { MessageSquare, TrendingUp, Video, Mic, Search } from 'lucide-react';
import styles from './styles';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NotesIcon from '@mui/icons-material/Notes';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';

const AIEngines = () => {
  const [selectedEngine, setSelectedEngine] = useState('socialite');

  const engines = [
    {
      id: 'socialite',
      title: 'Socialite Engine',
      description:
        'Automate your social presence across Twitter, Telegram, and Discord with AI-powered conversation management',
      icon: <NotesIcon className='w-6 h-6' />,
      image: '/images/socialiteBanner.png',
    },
    {
      id: 'tradex',
      title: 'TradeX Engine',
      description:
        'Your 24/7 AI trading companion that analyzes, executes, and optimizes crypto trades autonomously',
      icon: <AssessmentIcon className='w-6 h-6' />,
      image: '/images/tradexBanner.png',
    },
    {
      id: 'creator',
      title: 'Creator Engine',
      description:
        'Transform ideas into stunning content – from music to videos – with one-click AI generation',
      icon: <TextSnippetIcon className='w-6 h-6' />,
      image: '/images/creatorEngine.png',
    },
    {
      id: 'vox',
      title: 'VoxAI Engine',
      description:
        'Professional-grade voiceovers and audio content, powered by next-gen AI synthesis',
      icon: <GraphicEqRoundedIcon className='w-6 h-6' />,
      image: '/images/voxAIBanner.png',
    },
    {
      id: 'alpha',
      title: 'Alpha Engine',
      description:
        'Stay ahead of the market with AI-powered research that spots trending tokens before they moon',
      icon: <AssessmentIcon className='w-6 h-6' />,
      image: '/images/alphaAIBanner.png',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.headingContainer}>
          <p style={styles.gradientHeader}>AI ENGINES </p>
          <p style={styles.header}> for every use case</p>
        </div>
        <div style={styles.panel}>
          {/* Left Panel - Image Display */}
          <div style={styles.imageContainer}>
            <div style={styles.imageWrapper}>
              <img
                src={engines.find((e) => e.id === selectedEngine)?.image}
                alt={`${selectedEngine} preview`}
                style={styles.image}
              />
            </div>
          </div>
          {/* Right Panel - Engine List */}
          <div style={styles.listContainer}>
            {engines.map((engine) => (
              <button
                key={engine.id}
                onClick={() => setSelectedEngine(engine.id)}
                style={{
                  ...styles.button,
                  ...(selectedEngine === engine.id
                    ? styles.selectedButton
                    : {}),
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                  }}
                >
                  <div
                    style={{
                      ...styles.iconWrapper,
                      ...(selectedEngine === engine.id
                        ? styles.selectedIconWrapper
                        : {}),
                    }}
                  >
                    {engine.icon}
                    <p
                      style={{
                        ...styles.title,
                        ...(selectedEngine === engine.id
                          ? styles.selectedTitle
                          : {}),
                      }}
                    >
                      {engine.title}
                    </p>
                  </div>
                  <p style={styles.description}>{engine.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEngines;
