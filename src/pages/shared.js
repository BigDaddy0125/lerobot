import '../styles/index.css'
import { setupMenu } from '../utils/menu'
import { setupReveal } from '../utils/reveal'
import { applySeo } from '../utils/seo'
import { getLocaleFromUrl } from '../utils/locale'

window.__CLEARBOT_RENDER_PAGE__ = (renderPage) => {
  const app = document.querySelector('#app')

  if (!app) {
    return
  }

  const locale = getLocaleFromUrl()
  const page = renderPage(locale)
  app.innerHTML = page.html
  applySeo(page.seo, locale)
  setupMenu()
  setupReveal()
}
