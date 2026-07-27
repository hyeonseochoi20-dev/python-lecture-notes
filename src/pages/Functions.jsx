import CodeBlock from '../components/CodeBlock.jsx'

export default function Functions() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>03. 함수</h1>

      <section className="mb-12">
        <h2>함수란?</h2>
        <p>입력값을 받아 정의된 절차를 수행하고 결과를 반환하는 것</p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
          <p className="font-semibold mb-2">📌 함수 사용 이유</p>
          <ul className="text-sm">
            <li>반복되는 코드 수 줄이기</li>
            <li>남이 만든 기능 쉽게 활용</li>
            <li>팀 협업/분업 가능</li>
            <li>코드 수정 시 유지보수 용이</li>
          </ul>
        </div>

        <h3>함수 정의 구조</h3>
        <CodeBlock code={`def 함수명(매개변수):
    수행할 문장
    return 결과값`} language="python" />

        <h3>두 수를 더하는 함수 예시</h3>
        <CodeBlock code={`def plus(a, b):
    return a + b

# 함수 호출
result = plus(10, 5)
print(result)  # 15`} language="python" />

        <h3>매개변수 활용</h3>
        <CodeBlock code={`# 인자를 직접 지정
def total(a, b, c):
    return a + b + c

result = total(a=90, b=80, c=70)

# 가변 인자 (*args)
def total(*args):  # 튜플로 전달
    total = 0
    for n in args:
        total += n
    return total

print(total(1, 2, 3))      # 6
print(total(1, 2, 3, 4, 5)) # 15`} language="python" />
      </section>

      <section className="mb-12">
        <h2>변수의 유효범위</h2>
        <CodeBlock code={`# 전역변수 vs 지역변수
전역변수 = 500

class MyClass:
    클래스변수 = 100

    def __init__(self):
        self.인스턴스변수 = 10

    def 인스턴스메소드(self):
        self.인스턴스변수 += 10

    @staticmethod
    def 정적메소드():
        지역변수 = 100
        print(f"함수동작 {지역변수}")

    @classmethod
    def 클래스메소드(cls):
        print(cls.클래스변수)

# 인스턴스 생성
객체1 = MyClass()
객체1.인스턴스메소드()  # 인스턴스변수 = 20`} language="python" />
      </section>

      <section className="mb-12">
        <h2>Lambda (람다 함수)</h2>
        <p>간결한 함수 표현: 함수명 = lambda 매개변수: 반환값</p>

        <CodeBlock code={`# 일반 함수
def minus(a, b):
    return a - b

# 람다 함수
minus = lambda a, b: a - b

print(minus(10, 3))  # 7

# 리스트 필터링에 유용
myfunc = lambda numbers: [n for n in numbers if n > 5]
result = myfunc([2, 3, 4, 5, 6, 7, 8])
print(result)  # [6, 7, 8]`} language="python" />
      </section>

      <section>
        <h2>연습문제: 팩토리얼</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">재귀 호출로 팩토리얼 구현</p>
          <CodeBlock code={`# 팩토리얼: n! = n × (n-1)!
# 0! = 1 (기저 조건)

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

# 한 줄 람다로 표현
factorial = lambda n: 1 if n <= 1 else n * factorial(n - 1)`} language="python" />
        </div>
      </section>
    </div>
  )
}