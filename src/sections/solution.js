export function renderSolution(content) {
  const [lead, ...rest] = content.items

  const items = rest
    .map(
      (item) => `
        <article class="problem-step reveal">
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
        <div class="problem-flow">
          <article class="problem-anchor reveal">
            <span class="problem-index">${lead.index}</span>
            <div class="problem-anchor-copy">
              <h3>${lead.title}</h3>
              <p>${lead.body}</p>
            </div>
          </article>
          <div class="problem-rail">${items}</div>
        </div>
      </div>
    </section>
  `
}
