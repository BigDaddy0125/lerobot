export function applySeo(seo, locale) {
  document.title = seo.title
  document.documentElement.lang = locale

  const ensureMeta = (name, content, attribute = 'name') => {
    let meta = document.head.querySelector(`meta[${attribute}="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attribute, name)
      document.head.append(meta)
    }
    meta.setAttribute('content', content)
  }

  ensureMeta('description', seo.description)
  ensureMeta('keywords', seo.keywords)
  ensureMeta('og:title', seo.title, 'property')
  ensureMeta('og:description', seo.description, 'property')
  ensureMeta('og:type', 'website', 'property')
  ensureMeta('og:locale', locale === 'ja' ? 'ja_JP' : 'en_US', 'property')
}
