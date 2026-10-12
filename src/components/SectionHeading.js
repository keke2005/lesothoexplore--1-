
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>

      <h2>{title}</h2>

      {intro && (
        <p className="section-heading__intro">{intro}</p>
      )}
    </div>
  )
}
