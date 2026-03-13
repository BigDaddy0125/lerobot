export function renderArchitecture(content) {
  const layers = content.layers
    .map(
      (item, index) => `
        <article class="architecture-node architecture-node-${index % 2 === 0 ? 'left' : 'right'} reveal">
          <span class="layer-tag">${item.tag}</span>
          <div class="architecture-node-body">
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
        <div class="architecture-board reveal">
          <div class="architecture-spine" aria-hidden="true"></div>
          ${layers}
        </div>
      </div>
    </section>
  `
}
