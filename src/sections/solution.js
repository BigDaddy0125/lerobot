export function renderSolution(content) {
  const items = content.items
    .map(
      (item) => `
        <article class="problem-lane reveal">
          <div class="problem-lane-head">
            <span class="problem-index">${item.index}</span>
            <span class="problem-lane-line" aria-hidden="true"></span>
          </div>
          <div class="problem-lane-body">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
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
        <div class="problem-lanes">${items}</div>
      </div>
    </section>
  `
}
