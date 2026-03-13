const SUPPORTED_LOCALES = ['ja', 'en']

export function getLocaleFromUrl() {
  const url = new URL(window.location.href)
  const queryLocale = url.searchParams.get('lang')
  if (SUPPORTED_LOCALES.includes(queryLocale)) {
    localStorage.setItem('lerobot-locale', queryLocale)
    return queryLocale
  }

  const stored = localStorage.getItem('lerobot-locale')
  if (SUPPORTED_LOCALES.includes(stored)) {
    return stored
  }

  return 'ja'
}

export function buildLocalizedHref(href, locale) {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href
  }

  const [pathPart, hashPart] = href.split('#')
  const path = pathPart || window.location.pathname
  const url = new URL(path, window.location.origin)
  url.searchParams.set('lang', locale)

  if (hashPart) {
    url.hash = hashPart
  }

  return `${url.pathname}${url.search}${url.hash}`
}
