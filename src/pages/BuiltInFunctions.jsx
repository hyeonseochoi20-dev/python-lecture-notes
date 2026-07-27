import CodeBlock from '../components/CodeBlock.jsx'

export default function BuiltInFunctions() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>05. 내장함수</h1>

      <section className="mb-12">
        <h2>수학/계산 관련</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">함수</th>
              <th className="text-left p-2">설명</th>
              <th className="text-left p-2">예시</th>
            </tr>
          </thead>
          <tbody className="text-sm font-mono">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>abs(x)</code></td>
              <td className="p-2">절댓값</td>
              <td className="p-2"><code>abs(-7) → 7</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>divmod(a, b)</code></td>
              <td className="p-2">몫과 나머지 튜플 반환</td>
              <td className="p-2"><code>divmod(7, 3) → (2, 1)</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>max(iterable)</code></td>
              <td className="p-2">최댓값</td>
              <td className="p-2"><code>max([90, 80, 70]) → 90</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>min(iterable)</code></td>
              <td className="p-2">최솟값</td>
              <td className="p-2"><code>min([90, 80, 70]) → 70</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>sum(iterable)</code></td>
              <td className="p-2">합계</td>
              <td className="p-2"><code>sum([90, 80, 70]) → 240</code></td>
            </tr>
            <tr>
              <td className="p-2"><code>pow(x, y)</code></td>
              <td className="p-2">거듭제곱</td>
              <td className="p-2"><code>pow(2, 3) → 8</code></td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`# 사용 예시
scores = [90, 80, 70]
print(max(scores))  # 90
print(min(scores))  # 70
print(sum(scores))  # 240

# 형변환
print(int(3.7))    # 3 (정수로 변환)
print(float(5))    # 5.0 (실수로 변환)
print(str(123))    # '123' (문자열로 변환)`} language="python" />
      </section>

      <section className="mb-12">
        <h2>형 변환 관련</h2>
        <CodeBlock code={`# 정수로 변환
int('123')     # 123
int(3.7)       # 3
int(0xFF)      # 255 (16진수)

# 실수로 변환
float('3.14')  # 3.14
float(10)      # 10.0

# 문자열로 변환
str(123)       # '123'
str([1, 2, 3]) # '[1, 2, 3]'`} language="python" />
      </section>

      <section>
        <h2>연습문제</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">거리 계산 함수</p>
          <CodeBlock code={`def distance(start, end):
    """시작점과 끝점 좌표 거리 계산"""
    dx = abs(end[0] - start[0])
    dy = abs(end[1] - start[1])
    return dx, dy

# 사용 예
start = (1, 1)
end = (5, 3)
dx, dy = distance(start, end)
print(f'dx: {dx}, dy: {dy}')  # dx: 4, dy: 2`} language="python" />
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
          <p className="font-semibold mb-2">몫과 나머지 구하기</p>
          <CodeBlock code={`a = 123
b = 16
quotient, remain = divmod(a, b)
print(f'몫: {quotient}, 나머지: {remain}')  # 몫: 7, 나머지: 11`} language="python" />
        </div>
      </section>
    </div>
  )
}