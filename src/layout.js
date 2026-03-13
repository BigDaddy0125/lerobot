import { renderHeader } from './sections/header'
import { renderFooter } from './sections/footer'

export function renderLayout({ brand, nav, footer, localeSwitch, activePath, locale, mainContent }) {
  return `
    <div class="site-shell">
      ${renderHeader({ brand, nav, activePath, locale, localeSwitch })}
      ${mainContent}
      ${renderFooter({ footer, nav, locale })}
    </div>
  `
}
