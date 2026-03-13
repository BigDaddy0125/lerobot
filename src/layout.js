import { renderHeader } from './sections/header'
import { renderFooter } from './sections/footer'

export function renderLayout({ brand, nav, footer, activePath, mainContent }) {
  return `
    <div class="site-shell">
      ${renderHeader({ brand, nav, activePath })}
      ${mainContent}
      ${renderFooter({ footer, nav })}
    </div>
  `
}
