// Simple bilingual toggler and minor interactive behaviors
(function () {
  const langEnBtn = document.getElementById("lang-en");
  const langArBtn = document.getElementById("lang-ar");
  const htmlEl = document.documentElement;
  const root = document.documentElement;

  function setLang(lang) {
    const isAr = lang === "ar";
    // Toggle direction
    document.body.classList.toggle("rtl", isAr);
    document.documentElement.lang = isAr ? "ar" : "en";
    // Swap text for elements that have data-en/data-ar
    document.querySelectorAll("[data-en]").forEach((el) => {
      el.textContent = isAr
        ? el.getAttribute("data-ar")
        : el.getAttribute("data-en");
    });
    // Buttons active state
    langEnBtn.style.opacity = isAr ? "0.6" : "1";
    langArBtn.style.opacity = isAr ? "1" : "0.6";
  }

  langEnBtn.addEventListener("click", () => setLang("en"));
  langArBtn.addEventListener("click", () => setLang("ar"));

  // Set initial language to Arabic as requested
  setLang("ar");
})();
