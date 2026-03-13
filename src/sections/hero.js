import { buildLocalizedHref } from '../utils/locale'

function renderAction(action, locale) {
  return `<a class="button button-${action.variant}" href="${buildLocalizedHref(action.href, locale)}">${action.label}</a>`
}

export function renderHero(content, locale) {
  const metrics = content.metrics
    .map(
      (item) => `
        <div>
          <dt>${item.label}</dt>
          <dd>${item.value}</dd>
        </div>
      `,
    )
    .join('')

  const [primary, secondary, tertiary] = content.blueprint

  const summary = `
    <article class="signal-summary">
      <div class="signal-summary-head">
        <span class="signal-pill is-live">${content.panel.liveLabel}</span>
        <span class="signal-pill">${content.panel.statusLabel}</span>
      </div>
      <p class="signal-overline">${content.panel.overline}</p>
      <h2>${content.panel.title}</h2>
      <p>${content.panel.body}</p>
    </article>
  `

  const details = `
    <div class="signal-detail-grid">
      <article class="signal-detail-card">
        <p class="signal-entry-kicker">${primary.title}</p>
        <p>${primary.body}</p>
      </article>
      <article class="signal-detail-card">
        <p class="signal-entry-kicker">${secondary.title}</p>
        <p>${secondary.body}</p>
      </article>
    </div>
  `

  const strip = `
    <div class="signal-strip" aria-label="System Flow">
      ${content.diagram.map((item) => `<span>${item}</span>`).join('')}
    </div>
    <p class="signal-strip-note">${tertiary.title}: ${tertiary.body}</p>
  `

  return `
    <section class="hero">
      <div class="hero-noise"></div>
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h1>${content.title}</h1>
          <p class="hero-lead">${content.lead}</p>
          <div class="hero-actions">${content.actions.map((action) => renderAction(action, locale)).join('')}</div>
          <dl class="hero-metrics">${metrics}</dl>
        </div>
        <div class="hero-panel reveal">
          <div class="signal-card">
            ${summary}
            ${details}
            ${strip}
          </div>
        </div>
      </div>
    </section>
  `
}
