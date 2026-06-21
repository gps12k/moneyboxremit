/* =====================================================================
   MoneyBox Remit — Site (NEW / Vivid Playful)
   언어 토글(KR/EN) · 모바일 드로어 · 스크롤 리빌
   ===================================================================== */
(function () {
  "use strict";
  var LANG_KEY = "mbr-lang";

  /* 언어 */
  function applyLang(lang) {
    var next = lang === "en" ? "en" : "ko";
    document.documentElement.setAttribute("lang", next);
    try { localStorage.setItem(LANG_KEY, next); } catch (_) {}
    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) {
      b.textContent = next === "ko" ? "EN" : "한국어";
    });
  }
  function initLang() {
    var saved = "ko";
    try { saved = localStorage.getItem(LANG_KEY) || "ko"; } catch (_) {}
    applyLang(saved);
    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) {
      b.addEventListener("click", function () {
        applyLang(document.documentElement.getAttribute("lang") === "ko" ? "en" : "ko");
      });
    });
  }

  /* 모바일 드로어 */
  function initMobile() {
    var drawer = document.querySelector("[data-mnav]");
    if (!drawer) return;
    var openBtn = document.querySelector("[data-menu-open]");
    function setOpen(o) {
      drawer.classList.toggle("is-open", o);
      document.body.style.overflow = o ? "hidden" : "";
      if (openBtn) openBtn.setAttribute("aria-expanded", String(o));
    }
    if (openBtn) openBtn.addEventListener("click", function () { setOpen(true); });
    drawer.querySelectorAll("[data-menu-close]").forEach(function (el) {
      el.addEventListener("click", function (e) { if (e.target === el) setOpen(false); });
    });
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
  }

  /* 리빌 */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  function init() { initLang(); initMobile(); initReveal(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
