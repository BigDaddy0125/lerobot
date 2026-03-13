import { renderLayout } from '../layout'
import { globalContent } from '../content/globalContent'
import { technologyContent } from '../content/technologyContent'
import { renderHero } from '../sections/hero'
import { renderTechSystems, renderTagCloud, renderSafety } from '../sections/technologySections'

export function renderTechnologyPage(locale) {
  const global = globalContent[locale]
  const content = technologyContent[locale]

  const mainContent = `
    <main id="top">
      ${renderHero(content.hero, locale)}
      ${renderTechSystems(content.systems, content.systemSection)}
      ${renderTagCloud(content.stackGroups, content.stackSection)}
      ${renderSafety(content.safety, content.safetySection)}
    </main>
  `

  return {
    html: renderLayout({
      ...global,
      activePath: '/technology.html',
      locale,
      mainContent,
    }),
    seo: content.seo,
  }
}
