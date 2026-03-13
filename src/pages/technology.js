import { renderLayout } from '../layout'
import { globalContent } from '../content/globalContent'
import { technologyContent } from '../content/technologyContent'
import { renderHero } from '../sections/hero'
import { renderTechSystems, renderTagCloud, renderSafety } from '../sections/technologySections'

export function renderTechnologyPage() {
  const mainContent = `
    <main id="top">
      ${renderHero(technologyContent.hero)}
      ${renderTechSystems(technologyContent.systems)}
      ${renderTagCloud(technologyContent.stackGroups)}
      ${renderSafety(technologyContent.safety)}
    </main>
  `

  return {
    html: renderLayout({
      ...globalContent,
      activePath: '/technology.html',
      mainContent,
    }),
    seo: technologyContent.seo,
  }
}
