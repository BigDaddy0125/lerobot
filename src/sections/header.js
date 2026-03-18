import { buildLocalizedHref } from '../utils/locale'

export function renderHeader(content) {
  const nav = content.nav
    .map((item) => {
      const classes = item.cta ? 'nav-cta' : ''
      const current = content.activePath === item.href ? 'aria-current="page"' : ''
      return `<a class="${classes}" href="${buildLocalizedHref(item.href, content.locale)}" ${current}>${item.label}</a>`
    })
    .join('')

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="${buildLocalizedHref('/index.html', content.locale)}" aria-label="ClearBot top">
          <span class="brand-mark">CB</span>
          <span class="brand-copy">
            <strong>${content.brand.name}</strong>
            <small>Remote robotics systems</small>
          </span>
        </a>
        <div class="nav-shell">
          <nav id="site-nav" class="site-nav" aria-label="Primary navigation">${nav}</nav>
        </div>
        <div class="header-right">
          <p class="header-status"><span class="header-status-dot" aria-hidden="true"></span>Prototype Planning</p>
          <div class="locale-switch" aria-label="Language switcher">
            <a href="${buildLocalizedHref(content.activePath, 'ja')}" ${content.locale === 'ja' ? 'aria-current="page"' : ''}>${content.localeSwitch.ja}</a>
            <a href="${buildLocalizedHref(content.activePath, 'en')}" ${content.locale === 'en' ? 'aria-current="page"' : ''}>${content.localeSwitch.en}</a>
          </div>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
            Menu
          </button>
        </div>
      </div>
    </header>
  `
}
