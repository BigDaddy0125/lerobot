export function renderFooter(content) {
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>${content.footer.note}</p>
        <div class="footer-links">
          ${content.footer.links
            .map(
              (item) =>
                `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`,
            )
            .join('')}
        </div>
      </div>
    </footer>
  `
}
