import CodeBlock from '../components/CodeBlock.jsx'

export default function Regex() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>07. 정규표현식 (Regular Expressions)</h1>

      <section className="mb-12">
        <h2>정규표현식이란?</h2>
        <p>특정 규칙을 가진 문자열의 집합을 표현하는 언어</p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
          <p className="font-semibold mb-2">🔧 유용한 사용 분야</p>
          <ul className="text-sm space-y-1">
            <li>보안: 공격 패턴 탐지, 개인정보 유출 추적</li>
            <li>클라우드/DevOps: 로그 모니터링, CI/CD 에러 감지</li>
            <li>데이터 엔지니어링: 크롤링/로그 파싱, 데이터 정제</li>
            <li>NLP: 텍스트 전처리, 정보 추출</li>
          </ul>
        </div>

        <h3>기본 사용법</h3>
        <CodeBlock code={`import re

# 정규식 컴파일 (재사용 시 유용)
pattern = re.compile(r'[a-zA-Z]+')

# 검색: match(), search(), findall()
text = "파이썬 Python 123"
result = pattern.search(text)  # 'Python' 매치

# 직접 호출 (한 번만 사용할 때)
import re
print(re.search(r'[0-9]+', "abc123def"))  # 찾기`} language="python" />
      </section>

      <section className="mb-12">
        <h2>메타문자 (Meta Characters)</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">기호</th>
              <th className="text-left p-2">의미</th>
              <th className="text-left p-2">예시</th>
              <th className="text-left p-2">매치 결과</th>
            </tr>
          </thead>
          <tbody className="text-sm font-mono">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>[ ]</code></td>
              <td className="p-2">문자셋 (or)</td>
              <td className="p-2"><code>[abc]</code></td>
              <td className="p-2">a 또는 b 또는 c</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>[a-z]</code></td>
              <td className="p-2">범위</td>
              <td className="p-2"><code>[a-z]</code></td>
              <td className="p-2">소문자 a~z 중 하나</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>[^ ]</code></td>
              <td className="p-2">부정 (not)</td>
              <td className="p-2"><code>[^0-9]</code></td>
              <td className="p-2">숫자가 아닌 것</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>.</code></td>
              <td className="p-2">모든 문자 ('\n' 제외)</td>
              <td className="p-2"><code>a.c</code></td>
              <td className="p-2">abc, a1c, a$c 등</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>*</code></td>
              <td className="p-2">0개 이상 (없어도 됨)</td>
              <td className="p-2"><code>a*b</code></td>
              <td className="p-2">b, ab, aab, aaab 등</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>+</code></td>
              <td className="p-2">1개 이상 (반드시 있어야 함)</td>
              <td className="p-2"><code>a+b</code></td>
              <td className="p-2">ab, aab, aaab 등 (b 단독은 안 됨)</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>?</code></td>
              <td className="p-2">0개 또는 1개</td>
              <td className="p-2"><code>colou?r</code></td>
              <td className="p-2">color, colour</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>{}</code></td>
              <td className="p-2">횟수 지정</td>
              <td className="p-2"><code>a{2,4}</code></td>
              <td className="p-2">aa, aaa, aaaa</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>^</code></td>
              <td className="p-2">시작 위치 (대괄호 밖)</td>
              <td className="p-2"><code>^abc</code></td>
              <td className="p-2">abc로 시작하는 문자열</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>$</code></td>
              <td className="p-2">끝 위치</td>
              <td className="p-2"><code>xyz$</code></td>
              <td className="p-2">xyz로 끝나는 문자열</td>
            </tr>
            <tr>
              <td className="p-2"><code>()</code></td>
              <td className="p-2">그룹화</td>
              <td className="p-2"><code>(a|b)c</code></td>
              <td className="p-2">ac 또는 bc</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2>주요 메서드</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">메서드</th>
              <th className="text-left p-2">설명</th>
              <th className="text-left p-2">반환값</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>match()</code></td>
              <td className="p-2">문자열 처음부터 매치 확인</td>
              <td className="p-2">match 객체 또는 None</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>search()</code></td>
              <td className="p-2">문자열 전체에서 매치 확인</td>
              <td className="p-2">match 객체 또는 None</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>findall()</code></td>
              <td className="p-2">모든 매치를 리스트로 반환</td>
              <td className="p-2">매치된 문자열 리스트</td>
            </tr>
            <tr>
              <td className="p-2"><code>finditer()</code></td>
              <td className="p-2">매치된 문자열 iterator 반환</td>
              <td className="p-2">iterator 객체</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>실전 예제</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">한글/영문자/숫자 추출</p>
          <CodeBlock code={`import re

# 한글 추출
pattern = re.compile(r'[가-힣]+')
text = "Hello 안녕하세요 123"
한글 = pattern.findall(text)
print(한글)  # ['안녕하세요']

# 이메일 형식 검사
email_pattern = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
emails = email_pattern.findall("contact@python.com abc@test")
print(emails)  # ['contact@python.com']

# 전화번호 추출
phone_pattern = re.compile(r'010-\d{4}-\d{4}')
phones = phone_pattern.findall("전화번호: 010-1234-5678")
print(phones)  # ['010-1234-5678']`} language="python" />
        </div>

        <h3 className="mt-6">치환 (replace)</h3>
        <CodeBlock code={`import re

# 문자열 치환
text = "홍길동의 전화번호는 010-1234-5678입니다"
result = re.sub(r'\d{4}-\d{4}', '****-****', text)
print(result)  # 홍길동의 전화번호는 010-****-****입니다`} language="python" />
      </section>
    </div>
  )
}