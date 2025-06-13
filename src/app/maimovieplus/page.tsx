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

const ImageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ImageWrapper = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const ImageCaption = styled.div`
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

const projectData = [
  {
    image: '/images/maimovieplus/마이무비플러스1.png',
    title: '메인 페이지',
    description: '마이무비플러스의 메인 페이지입니다. 사용자 친화적인 UI로 현재 상영 중인 영화와 인기 영화를 한눈에 볼 수 있습니다.'
  },
  {
    image: '/images/maimovieplus/maimovieplus3.png',
    title: '메인 페이지',
    description: '마이무비플러스의 메인 페이지입니다. 사용자 친화적인 UI로 현재 상영 중인 영화와 인기 영화를 한눈에 볼 수 있습니다.'
  },
  {
    image: '/images/maimovieplus/마이무비플러스3.png',
    title: '키토크 - AI 시놉시스 생성기',
    description: '사용자가 입력한 키워드를 바탕으로 GPT 모델을 활용하여 영화 시놉시스를 자동으로 생성하는 기능입니다. 다양한 장르와 스타일의 시놉시스를 생성할 수 있으며, 사용자의 창의성을 돕는 도구로 활용됩니다.'
  },
  {
    image: '/images/maimovieplus/마이무비플러스4.png',
    title: '마이페이지',
    description: '사용자의 예매 내역과 관심 영화를 관리할 수 있는 마이페이지입니다. 개인정보 관리 기능도 포함되어 있습니다.'
  },
  {
    image: '/images/maimovieplus/마이무비플러스5.png',
    title: '리뷰 시스템',
    description: '영화에 대한 리뷰를 작성하고 다른 사용자의 리뷰를 확인할 수 있는 시스템을 구현했습니다.'
  }
];

export default function Maimovieplus() {
  return (
    <ProjectPage>
      <Container>
        <PageTitle>마이무비플러스 프로젝트</PageTitle>
        <ProjectDescription>
          마이무비플러스는 영화 예매와 정보 제공을 위한 종합 플랫폼입니다.
          사용자 친화적인 인터페이스와 다양한 기능을 통해 영화 관람 경험을 한층 더 풍부하게 만들어줍니다.
        </ProjectDescription>
        <ImageContainer>
          {projectData.map((item, index) => (
            <ImageWrapper
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
              <ImageCaption>
                <CaptionTitle>{item.title}</CaptionTitle>
                <CaptionText>{item.description}</CaptionText>
              </ImageCaption>
            </ImageWrapper>
          ))}
        </ImageContainer>
      </Container>
    </ProjectPage>
  );
} 