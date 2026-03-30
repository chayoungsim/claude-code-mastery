# 개발자 웹 이력서 (Developer Web Resume) - ROADMAP

## 📋 프로젝트 개요

**프로젝트명:** 개발자 웹 이력서
**목적:** 개인 포트폴리오 및 이력서를 현대적인 웹사이트로 제공
**기술스택:** HTML5, CSS3, JavaScript (Vanilla), TailwindCSS
**배포 대상:** GitHub Pages 또는 개인 서버

---

## 🎯 이력서 섹션 구성

웹 이력서에 포함될 주요 섹션들입니다:

| 섹션 | 설명 |
|------|------|
| **Hero / 소개** | 이름, 직책(Frontend/Backend/Fullstack Developer), 한 줄 소개 및 프로필 이미지 |
| **About Me** | 간단한 자기소개, 개발 철학, 관심사 (200-300 단어) |
| **Skills** | 기술 스택 (프로그래밍 언어, 프레임워크, 도구, 라이브러리) |
| **Experience** | 경력 사항 (회사명, 직책, 근무 기간, 주요 역할 및 성과) |
| **Projects** | 주요 프로젝트 카드 (프로젝트명, 설명, 사용 기술, 데모/깃허브 링크) |
| **Education** | 학력 (대학교, 전공, 졸업 연도) |
| **Contact** | 연락처 및 소셜 링크 (이메일, GitHub, LinkedIn, 블로그) |

---

## 🚀 개발 단계 (Development Phases)

### Phase 1: 환경 설정 및 프로젝트 초기화
- [ ] `package.json` 생성 및 npm 초기화
- [ ] TailwindCSS 설정 (npm 설치 또는 CDN)
- [ ] `tailwind.config.js` 커스텀 설정
- [ ] 폴더 구조 생성 (`assets/`, `css/`, `js/` 등)
- [ ] 기본 CSS 및 JavaScript 파일 생성
- [ ] 빌드 스크립트 설정 (npm run build, npm run dev)

### Phase 2: 레이아웃 및 네비게이션
- [ ] 반응형 네비게이션 바 구현 (Desktop/Mobile)
- [ ] 모바일 햄버거 메뉴 토글
- [ ] 부드러운 스크롤(Smooth Scroll) 기능
- [ ] 기본 페이지 레이아웃 (Header, Main, Footer)
- [ ] 반응형 그리드 시스템 (TailwindCSS)

### Phase 3: 각 섹션 구현
- [ ] **Hero Section**
  - 프로필 이미지
  - 이름 및 직책 표시
  - 짧은 소개 텍스트
  - CTA 버튼 (이력서 다운로드, 연락처)

- [ ] **About Me Section**
  - 자기소개 텍스트
  - 개발 철학 및 관심사

- [ ] **Skills Section**
  - 기술 카테고리별 구분 (Frontend, Backend, Tools)
  - 스킬 뱃지/태그 디자인

- [ ] **Experience Section**
  - 시간 축(Timeline) 또는 카드 레이아웃
  - 회사명, 직책, 기간, 설명

- [ ] **Projects Section**
  - 프로젝트 카드 레이아웃
  - 프로젝트 이미지/썸네일
  - 설명 및 사용 기술
  - 외부 링크 (데모, GitHub 등)

- [ ] **Education Section**
  - 학력 정보 표시

- [ ] **Contact Section**
  - 연락처 정보
  - 소셜 링크 아이콘

### Phase 4: 인터랙션 및 애니메이션
- [ ] 스크롤 진입 시 페이드인 애니메이션
- [ ] 호버(Hover) 효과 (버튼, 카드, 링크)
- [ ] 부드러운 트랜지션 효과
- [ ] 다크 모드 토글 (선택사항)
- [ ] 프로젝트 필터링 기능 (카테고리별)
- [ ] 타이핑 애니메이션 (Hero 섹션)

### Phase 5: 최적화 및 배포
- [ ] 이미지 최적화 (WebP, 압축)
- [ ] 접근성(a11y) 개선 (ARIA, 색상 대비 등)
- [ ] SEO 최적화 (메타 태그, 구조화된 데이터)
- [ ] 성능 최적화 (번들 사이즈, 로딩 시간)
- [ ] 크로스 브라우저 테스트
- [ ] GitHub Pages 또는 개인 서버 배포
- [ ] 배포 후 기능 테스트

---

## 📁 프로젝트 폴더 구조

```
claude-code-mastery/
├── index.html                 # 메인 HTML 파일
├── tailwind.config.js         # TailwindCSS 설정
├── package.json               # npm 의존성 관리
├── README.md                  # 프로젝트 설명
├── ROADMAP.md                 # 이 파일
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg        # 프로필 이미지
│   │   ├── project1.jpg       # 프로젝트 썸네일
│   │   └── project2.jpg
│   └── icons/                 # SVG 또는 아이콘 이미지
│
├── css/
│   └── style.css              # 커스텀 CSS
│
└── js/
    └── main.js                # 메인 JavaScript 파일
```

---

## 🛠️ 기술 스택 상세

| 분야 | 기술 |
|------|------|
| **Markup** | HTML5 |
| **Styling** | CSS3, TailwindCSS |
| **Interactivity** | Vanilla JavaScript (ES6+) |
| **Build Tool** | npm (선택사항) |
| **Deployment** | GitHub Pages / 개인 서버 |

---

## 📝 일반적인 이력서 샘플 내용

### 기본 정보
- **이름:** 김개발
- **직책:** Fullstack Developer
- **한 줄 소개:** 사용자 중심의 웹 애플리케이션을 만드는 개발자입니다.

### Skills 예시
- **Frontend:** HTML, CSS, JavaScript, React, Vue.js
- **Backend:** Node.js, Express, Python, Django
- **Database:** MySQL, MongoDB, PostgreSQL
- **Tools:** Git, Docker, VS Code, Figma

### Experience 예시
- **회사명:** ABC 스타트업
- **기간:** 2022.01 - 2023.12 (2년)
- **직책:** Frontend Developer
- **성과:** React를 이용한 사용자 대시보드 개발, 성능 40% 개선

### Projects 예시
1. **프로젝트명:** 실시간 채팅 애플리케이션
   - **설명:** WebSocket을 활용한 실시간 메시징
   - **기술:** React, Node.js, Socket.io
   - **링크:** [GitHub](https://github.com) | [데모](https://demo.com)

### Education 예시
- **학교명:** OO대학교
- **전공:** 컴퓨터공학
- **졸업:** 2022.02

---

## 🎨 디자인 가이드라인

- **색상:** 전문성 있는 색상 팔레트 (다크/라이트 모드 고려)
- **폰트:** 가독성 좋은 산세리프 폰트 (예: Inter, Roboto, Poppins)
- **레이아웃:** 모바일 퍼스트 반응형 설계
- **애니메이션:** 자연스럽고 과하지 않은 인터랙션

---

## ✅ 검증 및 테스트 체크리스트

- [ ] 모든 섹션이 정상적으로 표시되는가?
- [ ] 반응형 디자인이 모든 화면 크기에서 작동하는가?
- [ ] 네비게이션이 부드럽게 작동하는가?
- [ ] 모든 외부 링크가 정상적으로 작동하는가?
- [ ] 다크 모드(있는 경우)가 제대로 작동하는가?
- [ ] 페이지 로딩 속도가 만족스러운가?
- [ ] 접근성 요구사항을 충족하는가?
- [ ] 모든 주요 브라우저에서 테스트되었는가?

---

## 🚀 배포 전 체크리스트

- [ ] 모든 파일이 최종 상태인가?
- [ ] 배포용 최적화가 완료되었는가?
- [ ] 개인정보 또는 민감한 정보가 노출되어 있지 않은가?
- [ ] 배포 링크 및 설정이 정확한가?
- [ ] 배포 후 기능 테스트가 완료되었는가?

---

## 📞 다음 단계

1. **Phase 1 시작**: 환경 설정 및 폴더 구조 생성
2. **index.html 작성**: 기본 HTML 구조 및 섹션 마크업
3. **CSS 스타일링**: TailwindCSS를 활용한 디자인
4. **JavaScript 기능**: 인터랙션 및 애니메이션 추가
5. **최적화 및 배포**: 성능 최적화 후 배포

---

**최종 수정:** 2026.03.23
**상태:** 계획 단계 ✏️
