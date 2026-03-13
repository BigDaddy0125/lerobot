import { buildLocalizedHref } from '../utils/locale'

function renderAction(action, locale) {
  const href = buildLocalizedHref(action.href, locale)
  const external = href.startsWith('http')
  const attrs = external ? ' target="_blank" rel="noreferrer"' : ''
  return `<a class="button button-${action.variant}" href="${href}"${attrs}>${action.label}</a>`
}

export function renderContact(content, locale) {
  return `
    <section id="contact" class="section contact-section">
      <div class="container contact-panel reveal">
        <div class="contact-copy">
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.title}</h2>
          <p>${content.body}</p>
        </div>
        <div class="contact-side">
          <div class="contact-note">
            <p class="contact-note-label">${content.noteLabel}</p>
            <p>${content.noteBody}</p>
          </div>
          <div class="contact-actions">${content.actions.map((action) => renderAction(action, locale)).join('')}</div>
        </div>
      </div>
    </section>
  `
}
