export function renderTechSystems(systems, section) {
  const [featured, ...rest] = systems

  const feature = `
    <article class="system-feature reveal">
      <p class="system-feature-kicker">${featured.title}</p>
      <h3>${featured.body}</h3>
      <ul class="feature-list">
        ${featured.points.map((point) => `<li>${point}</li>`).join('')}
      </ul>
    </article>
  `

  const cards = rest
    .map(
      (item, index) => `
        <article class="system-rail-card reveal">
          <div class="system-rail-top">
            <span>0${index + 2}</span>
            <h3>${item.title}</h3>
          </div>
          <p>${item.body}</p>
          <ul class="feature-list">
            ${item.points.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        </article>
      `,
    )
    .join('')

  return `
    <section class="section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="system-stage">
          ${feature}
          <div class="system-rail">${cards}</div>
        </div>
      </div>
    </section>
  `
}

export function renderTagCloud(groups, section) {
  const cards = groups
    .map(
      (group) => `
        <article class="tag-panel reveal">
          <h3>${group.title}</h3>
          <div class="tag-cloud">
            ${group.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('')

  return `
    <section class="section tinted-section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="tag-panel-grid">${cards}</div>
      </div>
    </section>
  `
}

export function renderSafety(items, section) {
  const cards = items
    .map(
      (item) => `
        <article class="safety-card reveal">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section class="section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="safety-grid">${cards}</div>
      </div>
    </section>
  `
}
