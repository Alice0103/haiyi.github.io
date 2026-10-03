/* ============ HAIYI YU — language toggle (EN / 中文) ============ */
(function(){
  var LANG = 'en';
  try{ LANG = localStorage.getItem('folio-lang') || 'en'; }catch(e){}
  window.i18nLang = LANG;

  function apply(l){
    LANG = l; window.i18nLang = l;
    try{ localStorage.setItem('folio-lang', l); }catch(e){}
    document.documentElement.setAttribute('lang', l==='zh' ? 'zh-CN' : 'en');
    document.querySelectorAll('[data-en]').forEach(function(el){
      var zh = el.getAttribute('data-zh');
      if(zh){ el.innerHTML = (l==='zh') ? zh : el.getAttribute('data-en'); }
    });
    document.querySelectorAll('.nav-lang').forEach(function(b){
      b.textContent = (l==='zh') ? 'EN' : '中';
    });
    var ml = document.querySelector('.nav-menu-btn .btn-label');
    if(ml){
      ml.textContent = (l==='zh')
        ? (document.body.classList.contains('menu-open') ? '关闭' : '菜单')
        : (document.body.classList.contains('menu-open') ? 'Close' : 'Menu');
    }
    document.dispatchEvent(new CustomEvent('langchange', {detail: l}));
  }

  /* back arrow — return to the previous page, fall back to home */
  document.addEventListener('click', function(e){
    var b = e.target.closest ? e.target.closest('.nav-back') : null;
    if(!b) return;
    e.preventDefault();
    if(history.length > 1){ history.back(); }
    else { location.href = 'index.html'; }
  });

  document.addEventListener('DOMContentLoaded', function(){
    apply(LANG);
    document.querySelectorAll('.nav-lang').forEach(function(b){
      b.addEventListener('click', function(){ apply(LANG==='zh' ? 'en' : 'zh'); });
    });
  });
  window.setLang = apply;
})();
