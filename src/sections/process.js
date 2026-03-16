export function renderProcess(content) {
  const [lead, ...rest] = content.items

  const featured = `
    <article class="process-lead reveal">
      <p class="process-kicker">${lead.phase}</p>
      <h3>${lead.title}</h3>
      <p>${lead.body}</p>
    </article>
  `

  const items = rest
    .map(
      (item, index) => `
        <article class="process-card reveal">
          <div class="process-card-top">
            <span>${item.phase}</span>
            <strong>0${index + 2}</strong>
          </div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section id="process" class="section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="process-board">
          ${featured}
          <div class="process-grid">
            ${items}
          </div>
        </div>
      </div>
    </section>
  `
}
