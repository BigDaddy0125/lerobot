export function renderProfile(items, section) {
  return `
    <section class="section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="profile-grid profile-grid-band">
          ${items
            .map(
              (item, index) => `
                <article class="profile-card reveal">
                  <div class="profile-band-top">
                    <p class="profile-label">${item.label}</p>
                    <span class="profile-band-index">0${index + 1}</span>
                  </div>
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
        <div class="section-heading split reveal">
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </div>
        <div class="company-lanes">
          ${items
            .map(
              (item, index) => `
                <article class="company-lane reveal">
                  <div class="company-lane-marker">0${index + 1}</div>
                  <div class="company-lane-copy">
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}
