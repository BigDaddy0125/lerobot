export function renderSolution(content) {
  const items = content.items
    .map(
      (item) => `
        <article class="problem-card reveal">
          <span class="problem-index">${item.index}</span>
          <div class="problem-body">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join('')

  return `
    <section id="solution" class="section">
      <div class="container split-section">
        <div class="section-heading split-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="problem-rail">${items}</div>
      </div>
    </section>
  `
}
