import CodeBlock from '../components/CodeBlock.jsx'

export default function BasicSyntax() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>01. 기본 자료구조 이해</h1>

      <section className="mb-12">
        <h2>표현식 (Expression)</h2>
        <p>연산자를 활용하여 값을 만드는 것</p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
          <p className="font-semibold mb-2">📌 기억하세요!</p>
          <p>파이썬은 다른 언어와 달리 <code>;</code> 로 끝내지 않아요</p>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">연산자</th>
              <th className="text-left p-2">연산 종류</th>
              <th className="text-left p-2">예시</th>
              <th className="text-left p-2">결과</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>+</code></td>
              <td className="p-2">더하기</td>
              <td className="p-2"><code>2 + 2</code></td>
              <td className="p-2">4</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>-</code></td>
              <td className="p-2">빼기</td>
              <td className="p-2"><code>5 - 2</code></td>
              <td className="p-2">3</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>*</code></td>
              <td className="p-2">곱하기</td>
              <td className="p-2"><code>3 * 5</code></td>
              <td className="p-2">15</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>/</code></td>
              <td className="p-2">나누기</td>
              <td className="p-2"><code>22 / 8</code></td>
              <td className="p-2">2.75 (실수)</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>//</code></td>
              <td className="p-2">정수 나누기</td>
              <td className="p-2"><code>22 // 8</code></td>
              <td className="p-2">2 (몫)</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>%</code></td>
              <td className="p-2">나머지</td>
              <td className="p-2"><code>22 % 8</code></td>
              <td className="p-2">6</td>
            </tr>
            <tr>
              <td className="p-2"><code>**</code></td>
              <td className="p-2">지수 (제곱)</td>
              <td className="p-2"><code>2 ** 3</code></td>
              <td className="p-2">8</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2>변수 (Variable)</h2>
        <p>값을 저장할 수 있는 메모리 공간</p>

        <h3>변수를 사용하는 이유</h3>
        <ul>
          <li>재사용 가능</li>
          <li>값에 이름을 부여하여 쉽게 사용</li>
          <li>반복적으로 등장하는 값을 쉽게 관리</li>
        </ul>

        <h3>변수 이름 규칙</h3>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✅ 유효한 변수명</p>
            <ul className="text-sm space-y-1 font-mono">
              <li>current_balance</li>
              <li>currentBalance</li>
              <li>account4</li>
              <li>_42</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <p className="font-semibold text-red-700 dark:text-red-400 mb-2">❌ 유효하지 않은 변수명</p>
            <ul className="text-sm space-y-1 font-mono">
              <li>current-balance (하이픈 사용 불가)</li>
              <li>current balance (빈칸 사용 불가)</li>
              <li>4account (숫자로 시작 불가)</li>
              <li>TOTAL_$UM ($ 특수문자 사용 불가)</li>
            </ul>
          </div>
        </div>

        <h3>변수 활용 예시</h3>
        <CodeBlock code={`# 다양한 변수 할당 방법
var1 = 'Python'
var2 = 12345
var3 = ['a', 'b', 'c', 'd', 'e']
data = {'a': 1, 'b': 2, 'c': 3}

# 튜플을 활용한 동시 할당
a, b = ('python', 'variable')  # a = 'python', b = 'variable'
a, b = ['python', 'variable']  # 동일하게 동작

# 같은 값 여러 변수에 할당
a = b = 1234  # a = 1234, b = 1234

# 변수 값 교환 (파이썬 특유 문법)
a, b = b, a  # 두 변수의 값이 바로 바뀜`} language="python" />
      </section>

      <section>
        <h2>네이밍 컨벤션</h2>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg">
            <p className="font-semibold mb-2 font-mono">camelCase</p>
            <p className="text-sm">personAge → 두 번째 단어부터 대문자</p>
          </div>
          <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg">
            <p className="font-semibold mb-2 font-mono">PascalCase</p>
            <p className="text-sm">PersonAge → 모든 단어 대문자 시작</p>
          </div>
          <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg">
            <p className="font-semibold mb-2 font-mono">snake_case</p>
            <p className="text-sm">person_age → 파이썬 공식 스타일 (추천)</p>
          </div>
          <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg">
            <p className="font-semibold mb-2 font-mono">kebab-case</p>
            <p className="text-sm">person-age → 하이픈으로 구분</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2>연습문제</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">초를 시:분:초 형태로 변환하기</p>
          <CodeBlock code={`# 전체 시간 (3703초)
sec = 3703

# print(f'{hour}시간 {minute}분 {second}초') → 1시간 1분 43초
hour = sec // 3600
minute = (sec % 3600) // 60
second = sec % 60

print(f'{hour}시간 {minute}분 {second}초')`} language="python" />
        </div>
      </section>
    </div>
  )
}