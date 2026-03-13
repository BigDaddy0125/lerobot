export function renderHeader(content) {
  const nav = content.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('')

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="遠隔支援ロボット・機械腕開発トップへ">
          <span class="brand-mark">IR</span>
          <span class="brand-copy">
            <strong>${content.brand.name}</strong>
            <small>${content.brand.company}</small>
          </span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          Menu
        </button>
        <nav id="site-nav" class="site-nav" aria-label="主要ナビゲーション">
          ${nav}
          <a class="nav-cta" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  `
}
