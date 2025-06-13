'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { CodeExplanation } from '@/components/sections/CodeExplanation';
import styled from 'styled-components';

const MainContainer = styled.main`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
`;

export default function Home() {
  return (
    <MainContainer>
      <Hero />
      <About />
      <Projects />
      <CodeExplanation />
    </MainContainer>
  );
}
