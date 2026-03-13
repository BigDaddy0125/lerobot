export function renderCapabilities(content) {
  const items = content.items
    .map(
      (item) => `
        <article class="capability-card reveal">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section id="capabilities" class="section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
        </div>
        <div class="capability-grid">${items}</div>
      </div>
    </section>
  `
}
