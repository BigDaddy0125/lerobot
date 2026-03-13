export function renderIntro(content) {
  return `
    <section class="section intro-strip reveal">
      <div class="container strip-grid">
        <article>
          <p class="strip-label">${content.label}</p>
          <h2>${content.title}</h2>
        </article>
        <article>
          <p>${content.body}</p>
        </article>
      </div>
    </section>
  `
}
