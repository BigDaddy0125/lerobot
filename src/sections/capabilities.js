export function renderCapabilities(content) {
  return `
    <section id="capabilities" class="section capabilities-section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="capability-uniform-grid">
          ${content.items
            .map(
              (item, index) => `
                <article class="capability-uniform-card reveal">
                  <div class="capability-uniform-top">
                    <span class="capability-row-index">0${index + 1}</span>
                    <p class="capability-mini-label">${item.label}</p>
                  </div>
                  <h3>${item.title}</h3>
                  <p>${item.body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}
