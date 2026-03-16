export function renderSolution(content) {
  const [lead, ...rest] = content.items

  const feature = `
    <article class="problem-feature reveal">
      <div class="problem-feature-head">
        <span class="problem-index">${lead.index}</span>
        <p class="problem-feature-kicker">${content.eyebrow}</p>
      </div>
      <div class="problem-feature-body">
        <h3>${lead.title}</h3>
        <p>${lead.body}</p>
      </div>
    </article>
  `

  const items = rest
    .map(
      (item) => `
        <article class="problem-compact reveal">
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
        <div class="section-heading split reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="problem-composition">
          ${feature}
          <div class="problem-stack">${items}</div>
        </div>
      </div>
    </section>
  `
}
