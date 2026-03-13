export function renderUseCases(content) {
  const [featured, secondary, tertiary] = content.items

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
          <div class="usecase-side">
            <article class="usecase-card reveal">
              <p class="usecase-kicker">${secondary.kicker}</p>
              <h3>${secondary.title}</h3>
              <p>${secondary.body}</p>
            </article>
            <article class="usecase-band reveal">
              <span class="usecase-kicker">${tertiary.kicker}</span>
              <div class="usecase-band-copy">
                <h3>${tertiary.title}</h3>
                <p>${tertiary.body}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `
}
