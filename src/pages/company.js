import { renderLayout } from '../layout'
import { globalContent } from '../content/globalContent'
import { companyContent } from '../content/companyContent'
import { renderHero } from '../sections/hero'
import { renderProfile, renderCompanyColumns } from '../sections/companySections'

export function renderCompanyPage() {
  const mainContent = `
    <main id="top">
      ${renderHero(companyContent.hero)}
      ${renderProfile(companyContent.profile)}
      ${renderCompanyColumns('Core Strengths', companyContent.strengths)}
      ${renderCompanyColumns('Collaboration Model', companyContent.collaboration)}
    </main>
  `

  return {
    html: renderLayout({
      ...globalContent,
      activePath: '/company.html',
      mainContent,
    }),
    seo: companyContent.seo,
  }
}
