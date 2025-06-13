'use client';

import styled from 'styled-components';
import { Container } from '../common/Container';
import { motion } from 'framer-motion';

const ProjectsSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  scroll-snap-align: start;
  scroll-margin-top: 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.a)`
  max-width: 400px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.25rem;
  }
`;

const ProjectDescription = styled(motion.p)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;

const ProjectTags = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Tag = styled(motion.span)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.875rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  }
`;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const projects = [
  {
    title: 'lewis 웹사이트',
    link: 'https://lewis.keytalkai.com/ko',
    description: '회사 웹사이트로, Next.js 13버전와 styled-components를 사용하여 개발했습니다.',
    image: 'https://lewis.keytalkai.com/assets/images/linked_landing_og.png',
    tags: ['Next.js', 'React', 'styled-components']
  },
  {
    title: 'Lewis 상세 설명 페이지',
    link: '/lewis',
    description: 'AI 기반 스토리텔링 플랫폼입니다. 스토리 생성, 캐릭터 채팅, NFT 발행 등 다양한 기능을 제공합니다.',
    image: '/images/lewis/lewis_storybuilderpage1.png',
    tags: ['Next.js', 'AI', 'NFT', 'i18next']
  },
  {
    title: '마이무비플러스',
    link: '/maimovieplus',
    description: 'AI 기반 영화 시놉시스 생성 플랫폼입니다. GPT 모델을 활용하여 키워드 기반의 영화 시놉시스를 자동으로 생성합니다.',
    image: '/images/maimovieplus/maimovieplus3.png',
    tags: ['Next.js', 'GPT', 'AI', 'TypeScript']
  },

];

export function Projects() {
  return (
    <ProjectsSection
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container>
        <SectionTitle variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          프로젝트
        </SectionTitle>
        <ProjectGrid variants={staggerChildren} initial="initial" whileInView="animate" viewport={{ once: true }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              href={project.link}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              // target="_blank"
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
} 