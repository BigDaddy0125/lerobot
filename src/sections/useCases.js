export function renderUseCases(content) {
  const [featured, ...rest] = content.items

  return `
    <section id="use-cases" class="section usecase-section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="usecase-stage">
          <article class="usecase-feature reveal">
            <p class="usecase-kicker">${featured.kicker}</p>
            <h3>${featured.title}</h3>
            <p>${featured.body}</p>
          </article>
          <div class="usecase-stack">
            ${rest
              .map(
                (item) => `
                  <article class="usecase-card reveal">
                    <p class="usecase-kicker">${item.kicker}</p>
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `
}
