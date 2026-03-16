export function renderFoundation(content) {
  const items = content.items
    .map(
      (item, index) => `
        <div class="trust-point trust-point-card">
          <span class="trust-point-index">0${index + 1}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </div>
      `,
    )
    .join('')

  return `
    <section class="section trust-section">
      <div class="container trust-stage trust-stage-editorial">
        <div class="trust-manifesto trust-manifesto-editorial reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.lead}</p>
          <div class="trust-glance">
            ${content.items
              .map((item, index) => `<span>0${index + 1} ${item.title}</span>`)
              .join('')}
          </div>
        </div>
        <div class="trust-grid reveal">
          ${items}
        </div>
      </div>
    </section>
  `
}
