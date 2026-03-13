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
          <div class="capability-list capability-rail">
            ${rest
              .map(
                (item, index) => `
                  <article class="capability-row reveal">
                    <span class="capability-row-index">0${index + 2}</span>
                    <div class="capability-row-copy">
                      <p class="capability-mini-label">${item.label}</p>
                      <h3>${item.title}</h3>
                      <p>${item.body}</p>
                    </div>
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
