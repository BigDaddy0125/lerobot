export function renderProcess(content) {
  const items = content.items
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <span>${item.phase}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section id="process" class="section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
        </div>
        <div class="timeline">${items}</div>
      </div>
    </section>
  `
}
