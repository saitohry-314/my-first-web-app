// ここからコードを書いてください
export function setupTabs() {
  const home_data_tab = document.querySelector('[data-tab="home"]');
  const menu_data_tab = document.querySelector('[data-tab="converter"]');
  //   const home_tab = home_data_tab.dataset.tab;
  //  const menu_tab = menu_data_tab.dataset.tab;
  const home_section = document.getElementById("home");
  const unit_section = document.getElementById("converter");

  home_data_tab.addEventListener("click", () => {
    // event.preventDefault(); // ページ遷移を防ぐ

    // 単位セクションに hidden クラスを追加
    unit_section.classList.add("hidden");

    // ホームセクションから hidden クラスを削除
    home_section.classList.remove("hidden");
  });

  menu_data_tab.addEventListener("click", () => {
    // event.preventDefault(); // ページ遷移を防ぐ

    // 単位セクションに hidden クラスを追加
    home_section.classList.add("hidden");

    // ホームセクションから hidden クラスを削除
    unit_section.classList.remove("hidden");
  });
}
// export default setupTabs;
