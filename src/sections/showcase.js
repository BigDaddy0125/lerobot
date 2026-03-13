export function renderShowcase(content) {
  const [feature, ...rest] = content.items

  return `
    <section class="section showcase-section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
        </div>
        <div class="showcase-editorial">
          <article class="showcase-feature reveal">
            <p class="showcase-meta">${feature.meta}</p>
            <h3>${feature.title}</h3>
            <p>${feature.body}</p>
          </article>
          <div class="showcase-stack">
            ${rest
              .map(
                (item) => `
                  <article class="showcase-card reveal">
                    <p class="showcase-meta">${item.meta}</p>
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
