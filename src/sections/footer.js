export function renderFooter(content) {
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>${content.note}</p>
        <a href="https://ishitakes.com/" target="_blank" rel="noreferrer">ishitakes.com</a>
      </div>
    </footer>
  `
}
