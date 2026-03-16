export function renderProcess(content) {
  const items = content.items
    .map(
      (item, index) => `
        <article class="process-step reveal">
          <div class="process-step-node">
            <span>0${index + 1}</span>
          </div>
          <p class="process-kicker">${item.phase}</p>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section id="process" class="section">
      <div class="container">
        <div class="section-heading split reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
        <div class="process-track-shell">
          <div class="process-track-line" aria-hidden="true"></div>
          <div class="process-track">
            ${items}
          </div>
        </div>
      </div>
    </section>
  `
}
