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

export function renderHomePage(locale) {
  const global = globalContent[locale]
  const content = homeContent[locale]

  const mainContent = `
    <main id="top">
      ${renderHero(content.hero, locale)}
      ${renderIntro(content.intro)}
      ${renderSolution(content.solution)}
      ${renderArchitecture(content.architecture)}
      ${renderCapabilities(content.capabilities)}
      ${renderShowcase(content.showcase)}
      ${renderUseCases(content.useCases)}
      ${renderProcess(content.process)}
      ${renderFoundation(content.foundation)}
      ${renderContact(content.contact, locale)}
    </main>
  `

  return {
    html: renderLayout({
      ...global,
      activePath: '/index.html',
      locale,
      mainContent,
    }),
    seo: content.seo,
  }
}
