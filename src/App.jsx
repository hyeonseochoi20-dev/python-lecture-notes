import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import BasicSyntax from './pages/BasicSyntax.jsx'
import ControlFlow from './pages/ControlFlow.jsx'
import Functions from './pages/Functions.jsx'
import InputOutput from './pages/InputOutput.jsx'
import BuiltInFunctions from './pages/BuiltInFunctions.jsx'
import ExternalFunctions from './pages/ExternalFunctions.jsx'
import Regex from './pages/Regex.jsx'
import Classes from './pages/Classes.jsx'
import ExceptionHandling from './pages/ExceptionHandling.jsx'
import CrawlingRequests from './pages/CrawlingRequests.jsx'
import HtmlCssBasics from './pages/HtmlCssBasics.jsx'
import BeautifulSoup from './pages/BeautifulSoup.jsx'
import GreedyAlgorithm from './pages/GreedyAlgorithm.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    }
  }

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-syntax" element={<BasicSyntax />} />
        <Route path="/control-flow" element={<ControlFlow />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/input-output" element={<InputOutput />} />
        <Route path="/built-in-functions" element={<BuiltInFunctions />} />
        <Route path="/external-functions" element={<ExternalFunctions />} />
        <Route path="/regex" element={<Regex />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/exception-handling" element={<ExceptionHandling />} />
        <Route path="/crawling-requests" element={<CrawlingRequests />} />
        <Route path="/html-css-basics" element={<HtmlCssBasics />} />
        <Route path="/beautifulsoup" element={<BeautifulSoup />} />
        <Route path="/greedy-algorithm" element={<GreedyAlgorithm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App