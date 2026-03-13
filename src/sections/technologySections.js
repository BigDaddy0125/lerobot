export function renderTechSystems(systems) {
  const cards = systems
    .map(
      (item) => `
        <article class="deep-card reveal">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <ul class="feature-list">
            ${item.points.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        </article>
      `,
    )
    .join('')

  return `
    <section class="section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">System Layers</p>
          <h2>価値に紐づく技術レイヤー。</h2>
          <p>Boston Dynamics や Agility のように、構成そのものではなく「何のための構成か」が伝わる技術ページを目指しています。</p>
        </div>
        <div class="deep-grid">${cards}</div>
      </div>
    </section>
  `
}

export function renderTagCloud(groups) {
  const cards = groups
    .map(
      (group) => `
        <article class="tag-panel reveal">
          <h3>${group.title}</h3>
          <div class="tag-cloud">
            ${group.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('')

  return `
    <section class="section tinted-section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Stack</p>
          <h2>採用可能な技術スタック。</h2>
        </div>
        <div class="tag-panel-grid">${cards}</div>
      </div>
    </section>
  `
}

export function renderSafety(items) {
  const cards = items
    .map(
      (item) => `
        <article class="safety-card reveal">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section class="section">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Safety</p>
          <h2>ハード設計から始める安全性。</h2>
          <p>遠隔支援や軽作業支援では、制御ロジックだけでなく、機構そのものが安全哲学を持つ必要があります。</p>
        </div>
        <div class="safety-grid">${cards}</div>
      </div>
    </section>
  `
}
