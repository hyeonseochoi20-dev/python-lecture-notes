import CodeBlock from '../components/CodeBlock.jsx'

export default function ControlFlow() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>02. 제어문</h1>

      <section className="mb-12">
        <h2>비교 연산자</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">연산자</th>
              <th className="text-left p-2">의미</th>
              <th className="text-left p-2">예시</th>
              <th className="text-left p-2">결과</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>==</code></td>
              <td className="p-2">같음</td>
              <td className="p-2"><code>1 == 1</code></td>
              <td className="p-2">True</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>!=</code></td>
              <td className="p-2">다름</td>
              <td className="p-2"><code>1 != 1</code></td>
              <td className="p-2">False</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>&lt;</code></td>
              <td className="p-2">작음</td>
              <td className="p-2"><code>3 &lt; 4</code></td>
              <td className="p-2">True</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>&gt;</code></td>
              <td className="p-2">큼</td>
              <td className="p-2"><code>3 &gt; 4</code></td>
              <td className="p-2">False</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>&lt;=</code></td>
              <td className="p-2">작거나 같음</td>
              <td className="p-2"><code>8 &lt;= 9</code></td>
              <td className="p-2">True</td>
            </tr>
            <tr>
              <td className="p-2"><code>&gt;=</code></td>
              <td className="p-2">크거나 같음</td>
              <td className="p-2"><code>8 &gt;= 9</code></td>
              <td className="p-2">False</td>
            </tr>
          </tbody>
        </table>

        <h3>논리 연산자</h3>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">연산자</th>
              <th className="text-left p-2">의미</th>
              <th className="text-left p-2">예시</th>
              <th className="text-left p-2">결과</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>and</code></td>
              <td className="p-2">그리고 (모두 참)</td>
              <td className="p-2"><code>True and True</code></td>
              <td className="p-2">True</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>or</code></td>
              <td className="p-2">또는 (하나라도 참)</td>
              <td className="p-2"><code>False or True</code></td>
              <td className="p-2">True</td>
            </tr>
            <tr>
              <td className="p-2"><code>not</code></td>
              <td className="p-2">부정</td>
              <td className="p-2"><code>not True</code></td>
              <td className="p-2">False</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2>조건문 (Conditional)</h2>
        <p>if-elif-else 구조로 프로그램 흐름 제어</p>

        <CodeBlock code={`# if 문 기본 구조
if 조건식:
    수행할 문장
elif 다른조건식:
    수행할 문장
else:
    모든 조건에 맞지 않을 때 실행`} language="python" />

        <h3>연습문제: 평년/윤년 판별</h3>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">윤년 규칙</p>
          <ul className="text-sm mb-3">
            <li>조건 1) 4로 나누어 떨어지면 "윤년"</li>
            <li>조건 2) 100으로 나누어 떨어지면 "평년" (예외)</li>
            <li>조건 3) 400으로 나누어 떨어지면 "윤년" (예외의 예외)</li>
            <li>조건 4) 그 외는 "평년"</li>
          </ul>
          <CodeBlock code={`year = 2024

if year % 400 == 0:
    print("윤년")
elif year % 100 == 0:
    print("평년")
elif year % 4 == 0:
    print("윤년")
else:
    print("평년")`} language="python" />
        </div>
      </section>

      <section className="mb-12">
        <h2>반복문 (Loop)</h2>

        <h3>while 반복문</h3>
        <CodeBlock code={`# while: 조건이 참일 때 반복
count = 0
while count < 5:
    print(count)
    count += 1  # 무한 루프 방지 필수!`} language="python" />

        <h3>for 반복문</h3>
        <CodeBlock code={`# for: 리스트, 범위 등을 순회
# range(시작, 끝, 단계)
for i in range(1, 11):
    print(i, end=' ')  # 1 2 3 4 5 6 7 8 9 10

# 리스트 순회
fruits = ['사과', '바나나', '오렌지']
for fruit in fruits:
    print(fruit)`} language="python" />

        <h3>페이징 공식</h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
          <p className="text-sm"><strong>페이지 네비게이션 계산:</strong></p>
          <p className="font-mono text-sm">첫 페이지 = (현재 페이지 - 1) // 10 * 10 + 1</p>
          <p className="font-mono text-sm">마지막 페이지 = 첫 페이지 + 9</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">예: 16페이지 → 첫 페이지 = (16-1)//10*10+1 = 11</p>
        </div>
      </section>

      <section>
        <h2>연습문제: 알람 시계</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">시간에서 45분 빼기</p>
          <ul className="text-sm mb-3">
            <li>입력: "14 45" → 출력: "14 00"</li>
            <li>입력: "23 40" → 출력: "22 55"</li>
            <li>입력: "0 30" → 출력: "23 45"</li>
          </ul>
          <CodeBlock code={`value = input().strip().split()
h = int(value[0])
m = int(value[1])

# 45분 빼기
m -= 45

# 분이 음수면 시간 조정
if m < 0:
    m += 60
    h -= 1
    if h < 0:
        h = 23

print(f'{h} {m}')`} language="python" />
        </div>
      </section>
    </div>
  )
}