// ============================================
// 메인 JavaScript 파일
// ============================================

// DOM 요소 가져오기
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('nav a');
const html = document.documentElement;

// ============================================
// 1. 다크 모드 토글
// ============================================

// 저장된 다크 모드 설정 확인
function initDarkMode() {
  const darkMode = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (darkMode === 'true' || (darkMode === null && prefersDark)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}

// 다크 모드 토글 함수
function toggleDarkMode() {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
}

// 이벤트 리스너
darkModeToggle.addEventListener('click', toggleDarkMode);

// 초기화
initDarkMode();

// ============================================
// 2. 모바일 메뉴 토글
// ============================================

function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// 네비게이션 링크 클릭시 메뉴 닫기
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ============================================
// 3. 스크롤 스파이 (활성 네비게이션)
// ============================================

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100; // 네비게이션 높이 고려

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ============================================
// 4. Intersection Observer - 스크롤 진입 애니메이션
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 모든 섹션과 애니메이션 요소 관찰
document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});

// ============================================
// 5. 타이핑 애니메이션 (Hero 섹션)
// ============================================

function initTypingAnimation() {
  const heroTitle = document.querySelector('.gradient-text');

  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.classList.add('typing-effect');

    let index = 0;

    // 타이핑 애니메이션 시뮬레이션
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
        heroTitle.classList.remove('typing-effect');
      }
    }, 100);
  }
}

// 페이지 로드시 타이핑 애니메이션 시작
window.addEventListener('load', initTypingAnimation);

// ============================================
// 6. 스크롤 진입 애니메이션 (상세)
// ============================================

function addScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up, .hover-lift');

  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          animationObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    animationObserver.observe(element);
  });
}

addScrollAnimations();

// ============================================
// 7. 부드러운 스크롤 (앵커)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  });
});

// ============================================
// 8. 기술 뱃지 호버 효과
// ============================================

function initSkillBadgeEffects() {
  const badges = document.querySelectorAll('[class*="bg-"][class*="100"]');

  badges.forEach((badge) => {
    badge.classList.add('skill-badge');
  });
}

initSkillBadgeEffects();

// ============================================
// 9. 프로젝트 카드 호버 효과
// ============================================

function initProjectCardEffects() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });
}

initProjectCardEffects();

// ============================================
// 10. 페이지 로드 애니메이션
// ============================================

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

document.body.style.opacity = '0.95';

// ============================================
// 11. 창 크기 변경시 모바일 메뉴 닫기
// ============================================

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.add('hidden');
  }
});

// ============================================
// 12. 외부 링크 새 탭에서 열기
// ============================================

document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

// ============================================
// 13. 활성화 함수 (초기화)
// ============================================

function init() {
  console.log('개발자 웹 이력서가 로드되었습니다.');
  initDarkMode();
  initTypingAnimation();
  addScrollAnimations();
  initSkillBadgeEffects();
  initProjectCardEffects();
  updateActiveNav();
}

// DOM이 준비되면 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================
// 14. 키보드 접근성
// ============================================

// Tab 키로 포커스 관리
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    mobileMenu.classList.add('hidden');
  }
});

// ============================================
// 15. 콘솔 환영 메시지
// ============================================

console.log(
  '%c👋 안녕하세요! 개발자 포트폴리오입니다.',
  'color: #2563eb; font-size: 16px; font-weight: bold;'
);
console.log(
  '%c이 웹사이트는 HTML, CSS, JavaScript, TailwindCSS로 만들어졌습니다.',
  'color: #7c3aed; font-size: 14px;'
);
