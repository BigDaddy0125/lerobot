export function renderFoundation(content) {
  const items = content.items
    .map(
      (item) => `
        <div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </div>
      `,
    )
    .join('')

  return `
    <section class="section trust-section">
      <div class="container trust-grid">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
        </div>
        <div class="trust-list reveal">${items}</div>
      </div>
    </section>
  `
}
