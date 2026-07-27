import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Code, Zap, Target } from 'lucide-react'

const chapters = [
  {
    path: '/basic-syntax',
    title: '01. 기본 자료구조',
    description: '변수, 자료형, 연산자 등 파이썬 기초 문법',
    icon: '📊',
    topics: ['표현식', '변수', '자료형', '연산자'],
  },
  {
    path: '/control-flow',
    title: '02. 제어문',
    description: '조건문과 반복문으로 프로그램 흐름 제어',
    icon: '🔀',
    topics: ['if-elif-else', 'while', 'for'],
  },
  {
    path: '/functions',
    title: '03. 함수',
    description: '코드 재사용과 모듈화',
    icon: '⚙️',
    topics: ['함수 정의', '매개변수', '람다', '*args/**kwargs'],
  },
  {
    path: '/input-output',
    title: '04. 입력/출력',
    description: '사용자 입력과 파일 처리',
    icon: '📥',
    topics: ['input()', 'print()', '파일 입출력', 'with문'],
  },
  {
    path: '/built-in-functions',
    title: '05. 내장함수',
    description: '파이썬 기본 제공 함수 활용',
    icon: '🔧',
    topics: ['abs', 'max', 'min', 'sum', 'divmod'],
  },
  {
    path: '/external-functions',
    title: '06. 외장함수',
    description: '표준 라이브러리 모듈 활용',
    icon: '📦',
    topics: ['os', 'sys', 'glob', 'json', 'csv'],
  },
  {
    path: '/regex',
    title: '07. 정규표현식',
    description: '복잡한 문자열 처리에 강력하게',
    icon: '🔍',
    topics: ['re.compile', '메타문자', 'match/search', '문자 추출'],
  },
  {
    path: '/classes',
    title: '08. 클래스',
    description: '객체지향 프로그래밍 기초',
    icon: '🏛️',
    topics: ['__init__', '인스턴스', '정적/클래스 메소드'],
  },
  {
    path: '/exception-handling',
    title: '09. 예외처리',
    description: '에러 처리로 견고한 코드 만들기',
    icon: '⚠️',
    topics: ['try-except', '사용자 정의 예외', '에러 종류'],
  },
  {
    path: '/crawling-requests',
    title: '10-1. Requests 크롤링',
    description: '웹 데이터 수집 기초',
    icon: '🕸️',
    topics: ['requests 모듈', 'URL 구조', 'API 호출'],
  },
  {
    path: '/html-css-basics',
    title: '10-2. HTML/CSS 기초',
    description: '웹 스크래핑을 위한 마크업 이해',
    icon: '🌐',
    topics: ['HTML 요소', '태그', '속성', 'CSS 선택자'],
  },
  {
    path: '/beautifulsoup',
    title: '10-3. BeautifulSoup',
    description: '파이썬 웹 스크래핑 핵심 라이브러리',
    icon: '🍲',
    topics: ['find/find_all', 'select', '텍스트/속성 추출'],
  },
  {
    path: '/greedy-algorithm',
    title: '그리디 알고리즘',
    description: '최적해에 더 가까워지는 탐욕 알고리즘',
    icon: '🎯',
    topics: ['문제 해결 전략', '최소 횟수 구하기'],
  },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          스마트조선소 AI전문가 양성과정
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Python 프로그래밍 완전 정리
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              to={chapter.path}
              className="block p-6 bg-white dark:bg-dark-400 rounded-xl border border-gray-200 dark:border-dark-100 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <div className="text-3xl mb-3">{chapter.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {chapter.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {chapter.description}
              </p>
              <ul className="flex flex-wrap gap-1">
                {chapter.topics.map((topic) => (
                  <li
                    key={topic}
                    className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}