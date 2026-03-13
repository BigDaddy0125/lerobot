import { renderLayout } from '../layout'
import { globalContent } from '../content/globalContent'
import { companyContent } from '../content/companyContent'
import { renderHero } from '../sections/hero'
import { renderProfile, renderCompanyColumns } from '../sections/companySections'

export function renderCompanyPage(locale) {
  const global = globalContent[locale]
  const content = companyContent[locale]

  const mainContent = `
    <main id="top">
      ${renderHero(content.hero, locale)}
      ${renderProfile(content.profile, content.profileSection)}
      ${renderCompanyColumns(content.strengthSection, content.strengths)}
      ${renderCompanyColumns(content.collaborationSection, content.collaboration)}
    </main>
  `

  return {
    html: renderLayout({
      ...global,
      activePath: '/company.html',
      locale,
      mainContent,
    }),
    seo: content.seo,
  }
}
