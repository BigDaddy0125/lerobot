export function renderSolution(content) {
  const items = content.items
    .map(
      (item) => `
        <article class="scope-rail-item reveal">
          <div class="scope-rail-index">${item.index}</div>
          <div class="scope-rail-copy">
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
        <div class="section-heading split reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="scope-stage">
          <article class="scope-manifesto reveal">
            <p class="scope-manifesto-kicker">${content.eyebrow}</p>
            <h3>${content.title}</h3>
            <p>${content.description}</p>
          </article>
          <div class="scope-rail">
            ${items}
          </div>
        </div>
      </div>
    </section>
  `
}
