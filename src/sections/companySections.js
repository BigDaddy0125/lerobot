export function renderProfile(items, section) {
  return `
    <section class="section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="profile-grid">
          ${items
            .map(
              (item) => `
                <article class="profile-card reveal">
                  <p class="profile-label">${item.label}</p>
                  <h3>${item.value}</h3>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}

export function renderCompanyColumns(section, items) {
  return `
    <section class="section tinted-section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="deep-grid">
          ${items
            .map(
              (item) => `
                <article class="deep-card reveal">
                  <h3>${item.title}</h3>
                  <p>${item.body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}
