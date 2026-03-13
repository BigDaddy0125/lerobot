import { renderLayout } from '../layout'
import { globalContent } from '../content/globalContent'
import { homeContent } from '../content/homeContent'
import { renderHero } from '../sections/hero'
import { renderIntro } from '../sections/intro'
import { renderSolution } from '../sections/solution'
import { renderArchitecture } from '../sections/architecture'
import { renderCapabilities } from '../sections/capabilities'
import { renderUseCases } from '../sections/useCases'
import { renderProcess } from '../sections/process'
import { renderFoundation } from '../sections/foundation'
import { renderContact } from '../sections/contact'
import { renderShowcase } from '../sections/showcase'

export function renderHomePage() {
  const mainContent = `
    <main id="top">
      ${renderHero(homeContent.hero)}
      ${renderIntro(homeContent.intro)}
      ${renderSolution(homeContent.solution)}
      ${renderArchitecture(homeContent.architecture)}
      ${renderCapabilities(homeContent.capabilities)}
      ${renderShowcase(homeContent.showcase)}
      ${renderUseCases(homeContent.useCases)}
      ${renderProcess(homeContent.process)}
      ${renderFoundation(homeContent.foundation)}
      ${renderContact(homeContent.contact)}
    </main>
  `

  return {
    html: renderLayout({
      ...globalContent,
      activePath: '/index.html',
      mainContent,
    }),
    seo: homeContent.seo,
  }
}
