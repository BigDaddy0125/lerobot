export function renderHeader(content) {
  const nav = content.nav
    .map((item) => {
      const classes = item.cta ? 'nav-cta' : ''
      const current = content.activePath === item.href ? 'aria-current="page"' : ''
      return `<a class="${classes}" href="${item.href}" ${current}>${item.label}</a>`
    })
    .join('')

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="/index.html" aria-label="遠隔支援ロボット・機械腕開発トップへ">
          <span class="brand-mark">IR</span>
          <span class="brand-copy">
            <strong>${content.brand.name}</strong>
            <small>${content.brand.company}</small>
          </span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          Menu
        </button>
        <nav id="site-nav" class="site-nav" aria-label="主要ナビゲーション">${nav}</nav>
      </div>
    </header>
  `
}
