"use client";

import styled from "styled-components";
import { Container } from "../common/Container";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
`;

const Content = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
`;

const BackgroundPattern = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    ${({ theme }) => theme.colors.light} 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  opacity: 0.5;
  z-index: 0;
`;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  return (
    <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <BackgroundPattern
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <Container>
        <Content variants={staggerChildren} initial="initial" animate="animate">
          <Title variants={fadeInUp}>
            안녕하세요,
            <br />웹 개발자입니다
          </Title>
          <Subtitle variants={fadeInUp}>
            창의적인 솔루션과 사용자 경험을 중요시하는 개발자입니다
          </Subtitle>
          <ButtonGroup variants={fadeInUp}>
            <Button onClick={scrollToProjects}>프로젝트 보기</Button>
            {/* <SecondaryButton onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>연락하기</SecondaryButton>
            <Link href="/coding-test" passHref>
              <Button>코딩 테스트 연습</Button>
            </Link> */}
          </ButtonGroup>
        </Content>
      </Container>
    </HeroSection>
  );
}
