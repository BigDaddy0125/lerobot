export function renderUseCases(content) {
  const items = content.items
    .map(
      (item) => `
        <article class="usecase-card reveal">
          <p class="usecase-kicker">${item.kicker}</p>
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
        </div>
        <div class="usecase-grid">${items}</div>
      </div>
    </section>
  `
}
