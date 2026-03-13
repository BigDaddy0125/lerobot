import '../styles/index.css'
import { setupMenu } from '../utils/menu'
import { setupReveal } from '../utils/reveal'
import { applySeo } from '../utils/seo'

window.__LEROBOT_RENDER_PAGE__ = (renderPage) => {
  const app = document.querySelector('#app')

  if (!app) {
    return
  }

  const page = renderPage()
  app.innerHTML = page.html
  applySeo(page.seo)
  setupMenu()
  setupReveal()
}
