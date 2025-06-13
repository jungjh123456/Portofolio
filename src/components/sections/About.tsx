'use client';

import styled from 'styled-components';
import { Container } from '../common/Container';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  scroll-snap-align: start;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const Skills = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
  max-width: 100%;
`;

const Skill = styled(motion.div)`
  background: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  font-size: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
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
      staggerChildren: 0.1
    }
  }
};

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'Node.js',
  'Git',
  'Styled Components'
];

export function About() {
  return (
    <AboutSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container>
        <Content variants={staggerChildren} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <Title variants={fadeInUp}>About Me</Title>
          <Description variants={fadeInUp}>
            안녕하세요! 저는 프론트엔드 개발자입니다. 
            사용자 경험을 중요시하며, 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
            새로운 기술을 배우고 적용하는 것에 열정적이며, 
            팀원들과 협력하여 더 나은 솔루션을 만들어내는 것을 즐깁니다.
          </Description>
          <Skills variants={staggerChildren}>
            {skills.map((skill, index) => (
              <Skill
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </Skill>
            ))}
          </Skills>
        </Content>
      </Container>
    </AboutSection>
  );
} 