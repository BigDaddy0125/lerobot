export function renderSolution(content) {
  const items = content.items
    .map(
      (item) => `
        <article class="problem-card reveal">
          <span class="problem-index">${item.index}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section id="solution" class="section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="problem-grid">${items}</div>
      </div>
    </section>
  `
}
