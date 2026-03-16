export function renderArchitecture(content) {
  const layers = content.layers
    .map(
      (item) => `
        <article class="architecture-tile reveal">
          <div class="architecture-tile-top">
            <span class="layer-tag">${item.tag}</span>
            <p class="architecture-tile-label">${item.title}</p>
          </div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section id="architecture" class="section architecture-section">
      <div class="container section-shell architecture-flow">
        <div class="section-heading compact reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="architecture-board architecture-grid reveal">${layers}</div>
      </div>
    </section>
  `
}
