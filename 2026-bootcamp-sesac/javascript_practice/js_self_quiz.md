# JS 배열/문자열/Math 메서드 선택 연습문제

> 목표: 문제(요구사항) 문장에서 **키워드를 캐치해서 "이건 ○○ 메서드 쓸 자리다"를 바로 떠올리는 감각** 훈련
> 스터디 발표용 · 260909 TIL 연계

---

## 사용 데이터

아래 데이터를 모든 문제에서 공통으로 사용합니다.

```javascript
const students = [
    { name: '민수', score: 85, attend: true },
    { name: '지현', score: 62, attend: true },
    { name: '태윤', score: 90, attend: false },
    { name: '유리', score: 45, attend: true },
    { name: '재훈', score: 78, attend: false }
];
```

---

## Part 1. 키워드 스캔 — 요구사항만 보고 메서드 맞히기

아래 요구사항을 읽고, **어떤 메서드가 필요한지만** 먼저 말해보세요. (코드 작성 X, 메서드 이름만)

선택지: `forEach` `map` `filter` `find` `some` `every` `sort` `reduce` `includes` `indexOf` `split` `slice` `trim`

| # | 요구사항 | 주목할 키워드 |
|---|---|---|
| 1 | 출석한 학생만 골라서 새 목록을 만들어라 | ? |
| 2 | 점수가 60점 미만인 학생이 **한 명이라도** 있는지 확인하라 | ? |
| 3 | **모든** 학생이 60점 이상인지 확인하라 | ? |
| 4 | 이름이 '태윤'인 학생 **한 명**을 찾아라 | ? |
| 5 | 학생들의 이름만 뽑아서 새 배열로 만들어라 | ? |
| 6 | 전체 학생의 점수 **합계**를 구하라 | ? |
| 7 | 점수 기준 **내림차순**으로 줄 세워라 | ? |
| 8 | 학생 이름을 화면에 한 명씩 **출력만** 해라 (결과 배열 필요없음) | ? |
| 9 | 이름 목록에 '유리'라는 이름이 **포함되어 있는지** 확인하라 | ? |
| 10 | 아이디 문자열 `'2024-민수-A'`에서 `'-'` 기준으로 **쪼개라** | ? |

> 💡 힌트: "~만 골라라/거르다" → filter / "~하나라도" → some / "전부 다" → every / "~하나를 찾아라" → find / "~로 바꿔라/변환해라" → map / "누적/합계/총합" → reduce / "순서대로/정렬" → sort

<details>
<summary>정답 보기</summary>

1. `filter` (attend 조건 통과하는 것만 "골라서 새 목록")
2. `some` ("한 명이라도")
3. `every` ("모든")
4. `find` ("한 명을 찾아라")
5. `map` (이름만 "뽑아서" 새 배열 = 변형)
6. `reduce` (합계 = 누적)
7. `sort` (콜백 `(a,b) => b.score - a.score`)
8. `forEach` (반환 배열 필요없이 출력만)
9. `includes` (포함 여부, boolean)
10. `split` (문자열 쪼개기)

</details>

---

## Part 2. 실전 코드 — 요구사항 → 코드 작성

실제로 `students` 배열을 갖고 코드를 짜보세요. 정답은 예시 하나일 뿐, 비슷하게만 짜도 OK.

### 2-1. 출석 명단 만들기
> "출석(`attend: true`)한 학생의 **이름만** 담긴 배열을 만드시오."

- 힌트: 두 개의 메서드를 체이닝해야 함

<details>
<summary>정답 보기</summary>

```javascript
const attendNames = students
    .filter(student => student.attend)
    .map(student => student.name);
```
</details>

---

### 2-2. 합격자 판단
> "점수가 70점 이상인 학생이 **한 명이라도** 있으면 `'합격자 있음'`을, 없으면 `'전원 미달'`을 출력하시오."

<details>
<summary>정답 보기</summary>

```javascript
if (students.some(student => student.score >= 70)) {
    console.log('합격자 있음');
} else {
    console.log('전원 미달');
}
```
</details>

---

### 2-3. 전체 통과 여부
> "**모든** 학생의 점수가 40점을 넘는지 확인해서 boolean으로 출력하시오."

<details>
<summary>정답 보기</summary>

```javascript
console.log(students.every(student => student.score > 40));
```
</details>

---

### 2-4. 특정 학생 조회
> "이름이 `'재훈'`인 학생을 찾아 그 학생의 점수만 출력하시오. 단, 해당 학생이 없을 경우에도 에러가 나지 않게 하시오."

- 힌트: 없을 수도 있다는 가정 → 옵셔널 체이닝

<details>
<summary>정답 보기</summary>

```javascript
console.log(students.find(student => student.name === '재훈')?.score);
```
</details>

---

### 2-5. 평균 점수 계산
> "전체 학생의 **평균 점수**를 구하시오. (반올림해서 정수로 출력)"

- 힌트: 합계 메서드 + Math 메서드 조합

<details>
<summary>정답 보기</summary>

```javascript
const total = students.reduce((sum, current) => sum + current.score, 0);
const average = Math.round(total / students.length);
console.log(average);
```
</details>

---

### 2-6. 등수 매기기
> "점수가 **높은 순서대로** 정렬한 뒤, 이름과 점수를 `'1등: 태윤 (90점)'` 형식으로 전부 출력하시오."

- 힌트: 정렬 메서드 + 반복 메서드, 원본 배열이 바뀌는 부작용 주의

<details>
<summary>정답 보기</summary>

```javascript
const ranked = [...students].sort((a, b) => b.score - a.score);
ranked.forEach((student, index) => {
    console.log(`${index + 1}등: ${student.name} (${student.score}점)`);
});
```

> 💡 `[...students]`로 복사본을 만든 이유: `sort()`는 원본 배열을 직접 변경(mutate)하기 때문에, 원본 순서를 보존하고 싶다면 얕은 복사 후 정렬해야 함.
</details>

---

### 2-7. 미출석자 존재 여부 + 조건부 메시지
> "결석한 학생이 있는지 확인해서, 있다면 결석 학생들의 이름을 쉼표로 이어붙여 출력하시오. (예: `'태윤, 재훈'`)"

- 힌트: 조건 확인 메서드 + 변형 메서드 + 문자열 합치기

<details>
<summary>정답 보기</summary>

```javascript
const absentees = students.filter(student => !student.attend);

if (absentees.length > 0) {
    const names = absentees.map(student => student.name);
    console.log(names.join(', '));
}
```

> 참고: `join()`은 오늘 안 다뤘지만 `map`으로 뽑은 이름 배열을 문자열로 합칠 때 자주 같이 씀 
</details>

---

### 2-8. 태그 문자열 파싱
> "문자열 `'#민수#지현#태윤'`을 `#` 기준으로 쪼개고, **빈 문자열은 제외**해서 이름 배열로 만드시오."

<details>
<summary>정답 보기</summary>

```javascript
const raw = '#민수#지현#태윤';
const names = raw.split('#').filter(tag => tag !== '');
console.log(names); // ['민수', '지현', '태윤']
```
</details>

---

## Part 3. 함정 문제 — "느낌상 맞을 것 같지만 틀린" 코드 찾기

아래 코드들은 요구사항과 안 맞거나 버그가 있습니다. 뭐가 문제인지 짚어보세요.

### 3-1.
> 요구사항: "점수 오름차순으로 정렬하시오."
```javascript
students.sort();
```
<details>
<summary>문제점 보기</summary>

콜백 없이 `sort()`만 호출하면 요소(객체)를 **문자열로 변환해서 비교**하려고 시도함 → 객체는 `"[object Object]"`로 변환되어 사실상 정렬 의미가 없어짐. `(a, b) => a.score - b.score` 콜백이 반드시 필요.
</details>

### 3-2.
> 요구사항: "60점 이상인 학생만 추려서 이름 배열을 만드시오."
```javascript
const result = students.map(student => student.score >= 60);
```
<details>
<summary>문제점 보기</summary>

`map`은 "각 요소를 변형"할 뿐 **개수를 줄이지 않음**. 이 코드는 `[true, true, true, false, true]`처럼 boolean 배열만 만들 뿐, "추려서(거르기)"라는 요구사항엔 `filter`가 필요함. 그리고 이름을 뽑으라 했으니 `filter` 후 `map`까지 이어져야 함.
</details>

### 3-3.
> 요구사항: "전체 학생 수를 세시오."
```javascript
const count = students.filter(student => true).length;
```
<details>
<summary>문제점 보기</summary>

동작은 하지만 불필요한 `filter` 호출. 그냥 `students.length`로 충분함 — "조건 없이 다 통과시키는 filter"는 과한 코드라는 걸 캐치하는 연습.
</details>

### 3-4.
> 요구사항: "이름이 '민수'인 학생이 있는지 확인하시오."
```javascript
const result = students.find(student => student.name === '민수');
if (result) {
    console.log('있음');
}
```
<details>
<summary>문제점 보기</summary>

틀린 코드는 아니지만, boolean만 필요한 상황에서 `find`(객체 통째로 반환)를 쓰고 `if`로 truthy 체크하는 건 의도가 덜 명확함. "있는지 확인"이라는 표현 자체가 `some`을 쓰라는 신호에 더 가까움:
```javascript
const exists = students.some(student => student.name === '민수');
```
</details>

