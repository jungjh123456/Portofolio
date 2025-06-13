'use client';

import styled from 'styled-components';
import { Container } from '../common/Container';
import { motion } from 'framer-motion';

const ExplanationSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  scroll-snap-align: start;
`;

const Content = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: 700;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const ExplanationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const CardTitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

const CardContent = styled(motion.div)`
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.8;
  font-size: 1.1rem;

  code {
    background: ${({ theme }) => theme.colors.background};
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
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

const explanations = [
  {
    title: '스크롤 스냅 구현',
    content: `스크롤 스냅을 구현하기 위해 CSS의 scroll-snap 속성을 사용했습니다.
    - 메인 컨테이너에 \`scroll-snap-type: y mandatory\`를 적용하여 수직 스크롤 스냅 활성화
    - 각 섹션에 \`scroll-snap-align: start\`를 적용하여 화면 상단에 맞춰지도록 설정
    - \`scroll-behavior: smooth\`로 부드러운 스크롤 효과 추가`
  },
  {
    title: '반응형 디자인',
    content: `모든 섹션을 반응형으로 구현했습니다.
    - \`min-height: 100vh\`로 각 섹션이 화면을 꽉 채우도록 설정
    - 미디어 쿼리를 사용하여 다양한 화면 크기에 대응
    - 모바일에서는 폰트 크기와 여백을 조정하여 가독성 확보`
  },
  {
    title: '애니메이션 효과',
    content: `Framer Motion을 사용하여 다양한 애니메이션을 구현했습니다.
    - 스크롤 시 페이드인 효과
    - 요소들이 순차적으로 나타나는 stagger 효과
    - 호버 시 확대되는 효과
    - 부드러운 전환 효과`
  },
  {
    title: '컴포넌트 구조',
    content: `모듈화된 컴포넌트 구조를 사용했습니다.
    - 각 섹션을 독립적인 컴포넌트로 분리
    - 재사용 가능한 스타일드 컴포넌트 정의
    - 일관된 테마 시스템 적용`
  }
];

export function CodeExplanation() {
  return (
    <ExplanationSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container>
        <Content variants={staggerChildren} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <Title variants={fadeInUp}>코드 구현 설명</Title>
          {explanations.map((explanation, index) => (
            <ExplanationCard
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle>{explanation.title}</CardTitle>
              <CardContent>
                {explanation.content.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </CardContent>
            </ExplanationCard>
          ))}
        </Content>
      </Container>
    </ExplanationSection>
  );
} 