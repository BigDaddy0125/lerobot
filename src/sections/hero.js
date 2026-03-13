function renderAction(action) {
  return `<a class="button button-${action.variant}" href="${action.href}">${action.label}</a>`
}

export function renderHero(content) {
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
      (item) => `
        <article>
          <h2>${item.title}</h2>
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
          <div class="hero-actions">${content.actions.map(renderAction).join('')}</div>
          <dl class="hero-metrics">${metrics}</dl>
        </div>
        <div class="hero-panel reveal">
          <div class="signal-card">
            <div class="signal-head">
              <span class="signal-pill is-live">System Blueprint</span>
              <span class="signal-pill">Prototype Ready</span>
            </div>
            <div class="signal-grid">${blueprint}</div>
            <div class="system-diagram" aria-hidden="true">${diagram}</div>
          </div>
        </div>
      </div>
    </section>
  `
}
