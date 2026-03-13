export function renderCapabilities(content) {
  const [featured, ...rest] = content.items

  return `
    <section id="capabilities" class="section capabilities-section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="capability-stage">
          <article class="capability-feature reveal">
            <p class="capability-feature-label">${featured.label}</p>
            <h3>${featured.title}</h3>
            <p>${featured.body}</p>
          </article>
          <div class="capability-list">
            ${rest
              .map(
                (item) => `
                  <article class="capability-card reveal">
                    <p class="capability-mini-label">${item.label}</p>
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
