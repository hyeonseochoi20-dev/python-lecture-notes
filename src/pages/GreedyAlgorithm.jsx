import CodeBlock from '../components/CodeBlock.jsx'

export default function GreedyAlgorithm() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>그리디 알고리즘 - 1이 될 때까지</h1>

      <section className="mb-12">
        <h2>문제 설명</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">🎯 목표: N을 1로 만들기</p>
          <p>두 가지 연산 중 하나 선택:</p>
          <ol className="mt-2">
            <li>N에서 1을 뺀다</li>
            <li>N이 K로 나누어 떨어지면 N을 K로 나눈다 (조건부)</li>
          </ol>
          <p className="mt-2">최소 연산 횟수를 구하세요!</p>
        </div>

        <h3>예시</h3>
        <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg font-mono">
          <p>N = 17, K = 4 일 때</p>
          <p>1단계) 17 - 1 → 16 (한 번)</p>
          <p>2단계) 16 / 4 → 4 (한 번, K로 나눔)</p>
          <p>3단계) 4 / 4 → 1 (한 번, K로 나눔)</p>
          <p className="font-semibold">총 3번</p>
        </div>
      </section>

      <section className="mb-12">
        <h2>풀이 방법 1: 단순 반복</h2>
        <CodeBlock code={`N, K = 32, 11
count = 0

while N > 1:
    if N % K == 0:
        N //= K
        count += 1
    else:
        N -= 1
        count += 1

print(count)  # 6`} language="python" />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          N이 커지면 매우 비효율적! K로 나눌 때까지 한 번에 빼는 게 좋음
        </p>
      </section>

      <section className="mb-12">
        <h2>풀이 방법 2: 한 번에 빼기</h2>
        <CodeBlock code={`N, K = 32, 11
count = 0

while N > 1:
    if N % K == 0:
        N //= K
        count += 1
    else:
        # 한 번에 빼서 K로 나눔
        remainder = N % K
        N -= remainder  # N = K의 배수
        count += remainder  # remainder만큼 빼므로 remainder회 추가
print(f'결과: {count}')`} language="python" />

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
          <p className="font-semibold mb-2">⚠️ 버그 주의!</p>
          <p className="text-sm">K가 N보다 작아지면 K로 나눌 수 없어서 N-K가 아닌 N-1을 해야 함</p>
        </div>
      </section>

      <section>
        <h2>완성 코드</h2>
        <CodeBlock code={`N, K = map(int, input().split())
count = 0

while N > 1:
    if N % K == 0:
        N //= K
        count += 1
    else:
        # K가 N보다 크면 N-1만큼 빼고 종료
        if N < K:
            count += (N - 1)
            N = 1
            break

        remainder = N % K
        N -= remainder
        count += remainder

print(count)`} language="python" />
      </section>

      <section className="mt-12">
        <h2>학습 포인트</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="font-semibold mb-2">그리디 알고리즘 특징</p>
            <ul className="text-sm">
              <li>매 순간 최적의 선택</li>
              <li>로컬 optima → 글로벌 optima</li>
              <li>증명이 핵심 (항상 최적일까?)</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="font-semibold mb-2">시간 복잡도</p>
            <ul className="text-sm font-mono">
              <li>초기: O(N) - N이 커지면 느림</li>
              <li>개선: O(log N) - K로 나누어질 때까지 한 번에 처리</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}