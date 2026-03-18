export function renderFooter(content) {
  return `
    <footer class="site-footer">
      <div class="container footer-shell">
        <div class="footer-inner">
          <div class="footer-brand">
  <p class="footer-kicker">clearBot</p>
            <p>${content.footer.note}</p>
          </div>
          <div class="footer-links">
            ${content.footer.links
              .map(
                (item) =>
                  `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`,
              )
              .join('')}
          </div>
        </div>
        <p class="footer-meta">Ishitake Co., Ltd. / Robotics development, cloud operations, and prototype collaboration.</p>
      </div>
    </footer>
  `
}
