// ========================================
// i18n — Translations (shared across pages)
// ========================================

const translations = {
  zh: {
    'nav.works': '作品',
    'nav.about': '关于',
    'nav.contact': '联系',

    'about.heading': '关于',
    'about.p1': '我的实践探索室内空间作为叙事的载体——通过碎片、记忆与材料再利用讲述故事的空间。在 RMIT 接受训练，我将设计视为一种兼具批判性与诗意的实践，适应性再利用成为连接过去与现在、为公共空间构想未来可能性的方式。',
    'about.p2': '从实验性装置到适应性再利用方案，每个项目都反映了我对叙事表达与材料诚实的兴趣。在墨尔本与北京之间工作，我致力于将文化语境与实验方法相结合，创造出既根植于地方、又与全球对话的室内空间。',
    'about.p3': '目前，我正在将实践方向延伸至 AIGC 与计算创意领域——探索 AI 生成式工具（Stable Diffusion、ComfyUI、Midjourney 等）与空间设计、视觉叙事的交叉，在代码与生成的边界寻找新的表达可能。',

    'contact.heading': '联系',
  },

  en: {
    'nav.works': 'Works',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'about.heading': 'About',
    'about.p1': 'My work explores interiors as narratives — spaces that tell stories through fragments, memory, and material reuse. Trained at RMIT, I approach design as both a critical and poetic practice, where adaptive reuse becomes a way to bridge the past and present, while imagining future possibilities for public space.',
    'about.p2': 'From speculative installations to adaptive reuse proposals, each project reflects my interest in narrative expression and material honesty. Working between Melbourne and Beijing, I aim to integrate cultural context with experimental methods, producing interiors that are both locally grounded and globally resonant.',
    'about.p3': 'Currently, I am extending my practice into AIGC and computational creativity — exploring the intersection of AI generative tools (Stable Diffusion, ComfyUI, Midjourney) with spatial design and visual storytelling, seeking new forms of expression at the boundary of code and generation.',

    'contact.heading': 'Contact',
  },
};

// ========================================
// Language Management
// ========================================

const LANG_KEY = 'portfolio-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'zh';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update lang toggle UI
  document.querySelectorAll('.lang-option').forEach((opt) => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });
}

setLanguage(currentLang);

// Attach lang toggle if it exists
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'zh' ? 'en' : 'zh';
    setLanguage(nextLang);
    // Reload page to update any script-rendered content
    window.location.reload();
  });
}

// ========================================
// Header scroll effect
// ========================================

const header = document.getElementById('header');
if (header) {
  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

// ========================================
// Dark Mode Toggle
// ========================================

const THEME_KEY = 'portfolio-theme';
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    themeToggle.querySelector('.theme-toggle-icon').textContent = dark ? '◑' : '◐';
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem(THEME_KEY);
  const isDark = savedTheme !== null ? savedTheme === 'dark' : prefersDark;
  applyTheme(isDark);

  themeToggle.addEventListener('click', () => {
    const nextDark = !document.documentElement.classList.contains('dark');
    applyTheme(nextDark);
    localStorage.setItem(THEME_KEY, nextDark ? 'dark' : 'light');
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem(THEME_KEY) === null) {
      applyTheme(e.matches);
    }
  });
}
