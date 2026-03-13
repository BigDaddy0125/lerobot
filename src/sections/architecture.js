export function renderArchitecture(content) {
  const layers = content.layers
    .map(
      (item) => `
        <article class="architecture-card reveal">
          <div class="architecture-card-head">
            <span class="layer-tag">${item.tag}</span>
            <span class="architecture-connector" aria-hidden="true"></span>
          </div>
          <div class="architecture-card-body">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join('')

  return `
    <section id="architecture" class="section architecture-section">
      <div class="container architecture-flow">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="architecture-board architecture-track reveal">${layers}</div>
      </div>
    </section>
  `
}
