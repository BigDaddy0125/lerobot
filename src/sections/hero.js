import { buildLocalizedHref } from '../utils/locale'

function renderAction(action, locale) {
  return `<a class="button button-${action.variant}" href="${buildLocalizedHref(action.href, locale)}">${action.label}</a>`
}

export function renderHero(content, locale) {
  const metrics = content.metrics
    .map(
      (item) => `
        <div class="hero-metric-card">
          <dt>${item.label}</dt>
          <dd>${item.value}</dd>
        </div>
      `,
    )
    .join('')

  const blueprint = content.blueprint
    .map(
      (item, index) => `
        <article class="hero-brief-card">
          <span class="hero-brief-index">0${index + 1}</span>
          <div class="hero-brief-copy">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join('')

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
            <div class="hero-signal-strip" aria-label="System Scope">
              ${content.diagram.map((item) => `<span>${item}</span>`).join('')}
            </div>
            <div class="hero-brief-grid">
              ${blueprint}
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
