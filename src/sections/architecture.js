export function renderArchitecture(content) {
  const layers = content.layers
    .map(
      (item) => `
        <div class="layer">
          <span class="layer-tag">${item.tag}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </div>
      `,
    )
    .join('')

  return `
    <section id="architecture" class="section architecture-section">
      <div class="container architecture-grid">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="architecture-board reveal">${layers}</div>
      </div>
    </section>
  `
}
