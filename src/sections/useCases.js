export function renderUseCases(content) {
  const items = content.items
    .map(
      (item, index) => `
        <article class="usecase-column usecase-column-${index + 1} reveal">
          <div class="usecase-column-top">
            <p class="usecase-kicker">${item.kicker}</p>
            <span class="usecase-column-index">0${index + 1}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section id="use-cases" class="section usecase-section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="usecase-columns">${items}</div>
      </div>
    </section>
  `
}
