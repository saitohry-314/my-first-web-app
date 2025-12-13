export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const convertTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const convertSection = document.getElementById("converter");

  homeLink.addEventListener("click", () => {
    // 単位セクションに hidden クラスを追加
    convertSection.classList.add("hidden");

    // ホームセクションから hidden クラスを削除
    homeSection.classList.remove("hidden");
  });

  convertTab.addEventListener("click", () => {
    // ホームセクションから hidden クラスを追加
    homeSection.classList.add("hidden");

    // 単位セクションに hidden クラスを削除
    convertSection.classList.remove("hidden");
  });
}
