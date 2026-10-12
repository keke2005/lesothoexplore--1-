export default function AttractionCard({ attraction, index, onViewDetails, onEnquire }) {
  return (
    <article className="attraction-card">
      <div className="attraction-card__image-wrap">
        <img src={attraction.image} alt={`${attraction.name} landscape`} className="attraction-card__image" loading="lazy" />
        <span className="attraction-card__index">0{index + 1}</span>
        <span className="attraction-card__category">{attraction.category}</span>
      </div>
      <div className="attraction-card__body">
        <div className="attraction-card__meta"><span>{attraction.location}</span><span>{attraction.duration}</span></div>
        <h3>{attraction.name}</h3>
        <p>{attraction.description}</p>
        <div className="attraction-card__footer">
          <span className="price">{attraction.cost}</span>
          <div className="card-actions">
            <button className="icon-button" type="button" onClick={() => onViewDetails(attraction)} aria-label={`View details for ${attraction.name}`} title="View details">↗</button>
            <button className="card-enquire" type="button" onClick={() => onEnquire(attraction.name)}>Enquire <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </div>
    </article>
  )
}
