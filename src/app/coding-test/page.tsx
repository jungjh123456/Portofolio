'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '@/components/common/Container';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';

const CodingTestPage = styled.div`
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  height: calc(100vh - 200px);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProblemList = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
`;

const ProblemItem = styled.div<{ isActive: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.light};
  color: ${({ theme, isActive }) => isActive ? 'white' : theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.border};

  &:hover {
    background: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.light};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ProblemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`;

const ProblemDescription = styled.p<{ isActive: boolean }>`
  font-size: 0.9rem;
  color: ${({ theme, isActive }) => isActive ? 'rgba(255, 255, 255, 0.9)' : theme.colors.text};
  line-height: 1.5;
`;

const DifficultyTag = styled.span<{ difficulty: string }>`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme, difficulty }) => {
    switch (difficulty) {
      case '쉬움':
        return theme.colors.success;
      case '보통':
        return theme.colors.warning;
      case '어려움':
        return theme.colors.error;
      default:
        return theme.colors.primary;
    }
  }};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.8rem;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const EditorContainer = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const RunButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const ResultContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const TestCaseResult = styled.div<{ isSuccess: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme, isSuccess }) => isSuccess ? theme.colors.success : theme.colors.error};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.9rem;
`;

const ExecutionTime = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const Hint = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.warning};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.9rem;
`;

const problems = [
  {
    id: 1,
    title: '두 수의 합',
    description: '정수 배열 nums와 정수 target이 주어졌을 때, 두 수의 합이 target이 되는 두 수의 인덱스를 반환하세요.',
    difficulty: '쉬움',
    initialCode: `function twoSum(nums: number[], target: number): number[] {
  // 여기에 코드를 작성하세요
  return [];
}`,
    testCases: [
      { input: [[2,7,11,15], 9], output: [0,1] },
      { input: [[3,2,4], 6], output: [1,2] },
      { input: [[3,3], 6], output: [0,1] }
    ],
    hints: [
      '두 개의 반복문을 사용하여 모든 가능한 쌍을 확인해보세요.',
      '시간 복잡도를 개선하기 위해 해시 테이블을 사용해보세요.',
      '각 숫자와 그 인덱스를 해시 테이블에 저장하고, target - 현재 숫자가 해시 테이블에 있는지 확인해보세요.'
    ]
  },
  {
    id: 2,
    title: '회문 판별',
    description: '주어진 문자열이 회문인지 판별하는 함수를 작성하세요. 회문이란 앞으로 읽으나 뒤로 읽으나 같은 문자열을 의미합니다.',
    difficulty: '쉬움',
    initialCode: `function isPalindrome(s: string): boolean {
  // 여기에 코드를 작성하세요
  return false;
}`,
    testCases: [
      { input: ['A man, a plan, a canal: Panama'], output: true },
      { input: ['race a car'], output: false },
      { input: [' '], output: true }
    ],
    hints: [
      '문자열을 소문자로 변환하고, 영숫자만 남기도록 정규식을 사용해보세요.',
      '두 개의 포인터를 사용하여 문자열의 시작과 끝에서 중앙으로 이동하면서 문자를 비교해보세요.',
      '문자열을 뒤집어서 원래 문자열과 비교해보세요.'
    ]
  }
];

interface TestResult {
  testCase: number;
  input: any[];
  expected: any;
  actual: any;
  isSuccess: boolean;
  executionTime: number;
}

export default function CodingTest() {
  const [selectedProblem, setSelectedProblem] = useState(problems[0]);
  const [code, setCode] = useState(problems[0].initialCode);
  const [results, setResults] = useState<TestResult[]>([]);
  const [showHint, setShowHint] = useState(false);

  const handleProblemSelect = (problem: typeof problems[0]) => {
    setSelectedProblem(problem);
    setCode(problem.initialCode);
    setResults([]);
    setShowHint(false);
  };

  const runTests = () => {
    try {
      // TypeScript 타입 선언 제거 (더 정확한 정규식 사용)
      const jsCode = code
        .replace(/\s*:\s*number\[\]/g, '')  // number[] 타입 제거
        .replace(/\s*:\s*string\[\]/g, '')  // string[] 타입 제거
        .replace(/\s*:\s*boolean\[\]/g, '') // boolean[] 타입 제거
        .replace(/\s*:\s*\[\s*\w+\s*\]/g, '') // 다른 배열 타입 제거
        .replace(/\s*:\s*number/g, '')  // number 타입 제거
        .replace(/\s*:\s*string/g, '')  // string 타입 제거
        .replace(/\s*:\s*boolean/g, '') // boolean 타입 제거
        .replace(/\s*:\s*\w+/g, '');    // 나머지 타입 제거
      
      // 코드 실행을 위한 함수 생성
      const func = new Function('return ' + jsCode)();
      const newResults: TestResult[] = [];

      // 각 테스트 케이스 실행
      selectedProblem.testCases.forEach((testCase, index) => {
        const startTime = performance.now();
        const result = func(...testCase.input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;

        // 결과 비교
        const isSuccess = JSON.stringify(result) === JSON.stringify(testCase.output);

        newResults.push({
          testCase: index + 1,
          input: testCase.input,
          expected: testCase.output,
          actual: result,
          isSuccess,
          executionTime
        });
      });

      setResults(newResults);
      setShowHint(!newResults.every(r => r.isSuccess));
    } catch (error) {
      console.error('Error executing code:', error);
      alert('코드 실행 중 오류가 발생했습니다: ' + error);
    }
  };

  return (
    <CodingTestPage>
      <Container>
        <PageTitle>코딩 테스트 연습</PageTitle>
        <ContentWrapper>
          <ProblemList>
            {problems.map((problem) => (
              <ProblemItem
                key={problem.id}
                isActive={selectedProblem.id === problem.id}
                onClick={() => handleProblemSelect(problem)}
              >
                <ProblemTitle>{problem.title}</ProblemTitle>
                <ProblemDescription isActive={selectedProblem.id === problem.id}>
                  {problem.description}
                </ProblemDescription>
                <DifficultyTag difficulty={problem.difficulty}>
                  {problem.difficulty}
                </DifficultyTag>
              </ProblemItem>
            ))}
          </ProblemList>
          <EditorContainer>
            <Editor
              height="100%"
              defaultLanguage="typescript"
              value={code}
              onChange={(value) => setCode(value || '')}
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollbar: {
                  vertical: 'visible',
                  horizontal: 'visible',
                  useShadows: false,
                },
              }}
            />
            <RunButton onClick={runTests}>실행하기</RunButton>
            {results.length > 0 && (
              <ResultContainer>
                {results.map((result, index) => (
                  <TestCaseResult key={index} isSuccess={result.isSuccess}>
                    <div>테스트 케이스 {result.testCase}: {result.isSuccess ? '성공' : '실패'}</div>
                    <div>입력: {JSON.stringify(result.input)}</div>
                    <div>기대값: {JSON.stringify(result.expected)}</div>
                    <div>실제값: {JSON.stringify(result.actual)}</div>
                    <ExecutionTime>실행 시간: {result.executionTime.toFixed(2)}ms</ExecutionTime>
                  </TestCaseResult>
                ))}
                {showHint && (
                  <Hint>
                    <div>힌트:</div>
                    {selectedProblem.hints.map((hint, index) => (
                      <div key={index}>{index + 1}. {hint}</div>
                    ))}
                  </Hint>
                )}
              </ResultContainer>
            )}
          </EditorContainer>
        </ContentWrapper>
      </Container>
    </CodingTestPage>
  );
} 