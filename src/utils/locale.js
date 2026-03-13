const SUPPORTED_LOCALES = ['ja', 'en']
const BASE_URL = import.meta.env.BASE_URL || '/'

function withBasePath(pathname) {
  const base = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`

  if (!base) {
    return normalizedPath
  }

  return `${base}${normalizedPath}`
}

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
  const currentPath = window.location.pathname.replace(BASE_URL.replace(/\/$/, ''), '') || '/index.html'
  const rawPath = pathPart || currentPath
  const url = new URL(withBasePath(rawPath), window.location.origin)
  url.searchParams.set('lang', locale)

  if (hashPart) {
    url.hash = hashPart
  }

  return `${url.pathname}${url.search}${url.hash}`
}
