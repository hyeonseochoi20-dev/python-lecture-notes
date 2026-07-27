import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useDarkMode } from '../hooks/useDarkMode.js'

export default function CodeBlock({ code, language = 'python', filename }) {
  const isDark = useDarkMode()

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-400 shadow-lg">
      {filename && (
        <div className="px-4 py-2 bg-gray-50 dark:bg-dark-300 border-b border-gray-200 dark:border-dark-100 flex items-center gap-2">
          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{filename}</span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={isDark ? vscDarkPlus : vs}
        showLineNumbers
        wrapLines
        customStyle={{
          margin: 0,
          padding: '1.25rem',
          fontSize: '0.875rem',
          backgroundColor: isDark ? '#1f2028' : '#f9fafb',
        }}
        lineNumberStyle={{
          color: isDark ? '#6b7280' : '#9ca3af',
          fontSize: '0.75rem',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}