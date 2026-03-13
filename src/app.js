import { renderHeader } from './sections/header'
import { renderHero } from './sections/hero'
import { renderIntro } from './sections/intro'
import { renderSolution } from './sections/solution'
import { renderArchitecture } from './sections/architecture'
import { renderCapabilities } from './sections/capabilities'
import { renderUseCases } from './sections/useCases'
import { renderProcess } from './sections/process'
import { renderFoundation } from './sections/foundation'
import { renderContact } from './sections/contact'
import { renderFooter } from './sections/footer'

export function renderApp(content) {
  return `
    <div class="site-shell">
      ${renderHeader(content)}
      <main id="top">
        ${renderHero(content.hero)}
        ${renderIntro(content.intro)}
        ${renderSolution(content.solution)}
        ${renderArchitecture(content.architecture)}
        ${renderCapabilities(content.capabilities)}
        ${renderUseCases(content.useCases)}
        ${renderProcess(content.process)}
        ${renderFoundation(content.foundation)}
        ${renderContact(content.contact)}
      </main>
      ${renderFooter(content.footer)}
    </div>
  `
}
