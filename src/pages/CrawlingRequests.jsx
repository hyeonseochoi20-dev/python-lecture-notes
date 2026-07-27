import CodeBlock from '../components/CodeBlock.jsx'

export default function CrawlingRequests() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>10-1. Requests 크롤링</h1>

      <section className="mb-12">
        <h2>URL 구조</h2>
        <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg font-mono text-sm">
          <p className="mb-2">
            <code>https://news.naver.com:80/main/read.naver?mode=LSD&mid=shm#section</code>
          </p>
          <ul className="space-y-1 text-xs">
            <li><strong>https://</strong> - Protocol (프로토콜)</li>
            <li><strong>news</strong> - Sub Domain (서브도메인)</li>
            <li><strong>naver.com</strong> - Domain (도메인)</li>
            <li><strong>:80</strong> - Port (포트)</li>
            <li><strong>/main/</strong> - Path (경로)</li>
            <li><strong>?mode=LSD&mid=shm</strong> - Query String (파라미터)</li>
            <li><strong>#section</strong> - Fragment (프래그먼트)</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2>크롤링 절차</h2>
        <div className="not-prose grid md:grid-cols-3 gap-4 my-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">1️⃣</div>
            <p className="font-semibold">Request 보내기</p>
            <p className="text-xs">원하는 URL에 요청</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">2️⃣</div>
            <p className="font-semibold">Parsing</p>
            <p className="text-xs">받은 데이터 해석</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">3️⃣</div>
            <p className="font-semibold">추출하기</p>
            <p className="text-xs">필요한 정보만 추출</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Requests vs Selenium</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">방법</th>
              <th className="text-left p-2">장점</th>
              <th className="text-left p-2">단점</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>requests</code></td>
              <td className="p-2">매우 빠름</td>
              <td className="p-2">동적 페이지 처리 불가</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>requests + BeautifulSoup</code></td>
              <td className="p-2">HTML 파싱 용이</td>
              <td className="p-2">정적 페이지만 가능</td>
            </tr>
            <tr>
              <td className="p-2"><code>selenium</code></td>
              <td className="p-2">브라우저 직접 제어, 동적 페이지 OK</td>
              <td className="p-2">속도 느림, 설정 복잡</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2>requests 기본 사용법</h2>
        <CodeBlock code={`# 설치
# pip install requests

# 모듈 import
import requests as req

# GET 요청
response = req.get('https://api.github.com/users/octocat')
print(response.status_code)  # 200 (성공)

# 응답 텍스트
text = req.get('http://ggoreb.com/python/file/소나기.txt').text

# 인코딩 지정 (한글 파일)
response = req.get('http://example.com/korean')
response.encoding = 'utf8'
content = response.text`} language="python" />
      </section>

      <section>
        <h2>API 활용 예시</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">영화 검색 API</p>
          <CodeBlock code={`import requests as req

API_KEY = 'cba95d401a14ab806ffc13a5052aab89'
URL = 'https://api.themoviedb.org/3/search/movie'

params = {
    'api_key': API_KEY,
    'query': '서울',
    'language': 'ko-KR'
}

response = req.get(URL, params=params)
data = response.json()

# 결과 확인
for movie in data['results'][:5]:
    print(f"🎬 {movie['title']}")

# 포스터 이미지
poster_url = f"https://image.tmdb.org/t/p/w185{movie['poster_path']}"`} language="python" />
        </div>
      </section>

      <section className="mt-12">
        <h2>실습 예시: 야구게임</h2>
        <CodeBlock code={`import requests as req

# 정답 가져오기
res = req.get('http://ggoreb.com/quiz/baseball.txt')
정답 = [res.text[0], res.text[1], res.text[2]]

# 사용자 입력
입력 = list(input('숫자 3자리 입력: '))

strike, ball = 0, 0
for i in range(3):
    if 정답[i] == 입력[i]:
        strike += 1
    elif 정답[i] in 입력:
        ball += 1

print(f'{strike}S {ball}B')`} language="python" />
      </section>
    </div>
  )
}