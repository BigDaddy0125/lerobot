import './styles/index.css'
import { renderApp } from './app'
import { setupMenu } from './utils/menu'
import { setupReveal } from './utils/reveal'
import { applySeo } from './utils/seo'
import { siteContent } from './content/siteContent'

const app = document.querySelector('#app')

if (app) {
  app.innerHTML = renderApp(siteContent)
  applySeo(siteContent.seo)
  setupMenu()
  setupReveal()
}
