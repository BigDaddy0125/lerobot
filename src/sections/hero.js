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

  const blueprint = content.blueprint
    .map(
      (item, index) => `
        <article class="signal-entry signal-entry-${index + 1}">
          <p class="signal-entry-kicker">${item.title}</p>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  const diagram = content.diagram.map((item) => `<span>${item}</span>`).join('')

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
            <div class="signal-frame">
              <div class="signal-frame-head">
                <span class="signal-pill is-live">${content.panel.liveLabel}</span>
                <span class="signal-pill">${content.panel.statusLabel}</span>
              </div>
              <div class="signal-lead-block">
                <p class="signal-overline">${content.panel.overline}</p>
                <h2>${content.panel.title}</h2>
                <p>${content.panel.body}</p>
              </div>
            </div>
            <div class="signal-grid signal-grid-layered">${blueprint}</div>
            <div class="system-diagram" aria-hidden="true">${diagram}</div>
          </div>
        </div>
      </div>
    </section>
  `
}
