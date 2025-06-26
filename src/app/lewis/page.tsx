'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '@/components/common/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectPage = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const ProjectDescription = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ContentWrapper = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const ContentCaption = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.light};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const CaptionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CaptionText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const VideoSectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const VideoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const VideoCardTitle = styled.h4`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.light};
`;

const TechStackSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const TechStackTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const TechCategory = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const techCategories = [
  {
    title: "프레임워크 & 코어",
    items: [
      "Next.js 13.5.3",
      "React 18.2.0",
      "TypeScript 5.2.2",
      "Redux & Redux Toolkit",
      "SWR"
    ]
  },
  {
    title: "UI/UX 라이브러리",
    items: [
      "Material-UI (MUI)",
      "Ant Design",
      "Styled Components",
      "Swiper",
      "React Slick",
      "React Masonry CSS"
    ]
  },
  {
    title: "상태 관리 & 데이터",
    items: [
      "Redux Toolkit",
      "React Hook Form",
      "Axios",
      "SWR",
      "React Query"
    ]
  },
  {
    title: "다국어 & 국제화",
    items: [
      "i18next",
      "react-i18next",
      "i18next-browser-languagedetector",
      "flag-icons"
    ]
  },
  {
    title: "에디터 & 리치 텍스트",
    items: [
      "TipTap Editor",
      "React Quill",
      "DOMPurify"
    ]
  },
  {
    title: "드래그 앤 드롭",
    items: [
      "@dnd-kit/core",
      "@dnd-kit/sortable",
      "react-beautiful-dnd",
      "react-dnd"
    ]
  },
  {
    title: "블록체인 & Web3",
    items: [
      "ethers.js",
      "@web3modal/ethers",
      "MetaMask Integration"
    ]
  },
  {
    title: "유틸리티 & 헬퍼",
    items: [
      "Lodash",
      "Day.js",
      "Cheerio",
      "Express",
      "JWT"
    ]
  }
];

const projectData = [
  {
    image: '/images/lewis/lewis_storybuilderpage1.png',
    video: '/images/lewis/story_create_video.mp4',
    title: '스토리 생성',
    description: 'Lewis의 핵심 기능인 스토리 생성 페이지입니다. 사용자가 원하는 스토리의 장르, 배경, 캐릭터 등을 설정하여 AI가 자동으로 스토리를 생성해줍니다.'
  },
  {
    image: '/images/lewis/lewis_createpage.png',
    video: '/images/lewis/story_character_chat_video.mp4',
    title: '스토리 생성 페이지',
    description: '사용자가 생성한 스토리를 확인하고 관리할 수 있는 페이지입니다. 스토리의 진행 상황, 생성된 캐릭터, 그리고 스토리의 전체적인 흐름을 한눈에 볼 수 있습니다.'
  },
  {
    image: '/images/lewis/lewis_feedpage.png',
    video: '/images/lewis/story_serial_video.mp4',
    title: '스토리 피드',
    description: '다른 사용자들이 생성한 스토리를 탐색하고 즐길 수 있는 피드 페이지입니다. 인기 있는 스토리와 최신 스토리를 확인할 수 있습니다.'
  },
  {
    image: '/images/lewis/lewis_metamaskpage_nft1.png',
    video: '/images/lewis/story_nft_ip_video.mp4',
    title: 'NFT & IP 관리',
    description: '생성된 스토리를 NFT로 발행하고 지적재산권을 관리할 수 있는 기능입니다. MetaMask를 통한 안전한 거래와 소유권 증명이 가능합니다.'
  }
];

export default function Lewis() {
  return (
    <ProjectPage>
      <Container>
        <PageTitle>Lewis 프로젝트</PageTitle>
        <ProjectDescription>
          Lewis는 AI 기반의 스토리텔링 플랫폼입니다.
          사용자가 원하는 스토리를 생성하고, 캐릭터와 대화하며, NFT로 발행할 수 있는 혁신적인 서비스를 제공합니다.
        </ProjectDescription>

        <TechStackSection>
          <TechStackTitle>사용된 기술 스택</TechStackTitle>
          <TechGrid>
            {techCategories.map((category, index) => (
              <TechCategory key={index}>
                <CategoryTitle>{category.title}</CategoryTitle>
                <TechList>
                  {category.items.map((item, itemIndex) => (
                    <TechItem key={itemIndex}>{item}</TechItem>
                  ))}
                </TechList>
              </TechCategory>
            ))}
          </TechGrid>
        </TechStackSection>

        <ContentContainer>
          {projectData.map((item, index) => (
            <ContentWrapper
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={675}
                style={{ width: '100%', height: 'auto' }}
              />
              <ContentCaption>
                <CaptionTitle>{item.title}</CaptionTitle>
                <CaptionText>{item.description}</CaptionText>
              </ContentCaption>
            </ContentWrapper>
          ))}
        </ContentContainer>

        <VideoSection>
          <VideoSectionTitle>기능 사용 방법</VideoSectionTitle>
          <VideoGrid>
            {projectData.map((item, index) => (
              <VideoCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <VideoWrapper>
                  <Video controls>
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </Video>
                </VideoWrapper>
                <VideoCardTitle>
                  {index === 1 ? '스토리 챗' : item.title}
                </VideoCardTitle>
              </VideoCard>
            ))}
          </VideoGrid>
        </VideoSection>
      </Container>
    </ProjectPage>
  );
} 