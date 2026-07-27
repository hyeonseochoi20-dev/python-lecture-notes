import CodeBlock from '../components/CodeBlock.jsx'

export default function ExceptionHandling() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>09. 예외처리</h1>

      <section className="mb-12">
        <h2>예외 종류</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-2">에러</th>
              <th className="text-left p-2">발생 상황</th>
              <th className="text-left p-2">예시 코드</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>ZeroDivisionError</code></td>
              <td className="p-2">0으로 나누기</td>
              <td className="p-2"><code>2 / 0</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>IndexError</code></td>
              <td className="p-2">인덱스 범위 초과</td>
              <td className="p-2"><code>[][0]</code></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2"><code>TypeError</code></td>
              <td className="p-2">타입 불일치</td>
              <td className="p-2"><code>4 + ""</code></td>
            </tr>
            <tr>
              <td className="p-2"><code>FileNotFoundError</code></td>
              <td className="p-2">파일 없음</td>
              <td className="p-2"><code>open('없는파일.txt', 'r')</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2>예외 처리 문법</h2>

        <h3>작성 형태 3가지</h3>
        <CodeBlock code={`# 형태 1: 모든 예외 처리
try:
    실행할 코드
except:
    예외 발생 시 처리

# 형태 2: 특정 예외만 처리
try:
    실행할 코드
except ZeroDivisionError:
    0나누기 예외 처리

# 형태 3: 예외 메시지 변수로 받기
try:
    실행할 코드
except FileNotFoundError as e:
    print(f'파일이 없습니다: {e}')`} language="python" />

        <h3>실제 사용 예시</h3>
        <CodeBlock code={`try:
    print(2 / 0)
except ZeroDivisionError as e:
    print('예외 발생')
    print(e)  # division by zero

try:
    my_list = []
    print(my_list[0])
except IndexError as e:
    print('인덱스 오류')

try:
    with open('python.txt', 'r') as f:
        content = f.read()
except FileNotFoundError as e:
    print('파일 없음:', e)`} language="python" />
      </section>

      <section className="mb-12">
        <h2>예외 처리 심화</h2>
        <CodeBlock code={`# 여러 예외 한번에 처리
try:
    result = 10 / 0
except (ZeroDivisionError, IndexError) as e:
    print(f'오류 처리: {e}')

# else와 finally
try:
    f = open('data.txt', 'r')
    data = f.read()
except FileNotFoundError:
    print('파일 없음')
else:
    print('파일 읽기 성공')
finally:
    print('항상 실행 (정리 작업)')
    f.close()`} language="python" />

        <h3>의도적 오류 발생</h3>
        <CodeBlock code={`# raise로 강제 예외 발생
def validate_age(age):
    if age < 0:
        raise ValueError('나이는 음수일 수 없습니다')
    if age > 150:
        raise ValueError('나이가 너무 큽니다')
    return f'{age}세'

# 사용
try:
    validate_age(-5)
except ValueError as e:
    print(e)  # 나이는 음수일 수 없습니다`} language="python" />
      </section>

      <section>
        <h2>사용자 정의 예외</h2>
        <CodeBlock code={`# 사용자 정의 예외 클래스
class CustomError(Exception):
    def __init__(self, message):
        self.message = message

# 사용 예시
def check_password(password):
    if len(password) < 8:
        raise CustomError('비밀번호는 8자 이상이어야 합니다')
    return '비밀번호 확인'

try:
    check_password('123')
except CustomError as e:
    print(e.message)`} language="python" />
      </section>
    </div>
  )
}