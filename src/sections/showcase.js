export function renderShowcase(content) {
  const [lead, ...rest] = content.items

  const leadCard = `
    <article class="advantage-lead reveal">
      <p class="advantage-meta">${lead.meta}</p>
      <h3>${lead.title}</h3>
      <p>${lead.body}</p>
    </article>
  `

  const items = rest
    .map(
      (item, index) => `
        <article class="advantage-row reveal">
          <div class="advantage-row-head">
            <span class="advantage-row-index">0${index + 2}</span>
            <p class="advantage-meta">${item.meta}</p>
          </div>
          <div class="advantage-row-copy">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join('')

  return `
    <section class="section showcase-section">
      <div class="container">
        <div class="section-heading compact reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
        </div>
        <div class="advantage-stage">
          ${leadCard}
          <div class="advantage-list">
            ${items}
          </div>
        </div>
      </div>
    </section>
  `
}
