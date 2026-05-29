type Props = {
  isVisible: boolean
}

export function Loading({ isVisible }: Props) {
  const className = isVisible ? 'loading loadContainer' : 'loading loadContainer remove'

  return (
    <div className={className}>
      <h3 className="txt title">Welcome</h3>
      <div className="sky">
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="shootingStars"></div>
      </div>
    </div>
  )
}
