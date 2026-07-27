import CodeBlock from '../components/CodeBlock.jsx'

export default function ExternalFunctions() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>06. 외장함수</h1>

      <section className="mb-12">
        <h2>시스템/환경 관련</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">모듈</th>
              <th className="text-left p-2">주요 기능</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>import os</code></td>
              <td className="p-2">운영체제 기능 제어 (환경변수, 디렉토리, 파일)</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>import sys</code></td>
              <td className="p-2">파이썬 인터프리터 제어 (인자, 종료, 경로)</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>import glob</code></td>
              <td className="p-2">특정 패턴과 일치하는 파일 목록 찾기</td>
            </tr>
            <tr>
              <td className="p-2"><code>from pathlib import Path</code></td>
              <td className="p-2">객체지향 방식 파일/디렉토리 제어</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`# os: 현재 작업 디렉토리 확인
import os
print(os.getcwd())

# pathlib: 디렉토리 생성
from pathlib import Path
Path('my_folder').mkdir(exist_ok=True)

# glob: 특정 확장자 파일 찾기
import glob
print(glob.glob('*.py'))  # 파이썬 파일 목록
print(glob.glob('*5*'))   # '5'가 들어간 파일

# sys: 프로그램 종료
import sys
sys.exit()  # 강제 종료`} language="python" />
      </section>

      <section className="mb-12">
        <h2>데이터 처리</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">모듈</th>
              <th className="text-left p-2">주요 기능</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>import pickle</code></td>
              <td className="p-2">파이썬 객체를 그대로 저장/복원</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>import csv</code></td>
              <td className="p-2">CSV 파일 읽기/쓰기</td>
            </tr>
            <tr>
              <td className="p-2"><code>import json</code></td>
              <td className="p-2">JSON API 데이터 교환 필수</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`# JSON 예시 (API 응답 처리)
import requests as req
res = req.get('http://ggoreb.com/api/mini-blog.jsp')
data = res.json()  # JSON 문자열 → 파이썬 딕셔너리

for item in data:
    print(f"제목: {item['title']}")
    print(f"댓글수: {item['comment']}개\\n")`} language="python" />
      </section>

      <section>
        <h2>연습문제</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">폴더 및 파일 생성</p>
          <CodeBlock code={`# practice 폴더 생성
import os
os.makedirs('practice', exist_ok=True)

# hello.txt 파일 생성
with open('practice/hello.txt', 'w', encoding='utf8') as f:
    f.write('Hello, Python!')

# 's'가 들어간 파일 찾기
import glob
s_files = glob.glob('practice/*s*')
print(s_files)`} language="python" />
        </div>
      </section>
    </div>
  )
}