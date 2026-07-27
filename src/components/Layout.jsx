import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react'
import { useState } from 'react'

const sidebarItems = [
  { path: '/', title: '홈', icon: '🏠' },
  { path: '/basic-syntax', title: '01. 기본 자료구조', icon: '📊' },
  { path: '/control-flow', title: '02. 제어문', icon: '🔀' },
  { path: '/functions', title: '03. 함수', icon: '⚙️' },
  { path: '/input-output', title: '04. 입력/출력', icon: '📥' },
  { path: '/built-in-functions', title: '05. 내장함수', icon: '🔧' },
  { path: '/external-functions', title: '06. 외장함수', icon: '📦' },
  { path: '/regex', title: '07. 정규표현식', icon: '🔍' },
  { path: '/classes', title: '08. 클래스', icon: '🏛️' },
  { path: '/exception-handling', title: '09. 예외처리', icon: '⚠️' },
  { path: '/crawling-requests', title: '10-1. Requests 크롤링', icon: '🕸️' },
  { path: '/html-css-basics', title: '10-2. HTML/CSS 기초', icon: '🌐' },
  { path: '/beautifulsoup', title: '10-3. BeautifulSoup', icon: '🍲' },
  { path: '/greedy-algorithm', title: '그리디 알고리즘', icon: '🎯' },
]

export default function Layout({ children, darkMode, toggleDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-500 transition-colors">
      {/* 모바일 헤더 */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark-400 border-b border-gray-200 dark:border-dark-100 flex items-center justify-between px-4 h-14">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-800 dark:text-gray-200">
          <Code2 className="w-6 h-6 text-primary-500" />
          <span>Python 강의</span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors"
            aria-label="다크모드 토글"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors"
            aria-label="메뉴"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div className="flex">
        {/* 사이드바 */}
        <nav className={`
          fixed lg:sticky top-0 left-0 z-40 w-72 h-screen bg-white dark:bg-dark-400 border-r border-gray-200 dark:border-dark-100 overflow-y-auto dark-scrollbar
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6">
            <Link to="/" className="hidden lg:flex items-center gap-3 font-bold text-2xl text-gray-800 dark:text-gray-200 mb-8">
              <Code2 className="w-8 h-8 text-primary-500" />
              <span>Python 강의</span>
            </Link>
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${location.pathname === item.path
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'}
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={toggleDarkMode}
              className="hidden lg:flex items-center gap-2 w-full px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{darkMode ? '라이트모드' : '다크모드'}</span>
            </button>
          </div>
        </nav>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 lg:pl-72 pt-14 lg:pt-0 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto p-6 lg:p-12"
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* 모바일 오버레이 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}