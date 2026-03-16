export function renderUseCases(content) {
  const [lead, ...rest] = content.items

  const feature = `
    <article class="usecase-feature-band reveal">
      <div class="usecase-feature-top">
        <p class="usecase-kicker">${lead.kicker}</p>
        <span class="usecase-column-index">01</span>
      </div>
      <h3>${lead.title}</h3>
      <p>${lead.body}</p>
    </article>
  `

  const items = rest
    .map(
      (item, index) => `
        <article class="usecase-list-row reveal">
          <div class="usecase-list-label">
            <span>0${index + 2}</span>
            <p>${item.kicker}</p>
          </div>
          <div class="usecase-list-copy">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `,
    )
    .join('')

  return `
    <section id="use-cases" class="section usecase-section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="usecase-editorial">
          ${feature}
          <div class="usecase-list">
            ${items}
          </div>
        </div>
      </div>
    </section>
  `
}
