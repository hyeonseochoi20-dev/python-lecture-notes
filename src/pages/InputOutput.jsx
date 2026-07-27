import CodeBlock from '../components/CodeBlock.jsx'

export default function InputOutput() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>04. 입력/출력</h1>

      <section className="mb-12">
        <h2>사용자 입력</h2>
        <p><code>input()</code> 함수는 항상 문자열로 저장됩니다</p>

        <CodeBlock code={`# 기본 입력
text = input()
print(text)
print(type(text))  # <class 'str'>

# 안내문구와 함께 입력
text = input('내용을 입력해주세요: ')
print(text)`} language="python" />

        <h3>숫자 입력 처리</h3>
        <CodeBlock code={`# 두 수 입력받아 덧셈
input1 = input('숫자1 입력: ')
input2 = input('숫자2 입력: ')
result = int(input1) + int(input2)
print('덧셈결과:', result)

# 여러 숫자 한 줄에 입력
text = input('입력: ')  # "23, 24, 1, 9, 11, 26"
numbers = list(map(int, text.split(', ')))
total = sum(numbers)
print('합계:', total)`} language="python" />
      </section>

      <section className="mb-12">
        <h2>출력</h2>
        <CodeBlock code={`# 기본 출력
num = 123
print(num)

# 여러 값 출력 (공백/줄바꿈 제어)
print('Life', 'is', 'too', 'short')  # Life is too short
print('Life', 'is', 'too', 'short', end=' ')  # 한 줄에 출력

# 반복문과 함께
for i in range(1, 11):
    print(str(i) + '번째', end=' ')  # 1번째 2번째 3번째 ...`} language="python" />
      </section>

      <section className="mb-12">
        <h2>파일 입출력</h2>

        <h3>텍스트 파일 읽기</h3>
        <CodeBlock code={`# read(): 내용 전체
f = open('file.txt', 'rt')
content = f.read()
f.close()

# readline(): 한 줄씩
f = open('file.txt', 'rt')
line = f.readline()  # 첫 줄만
f.close()

# readlines(): 리스트로 반환
f = open('file.txt', 'rt')
lines = f.readlines()  # 모든 줄을 리스트
f.close()

# for 루프로 한 줄씩
f = open('file.txt', 'rt')
for line in f:
    print(line.strip())
f.close()`} language="python" />

        <h3>자동 close: with문</h3>
        <CodeBlock code={`# with: 자동으로 파일 닫기
with open('file.txt', 'rt') as f:
    content = f.read()
# f.close() 필요 없음!

# 인코딩 지정 (한글 파일)
with open('소나기.txt', 'rt', encoding='utf8') as f:
    text = f.read()
# ms949/cp949도 가능`} language="python" />

        <h3>파일 쓰기</h3>
        <CodeBlock code={`# 기존 내용 지우고 새로 쓰기 (w 모드)
with open('output.txt', 'w', encoding='utf8') as f:
    f.write('새로운 내용')

# 기존 내용 유지하고 이어쓰기 (a 모드)
with open('log.txt', 'a', encoding='utf8') as f:
    f.write('로그 추가\\n')

# 여러 줄 쓰기
lines = ['첫째 줄', '둘째 줄', '셋째 줄']
with open('output.txt', 'w') as f:
    f.writelines([f'{line}\\n' for line in lines])`} language="python" />
      </section>

      <section>
        <h2>연습문제</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">시스템 로그 파일 생성</p>
          <CodeBlock code={`# system.log 파일에 로그 누적 저장
import datetime

current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

log_messages = [
    "사용자가 관리자 페이지에 로그인했습니다.",
    "데이터베이스 연결에 성공했습니다.",
    "경고: 디스크 용량이 80% 이상 채워졌습니다.",
    "에러: 파일 업로드 중 예기치 못한 오류가 발생했습니다."
]

with open('system.log', 'a', encoding='utf8') as f:
    for msg in log_messages:
        f.write(f"[{current_time}] {msg}\\n")`} language="python" />
        </div>
      </section>
    </div>
  )
}