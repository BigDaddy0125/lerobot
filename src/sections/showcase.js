export function renderShowcase(content) {
  const items = content.items
    .map(
      (item, index) => `
        <article class="showcase-card showcase-card-${index + 1} reveal">
          <p class="showcase-meta">${item.meta}</p>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section class="section showcase-section">
      <div class="container">
        <div class="section-heading compact reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
        </div>
        <div class="showcase-matrix">${items}</div>
      </div>
    </section>
  `
}
