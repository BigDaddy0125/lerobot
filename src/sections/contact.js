function renderAction(action) {
  const external = action.href.startsWith('http')
  const attrs = external ? ' target="_blank" rel="noreferrer"' : ''
  return `<a class="button button-${action.variant}" href="${action.href}"${attrs}>${action.label}</a>`
}

export function renderContact(content) {
  return `
    <section id="contact" class="section contact-section">
      <div class="container contact-panel reveal">
        <div>
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.body}</p>
        </div>
        <div class="contact-actions">${content.actions.map(renderAction).join('')}</div>
      </div>
    </section>
  `
}
