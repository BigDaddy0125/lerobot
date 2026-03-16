export function renderUseCases(content) {
  return `
    <section id="use-cases" class="section usecase-section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="usecase-list usecase-list-flat">
          ${content.items
            .map(
              (item, index) => `
                <article class="usecase-list-row reveal">
                  <div class="usecase-list-label">
                    <span>0${index + 1}</span>
                    <p>${item.kicker}</p>
                  </div>
                  <div class="usecase-list-copy">
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}
