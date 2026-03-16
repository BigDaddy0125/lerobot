export function renderFoundation(content) {
  const [lead, ...rest] = content.items

  const items = rest
    .map(
      (item, index) => `
        <div class="trust-point trust-point-card">
          <span class="trust-point-index">0${index + 2}</span>
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
        </div>
        <div class="trust-composition">
          <article class="trust-lead trust-lead-editorial reveal">
            <span class="trust-point-index">01</span>
            <h3>${lead.title}</h3>
            <p>${lead.body}</p>
          </article>
          <div class="trust-list reveal">${items}</div>
        </div>
      </div>
    </section>
  `
}
