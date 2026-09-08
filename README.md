# Learning Log

개발 공부를 하며 만든 과제와 실습 결과물, 포트폴리오를 모아두는 저장소입니다.
<br>
학습 기록은 [TIL 레포](https://github.com/staytraveler/TIL)에서 확인하실 수 있습니다.

## 📝 과제

<details>
<summary>HTML 과제(20260903)</summary>

- 📄 [코드 보기](./2026-bootcamp-sesac/html_css_practice/html-practice.html)
- 🖼️ [이미지 보기](./2026-bootcamp-sesac/screenshots/html-practice-screenshot.png)

**💡 배운 점**
- 시맨틱 태그(header, main, section, footer)로 구조화하는 습관
- `label`의 `for`와 `input`의 `id`를 연결하면 라벨 클릭만으로 입력창에 포커스가 가고, 스크린 리더도 어떤 입력창인지 정확히 인식함
- `strong`/`em`은 `b`/`i`와 겉보기엔 같아 보여도 "의미"를 담고 있어서, 스크린 리더는 톤을 다르게 읽고 검색엔진/AI는 중요도 판단에 활용함
- radio는 `name`을 같게 줘야 하나만 선택되는 그룹으로 묶이고, checkbox는 `name`이 같아도 여러 개 선택 가능하다는 차이를 확인함

</details>

<details>
<summary>CSS 과제(20260904)</summary>

- 📄 [코드 보기](./2026-bootcamp-sesac/html_css_practice/css-practice.html)
- 🖼️ [이미지 보기](./2026-bootcamp-sesac/screenshots/css-practice-screenshot.png)

**💡 배운 점**
- CSS 스타일을 지정하기 전에 `:root`에서 컬러 변수를 미리 정해두면 톤앤매너를 통일하고 관리하기 훨씬 편함
- `<a>` 태그는 기본이 inline이라 `transform`, `width`/`height` 같은 속성이 제대로 안 먹혀서, `display: inline-block`으로 바꿔야 hover 애니메이션이 정상 작동함
- 이미지에 `width`/`height`를 고정값으로 박아두면 화면이 좁아져도 그대로 유지돼서 튀어나가므로, `max-width: 100%; height: auto;`로 바꿔야 화면 크기에 맞게 자연스럽게 줄어듦
- `<pre>`, `table`처럼 줄바꿈/고정폭 성질이 있는 태그들은 반응형에서 특히 깨지기 쉬워서, `white-space: pre-wrap`이나 `overflow-x: auto` 같은 처리를 별도로 신경 써야 함
- 스타일을 다 짜고 나서 반응형을 나중에 끼워 맞추기보다, 처음부터 화면이 좁아질 경우를 염두에 두고 스타일을 입히는 게 훨씬 수월하다는 걸 느낌

</details>

<details>
<summary>JS function 연습문제(20260908)</summary>

- 📄 [코드 보기](./2026-bootcamp-sesac/js_function_practice/js_practice.js)

**💡 배운 점**
- 함수 선언할때 function 을 안쓰고 시작하는 실수..
- 여러개의 함수가 콜백으로도 쓰이면서 중간에 정작 인자값을 내부 함수에 하나 빠뜨려 안적는 실수등이 있어서 오류가 생겼었다.

## 🔗 포트폴리오

- [추가예정](#) — 설명
