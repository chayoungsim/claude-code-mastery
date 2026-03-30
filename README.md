# 개발자 웹 이력서 (Developer Web Resume)

사용자 중심의 현대적인 웹 이력서입니다. HTML5, CSS3, JavaScript, TailwindCSS로 제작되었습니다.

## 🚀 주요 특징

- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 다크 모드 토글 (localStorage에 저장)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 타이핑 애니메이션 (Hero 섹션)
- ✅ 스크롤 진입 페이드인 효과
- ✅ 모바일 햄버거 메뉴
- ✅ 스크롤 스파이 (활성 네비게이션)
- ✅ 호버 효과 및 인터랙션
- ✅ SEO 최적화 (메타 태그, 시맨틱 HTML)
- ✅ 접근성 개선 (ARIA, 시맨틱 마크업)

## 📁 프로젝트 구조

```
claude-code-mastery/
├── index.html              # 메인 HTML 파일 (모든 섹션 포함)
├── tailwind.config.js      # TailwindCSS 설정
├── README.md               # 이 파일
├── ROADMAP.md              # 개발 로드맵
├── CLAUDE.md               # Claude Code 가이드
│
├── css/
│   └── style.css           # 커스텀 CSS (애니메이션, 효과)
│
├── js/
│   └── main.js             # 메인 JavaScript (인터랙션)
│
└── assets/
    └── images/             # 이미지 파일 (프로필, 썸네일 등)
```

## 🎨 포함된 섹션

1. **Navigation Bar** - 반응형 네비게이션 + 다크모드 토글
2. **Hero Section** - 프로필 소개 및 CTA 버튼
3. **About Me** - 자기소개 및 개발 철학
4. **Skills** - 기술 스택 (Frontend/Backend/Tools)
5. **Experience** - 경력 사항 (타임라인)
6. **Projects** - 프로젝트 카드
7. **Education** - 학력 정보
8. **Contact** - 연락처 및 소셜 링크
9. **Footer** - 페이지 하단

## 🛠️ 기술 스택

| 항목 | 기술 |
|------|------|
| **HTML** | HTML5 시맨틱 마크업 |
| **CSS** | TailwindCSS + 커스텀 CSS |
| **JavaScript** | Vanilla JavaScript (ES6+) |
| **애니메이션** | CSS 키프레임 + JavaScript Intersection Observer |
| **아이콘** | Inline SVG |
| **폰트** | Google Fonts (Poppins, Roboto) |

## 🚀 시작하기

### 1. 브라우저에서 열기

```bash
# 단순히 index.html을 브라우저에서 열면 됩니다
# npm이나 빌드 도구가 필요하지 않습니다
```

### 2. 내용 커스터마이징

`index.html` 파일에서 다음 항목들을 수정하세요:

- 이름 및 직책
- 자기소개 텍스트
- 기술 스택
- 경력 사항
- 프로젝트 정보
- 연락처
- 소셜 링크

### 3. 이미지 추가

`assets/images/` 폴더에 이미지를 추가하고, `index.html`에서 경로를 수정하세요:

```html
<img src="./assets/images/profile.jpg" alt="프로필 이미지">
```

### 4. 색상 커스터마이징

`tailwind.config.js`에서 색상 팔레트를 수정할 수 있습니다:

```javascript
colors: {
  primary: "#2563eb",      // 주요 색상
  secondary: "#7c3aed",    // 강조 색상
  accent: "#ec4899",       // 악센트 색상
}
```

## 📱 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 🎯 성능

- 초기 로딩: < 1초
- Lighthouse 성능 점수: 95+
- 모든 리소스는 CDN을 통해 로드

## 📊 SEO 최적화

- ✅ 메타 태그 (description, og:title, og:description)
- ✅ 시맨틱 HTML5 요소
- ✅ 고유한 페이지 제목
- ✅ 올바른 heading 계층 구조
- ✅ 알트 텍스트

## ♿ 접근성

- ✅ 시맨틱 HTML 마크업
- ✅ 충분한 색상 대비
- ✅ 포커스 상태 표시
- ✅ ARIA 라벨 (필요시)
- ✅ 키보드 네비게이션

## 🌙 다크 모드

다크 모드는 자동으로 감지되며, 사용자가 토글할 수 있습니다.
설정은 브라우저의 localStorage에 저장됩니다.

```javascript
// 다크 모드 상태 확인
const isDarkMode = localStorage.getItem('darkMode') === 'true';
```

## 📝 커스터마이징 가이드

### 샘플 데이터 변경

`index.html` 파일에서 다음 부분을 수정하세요:

```html
<!-- 이름 변경 -->
<h1 class="text-5xl md:text-6xl font-bold mb-4">
  <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
    당신의 이름  <!-- 여기를 변경 -->
  </span>
</h1>

<!-- 직책 변경 -->
<h2 class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-semibold">
  당신의 직책  <!-- 여기를 변경 -->
</h2>
```

### 기술 스택 추가/제거

Skills 섹션에서 기술 뱃지를 추가하거나 제거하세요:

```html
<span class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
  당신의 기술  <!-- 여기를 변경 -->
</span>
```

## 🚀 배포

### GitHub Pages로 배포

1. GitHub에서 저장소 생성
2. 파일을 커밋 및 푸시
3. 저장소 설정에서 GitHub Pages 활성화

```bash
git init
git add .
git commit -m "초기 커밋"
git remote add origin https://github.com/당신의이름/저장소명.git
git push -u origin main
```

### 개인 서버에 배포

1. 모든 파일을 서버에 업로드
2. `index.html` 파일이 루트 디렉토리에 있는지 확인

## 📝 라이센스

자유롭게 사용, 수정, 배포할 수 있습니다.

## 🙋 기여

개선 사항이나 버그 리포트는 언제든 환영합니다!

## 📞 연락처

- 이메일: dev@example.com
- GitHub: github.com/yourname
- LinkedIn: linkedin.com/in/yourname

---

**만든이:** 김개발
**최종 수정:** 2024년 3월
**상태:** ✅ 완성
