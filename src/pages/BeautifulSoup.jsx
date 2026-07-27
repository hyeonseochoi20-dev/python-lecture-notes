import CodeBlock from '../components/CodeBlock.jsx'

export default function BeautifulSoup() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>10-3. BeautifulSoup</h1>

      <section className="mb-12">
        <h2>BeautifulSoup란?</h2>
        <p>HTML/XML 파싱을 쉽게 해주는 파이썬 라이브러리</p>

        <CodeBlock code={`# 설치
# pip install beautifulsoup4

# 기본 사용법
from bs4 import BeautifulSoup as bs
import requests as req

# from html 문자열
soup = bs('<h1>Hello</h1>', 'html.parser')
print(soup.find('h1').text)  # Hello

# from URL
response = req.get('https://python.org')
soup = bs(response.text, 'html.parser')`} language="python" />
      </section>

      <section className="mb-12">
        <h2>요소 선택 방법</h2>

        <h3>find() / find_all() - 메서드 방식</h3>
        <CodeBlock code={`# 1개 찾기
soup.find('div')           # 첫 번째 div만
soup.find('p', class_='intro')  # class가 intro인 p

# N개 찾기
all_spans = soup.find_all('span')  # 모든 span 리스트
all_links = soup.find_all('a', href=True)  # href 속성이 있는 a

# 속성으로 찾기
soup.find(attrs={'id': 'header'})
soup.find_all(attrs={'class': ['btn', 'active']})`} language="python" />

        <h3>select() / select_one() - CSS 선택자 방식</h3>
        <CodeBlock code={`# CSS 선택자로 찾기 (더 직관적!)
soup.select_one('div > p')        # 첫 번째 div > p
soup.select('ul li.item')        # 모든 ul li.item
soup.select('.container a')      # container 안의 모든 a
soup.select('[data-id="123"]')   # data-id="123"인 요소`} language="python" />
      </section>

      <section className="mb-12">
        <h2>텍스트와 속성 추출</h2>

        <h3>텍스트 추출</h3>
        <CodeBlock code={`# 텍스트 추출 방법
soup.find('h1').text           # 방법 1
soup.find('h1').get_text()     # 방법 2
soup.find('h1').string         # 방법 3

# 공백 제거
soup.find('p').get_text(strip=True)`} language="python" />

        <h3>속성 추출</h3>
        <CodeBlock code={`# 속성 추출 방법
element['href']                # 방법 1
element.attrs['href']          # 방법 2
element.attrs.get('href')      # 방법 3 (안전)

# 다수 속성
element.get_attribute_list('class')  # ['btn', 'active']`} language="python" />
      </section>

      <section>
        <h2>실전 예시: 영화 데이터 추출</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <CodeBlock code={`from bs4 import BeautifulSoup as bs
import requests as req

# HTML 가져오기
response = req.get('https://movie.naver.com')
soup = bs(response.text, 'html.parser')

# 영화 제목 추출
movies = soup.select('.title a')
for movie in movies[:10]:
    title = movie.text
    link = movie['href']
    print(f'{title}: {link}')

# 클래스 속성 추출
divs = soup.find_all('div', class_='movie')
for div in divs:
    title = div.select_one('.title').text
    score = div.select_one('.score').text
    print(f'{title} - {score}점')`} language="python" />
        </div>
      </section>
    </div>
  )
}