import CodeBlock from '../components/CodeBlock.jsx'

export default function HtmlCssBasics() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>10-2. HTML/CSS 기초</h1>

      <section className="mb-12">
        <h2>HTML 구성 요소</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">요소</th>
              <th className="text-left p-2">설명</th>
              <th className="text-left p-2">예시</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2">Document</td>
              <td className="p-2">한 페이지를 나타내는 단위</td>
              <td className="p-2"><code>&lt;html&gt;...&lt;/html&gt;</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2">Element</td>
              <td className="p-2">시작태그 + 끝태그 + 텍스트</td>
              <td className="p-2"><code>&lt;div&gt;내용&lt;/div&gt;</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2">Tag</td>
              <td className="p-2">엘리먼트 종류를 정의</td>
              <td className="p-2"><code>&lt;h1&gt;, &lt;p&gt;, &lt;div&gt;</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2">Attribute</td>
              <td className="p-2">태그의 특정 기능을 하는 값</td>
              <td className="p-2"><code>id, class, type, value</code></td>
            </tr>
            <tr>
              <td className="p-2">Text</td>
              <td className="p-2">시작태그와 끝태그 사이 문자열</td>
              <td className="p-2">Hello World</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2>HTML 기본 구조</h2>
        <CodeBlock code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>페이지 제목</title>
</head>
<body>
    <!-- 화면을 구성하는 요소 -->
    <h1>큰 제목</h1>
    <p>단락 텍스트</p>
    <div class="container">
        <button id="btn1" type="button">버튼 1</button>
    </div>
</body>
</html>`} language="html" />
      </section>

      <section className="mb-12">
        <h2>주요 태그</h2>

        <h3>텍스트 관련</h3>
        <CodeBlock code={`<h1>큰 제목</h1>
<h2>중간 제목</h2>
<h3>작은 제목</h3>
<p>단락 텍스트입니다.</p>
<span>한 줄 문자열</span>  <!-- 인라인 요소 -->`} language="html" />

        <h3>링크와 이미지</h3>
        <CodeBlock code={`<a href="https://python.org">파이썬 공식 사이트</a>
<img src="image.jpg" alt="이미지 설명" width="200">`} language="html" />

        <h3>목록</h3>
        <CodeBlock code={`<ul>
    <li>순서 없는 목록 1</li>
    <li>순서 없는 목록 2</li>
</ul>

<ol>
    <li>순서 있는 목록 1</li>
    <li>순서 있는 목록 2</li>
</ol>`} language="html" />
      </section>

      <section>
        <h2>CSS 선택자 (BeautifulSoup용)</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">선택자</th>
              <th className="text-left p-2">의미</th>
              <th className="text-left p-2">BeautifulSoup 메소드</th>
            </tr>
          </thead>
          <tbody className="text-sm font-mono">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>태그</code></td>
              <td className="p-2">태그명</td>
              <td className="p-2"><code>find('div')</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>#id</code></td>
              <td className="p-2">ID 선택</td>
              <td className="p-2"><code>find(id='header')</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>.class</code></td>
              <td className="p-2">클래스 선택</td>
              <td className="p-2"><code>find(class_='btn')</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>태그1 태그2</code></td>
              <td className="p-2">자식 선택</td>
              <td className="p-2"><code>find('div').find('p')</code></td>
            </tr>
            <tr>
              <td className="p-2"><code>태그1 > 태그2</code></td>
              <td className="p-2">직접 자식만 선택</td>
              <td className="p-2"><code>select_one('div > p')</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}