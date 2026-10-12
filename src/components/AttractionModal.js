export default function AttractionModal({ attraction, onClose, onEnquire }) {
  if (!attraction) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article className="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close attraction details">×</button>
        <div className="details-modal__image-wrap">
          <img src={attraction.image} alt={`${attraction.name} landscape`} className="details-modal__image" />
          <span className="details-modal__tag">{attraction.category}</span>
        </div>
        <div className="details-modal__content">
          <p className="eyebrow">Destination notes</p>
          <h2 id="details-title">{attraction.name}</h2>
          <p className="details-modal__location">{attraction.location} <span>·</span> {attraction.duration}</p>
          <p className="details-modal__detail">{attraction.detail}</p>
          <div className="details-modal__grid">
            <div><span className="detail-label">What to do</span><div className="activity-list">{attraction.activities.map((activity) => <span key={activity}>{activity}</span>)}</div></div>
            <div><span className="detail-label">Estimated visit cost</span><strong className="details-modal__price">{attraction.cost}</strong><small>per visitor / guide fees may vary</small></div>
          </div>
          <button className="button button--navy" type="button" onClick={() => onEnquire(attraction.name)}>Plan this stop <span aria-hidden="true">↗</span></button>
        </div>
      </article>
    </div>
  )
}
