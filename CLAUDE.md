# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Project:** Developer Web Resume (개발자 웹 이력서)

A personal portfolio/resume website built with vanilla HTML, CSS, JavaScript, and TailwindCSS. This is an early-stage project currently in Phase 1 (environment setup and planning).

See **ROADMAP.md** for the complete development roadmap and phase breakdown.

## 언어 및 커뮤니케이션 규칙

**이 프로젝트는 한국어 우선 환경에서 진행됩니다.**

- **기본 응답 언어:** 한국어 (모든 대화, 설명, 조언은 한국어로)
- **코드 주석:** 한국어로 작성 (간단하고 명확하게)
- **커밋 메시지:** 한국어로 작성 (예: "feat: 네비게이션 바 구현", "fix: 모바일 반응형 버그 수정")
- **문서화 및 README:** 한국어로 작성
- **변수명/함수명:** **영어** (코드 표준 및 국제 협업을 고려)

**예시:**
```javascript
// 올바른 방식
function calculateTotal(items) {
  // 모든 아이템의 가격 합계를 계산한다
  return items.reduce((sum, item) => sum + item.price, 0);
}

// 피할 것
function 합계계산(items) {
  // ...
}
```

## Current Project Status

- **Phase:** Planning/Initial Setup (Phase 1)
- **Technology Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+), TailwindCSS
- **State:** Minimal boilerplate only—no build tools, npm setup, or component structure yet
- **Key Document:** ROADMAP.md contains the full development plan with 5 phases and detailed checklist

## Architecture & Structure

Since this is an early-stage project, the architecture is not yet established. However, the planned structure (from ROADMAP.md) is:

```
├── assets/images/          # Profile images and project thumbnails
├── css/style.css           # Custom CSS (complements TailwindCSS)
├── js/main.js              # Vanilla JavaScript for interactivity
└── index.html              # Single-page HTML (all sections in one file initially)
```

### Key Design Decisions

- **Single HTML file approach** for simplicity (initially)
- **Vanilla JavaScript** over frameworks to keep dependencies minimal
- **TailwindCSS** for rapid, responsive styling
- **No build tooling** initially; upgrade to npm+bundler in later phases if needed

## Development Workflow

### Getting Started

1. **Review ROADMAP.md** to understand all 5 development phases
2. **Current task:** Phase 1 (environment setup)
   - Set up basic HTML structure with semantic sections
   - Configure TailwindCSS (CDN or npm install)
   - Create the folder structure for assets, css, js
3. **Next:** Implement Phase 2 (navigation & layout)

### How to Proceed with Development

**For each phase:**
1. Read the phase description and checklist in ROADMAP.md
2. Implement features incrementally
3. Test in browser (no special build step needed yet)
4. Update ROADMAP.md checklist as features complete

**Common commands (when npm is set up):**
```bash
npm install               # Install dependencies
npm run dev             # Watch mode (if set up)
npm run build           # Build for production (if set up)
```

Currently, no npm setup exists—features are vanilla HTML/CSS/JS that work directly in the browser.

## Resume Content Template

The ROADMAP.md includes a "일반적인 이력서 샘플 내용" section with example resume data (Korean/English).

When implementing sections, use this structure:
- **Hero Section:** Name, title, one-liner, CTA buttons
- **About Me:** 200-300 word self-introduction
- **Skills:** Categorized by Frontend/Backend/Tools
- **Experience:** Timeline or cards (company, role, dates, achievements)
- **Projects:** Cards with title, description, tech stack, links
- **Education:** Degree, major, graduation year
- **Contact:** Email, GitHub, LinkedIn, blog links

## Important Notes for Future Work

- **Responsive Design:** Mobile-first approach with TailwindCSS breakpoints
- **No Backend Yet:** This is a static site; contact forms would need a backend service later
- **Accessibility:** Plan Phase 5 includes a11y improvements—keep semantic HTML and ARIA labels in mind from the start
- **Dark Mode:** Noted in Phase 4 as optional; design with it in mind if implementing
- **Animations:** Use CSS transitions or lightweight JavaScript—avoid heavy libraries

## Files to Watch

- **ROADMAP.md** – The master plan; refer here when uncertain about direction or scope
- **index.html** – Will grow to include all resume sections
- **tailwind.config.js** – Configure custom colors, fonts, spacing as you style
- **css/style.css** – Custom CSS not covered by TailwindCSS utilities

## Testing & Validation

- **Browser Testing:** Open index.html in a modern browser (Chrome, Firefox, Safari, Edge)
- **Responsive Testing:** Use browser DevTools to test mobile/tablet views
- **Accessibility:** Check with accessibility checklist in ROADMAP.md Phase 5
- **Performance:** Monitor page load time (especially for images in Phase 5)

## 콘텐츠 작성 가이드

이력서 섹션의 텍스트 콘텐츠는 **한국어로 작성**합니다. 기술명(프로그래밍 언어, 프레임워크)은 국제 표준 영문명을 사용합니다.

**예시:**
```html
<!-- 올바른 방식 -->
<h2>기술 스택</h2>
<p>React, Node.js, MongoDB 등의 현대적 기술을 활용합니다.</p>

<!-- 피할 것 -->
<h2>技術スタック</h2> <!-- 다른 언어 혼용 -->
```

## Next Immediate Task

**Phase 1:** Set up the basic project structure:
1. Create folder structure (assets/, css/, js/)
2. Write the HTML skeleton with all resume section divs
3. Configure or link TailwindCSS
4. Create empty main.js and style.css files
5. Test that the basic page loads in a browser

This unblocks Phase 2 (navigation and layout work).
