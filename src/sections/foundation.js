export function renderFoundation(content) {
  const [lead, ...rest] = content.items

  const items = rest
    .map(
      (item) => `
        <div class="trust-point">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </div>
      `,
    )
    .join('')

  return `
    <section class="section trust-section">
      <div class="container trust-stage">
        <div class="trust-manifesto reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.lead}</p>
        </div>
        <div class="trust-composition">
          <article class="trust-lead reveal">
            <h3>${lead.title}</h3>
            <p>${lead.body}</p>
          </article>
          <div class="trust-list reveal">${items}</div>
        </div>
      </div>
    </section>
  `
}
