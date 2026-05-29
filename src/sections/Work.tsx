import { projects } from '../data/projects'

export function Work() {
  return (
    <article className="work" id="work">
      <h3 className="title">WORK</h3>
      <div className="wrap">
        {projects.map((p, i) => {
          const eager = i === 0
          return (
            <a
              key={p.href}
              href={p.href}
              className="item"
              data-cursor="link"
              data-name={p.cursorName}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div data-cursor="link" data-name={p.cursorName} className="img">
                <img
                  src={p.thumbnail}
                  alt={p.alt}
                  {...(eager ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
                  data-cursor="link"
                  data-name={p.cursorName}
                />
                <div className="txt" data-cursor="link" data-name={p.cursorName}>
                  <h6>
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                    <br />
                    {p.title}
                  </h6>
                </div>
              </div>
              <div data-cursor="link" data-name={p.cursorName} className="pg pg1"></div>
              <div data-cursor="link" data-name={p.cursorName} className="pg pg2"></div>
              <div data-cursor="link" data-name={p.cursorName} className="pg pg3">
                <img
                  src={p.thumbnail}
                  alt={p.alt}
                  loading="lazy"
                  data-cursor="link"
                  data-name={p.cursorName}
                />
                <div className="txt" data-cursor="link" data-name={p.cursorName}>
                  <h6>
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                    <br />
                    {p.title}
                  </h6>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </article>
  )
}
