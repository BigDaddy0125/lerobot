export function renderTechSystems(systems, section) {
  const cards = systems
    .map(
      (item) => `
        <article class="deep-card reveal">
          <h3>${item.title}</h3>
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
        <div class="section-heading reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="deep-grid">${cards}</div>
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
        <div class="section-heading reveal">
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
        <div class="section-heading reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="safety-grid">${cards}</div>
      </div>
    </section>
  `
}
