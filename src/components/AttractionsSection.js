import { useMemo, useState } from 'react'
import { attractions, categories } from '../data/attractions'
import AttractionCard from './AttractionCard'
import SectionHeading from './SectionHeading'

export default function AttractionsSection({ onViewDetails, onEnquire }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All places')

  const filteredAttractions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return attractions.filter((attraction) => {
      const matchesSearch = attraction.name.toLowerCase().includes(normalizedQuery)
      const matchesCategory = activeCategory === 'All places' || attraction.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [query, activeCategory])

  const clearFilters = () => {
    setQuery('')
    setActiveCategory('All places')
  }

  return (
    <section className="explore-section section-pad" id="explore">
      <div className="shell">
        <div className="explore-intro-row">
          <SectionHeading eyebrow="The destination index" title="Go where the road gets interesting." intro="A first edit of places worth putting on your map. Filter by mood, then open a destination for the details that help you plan your next stop." />
          <div className="explore-aside"><span className="route-dot" /><p>8 places<br />to begin</p></div>
        </div>

        <div className="filter-bar" aria-label="Attraction search and filters">
          <label className="search-field">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <span className="sr-only">Search attractions by name</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a place..." type="search" />
            {query && <button type="button" className="clear-search" onClick={() => setQuery('')} aria-label="Clear search">×</button>}
          </label>
          <div className="category-filters" role="group" aria-label="Filter by category">
            {categories.map((category) => <button key={category} className={activeCategory === category ? 'filter-chip filter-chip--active' : 'filter-chip'} type="button" onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
        </div>

        <div className="results-line"><p><strong>{filteredAttractions.length}</strong> {filteredAttractions.length === 1 ? 'destination' : 'destinations'} found</p>{(query || activeCategory !== 'All places') && <button type="button" onClick={clearFilters}>Clear all filters <span aria-hidden="true">↗</span></button>}</div>

        {filteredAttractions.length > 0 ? (
          <div className="attractions-grid">{filteredAttractions.map((attraction, index) => <AttractionCard key={attraction.id} attraction={attraction} index={index} onViewDetails={onViewDetails} onEnquire={onEnquire} />)}</div>
        ) : (
          <div className="empty-state"><span className="empty-state__mark">⌁</span><h3>No trail found.</h3><p>Try a different place name or reset the filters to see the full destination index.</p><button className="button button--navy" type="button" onClick={clearFilters}>Show all places</button></div>
        )}
      </div>
    </section>
  )
}
