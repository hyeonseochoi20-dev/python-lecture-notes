import CodeBlock from '../components/CodeBlock.jsx'

export default function Classes() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>08. 클래스</h1>

      <section className="mb-12">
        <h2>클래스란?</h2>
        <p>객체지향의 기본 개념: 관련된 속성(모습)과 동작(기능)을 하나로 묶음</p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
          <p className="font-semibold mb-2">📌 클래스의 구성</p>
          <ul className="text-sm">
            <li><strong>클래스 (Class)</strong>: 설계도면</li>
            <li><strong>객체 (Object)</strong>: 설계도에 의해 만든 완성품</li>
            <li><strong>인스턴스 (Instance)</strong>: 객체와 같은 의미</li>
          </ul>
        </div>

        <h3>클래스 정의 예시</h3>
        <CodeBlock code={`# 자동차 클래스 예시
전역변수 = 500

class 자동차:
    클래스변수 = 100

    def __init__(self, 색상):  # 생성자
        self.색상 = 색상          # 인스턴스 변수
        self.속도 = 0

    def 가속(self, amount):     # 인스턴스 메소드
        self.속도 += amount

    def 멈추다(self):
        self.속도 = 0

    @staticmethod
    def 경고():                 # 정적 메소드 (인스턴스 필요 없음)
        print('경고음')

    @classmethod
    def 정보(cls):                # 클래스 메소드
        print(f'클래스 변수: {cls.클래스변수}')

# 인스턴스 생성
my_car = 자동차('빨강')
my_car.가속(30)
print(my_car.속도)  # 30`} language="python" />
      </section>

      <section className="mb-12">
        <h2>클래스 활용 이유</h2>
        <div className="grid md:grid-cols-3 gap-4 my-4">
          <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🆕</div>
            <p className="font-semibold">새로운 자료형</p>
          </div>
          <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🔧</div>
            <p className="font-semibold">기능의 집합</p>
          </div>
          <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">👨‍👦</div>
            <p className="font-semibold">상속으로 확장</p>
          </div>
        </div>

        <h3>상속 예시</h3>
        <CodeBlock code={`class 전기차(자동차):  # 상속
    def 충전(self):
        print('배터리 충전 중...')

ev = 전기차('파랑')
ev.가속(50)  # 부모 메소드 사용 가능
ev.충전()   # 자식 고유 메소드`} language="python" />
      </section>

      <section>
        <h2>연습문제</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">학생 성적 관리 클래스 만들기</p>
          <CodeBlock code={`class 학생:
    학교 = '스마트조선고등학교'

    def __init__(self, 이름, 국어, 영어, 수학):
        self.이름 = 이름
        self.국어 = 국어
        self.영어 = 영어
        self.수학 = 수학

    def 총점(self):
        return self.국어 + self.영어 + self.수학

    def 평균(self):
        return self.총점() / 3

    def 등급(self):
        avg = self.평균()
        if avg >= 90: return 'A'
        if avg >= 80: return 'B'
        if avg >= 70: return 'C'
        return 'F'

# 사용 예
student = 학생('김철수', 90, 85, 92)
print(f'{student.이름} 총점: {student.총점()}점')
print(f'평균: {student.평균():.1f}점, 등급: {student.등급()}')`} language="python" />
        </div>
      </section>
    </div>
  )
}