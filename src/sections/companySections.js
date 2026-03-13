export function renderProfile(items) {
  return `
    <section class="section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Profile</p>
          <h2>会社の技術的な立ち位置。</h2>
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

export function renderCompanyColumns(title, items) {
  return `
    <section class="section tinted-section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${title}</p>
          <h2>${title === 'Core Strengths' ? '石竹が持つ基礎体力。' : '石竹が提供したい関わり方。'}</h2>
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
