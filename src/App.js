import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SectionHeading from './components/SectionHeading'
import AttractionCard from './components/AttractionCard'
import AttractionsSection from './components/AttractionsSection'
import AttractionModal from './components/AttractionModal'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'
import { attractions } from './data/attractions'

function getRoute() {
  const path = window.location.hash.replace(/^#\/?/, '').split('?')[0]

  return ['attractions', 'culture', 'enquire'].includes(path)
    ? path
    : 'home'
}

function PageBanner({ eyebrow, title, intro }) {
  return (
    <section className="page-banner">
      <div className="shell page-banner__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  )
}

function HomePage({ onViewDetails, onEnquire }) {
  return (
    <>
      <Hero />

      <section className="intro-section section-pad">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow">The short version</p>
            <h2>
              Small country.
              <br />
              <em>Big feeling.</em>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Lesotho is the only independent state in the world that sits
              entirely above 1,000 metres. That elevation gives the country its
              clear light, dramatic roads, and the sense that every viewpoint
              has been carefully composed.
            </p>

            <p>
              But the real draw is the welcome: Basotho culture is generous,
              practical, and deeply connected to the land. Come for the
              mountains. Leave with a new sense of time.
            </p>

            <a className="text-link" href="#/culture">
              Meet the culture <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="shell stat-row">
          <div>
            <strong>2,000+</strong>
            <span>metres of average elevation</span>
          </div>

          <div>
            <strong>4</strong>
            <span>distinct highland seasons</span>
          </div>

          <div>
            <strong>1</strong>
            <span>kingdom in the sky</span>
          </div>
        </div>
      </section>

      <section className="featured-section section-pad">
        <div className="shell">
          <div className="featured-heading">
            <SectionHeading
              eyebrow="Start here"
              title="Three places to put on your map."
              intro="A quick edit for first-time visitors. See the full destination index when you are ready to wander further."
            />

            <a className="text-link" href="#/attractions">
              View all attractions <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="featured-grid">
            {attractions.slice(0, 3).map((attraction, index) => (
              <AttractionCard
                key={attraction.id}
                attraction={attraction}
                index={index}
                onViewDetails={onViewDetails}
                onEnquire={onEnquire}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function CulturePage() {
  return (
    <>
      <PageBanner
        eyebrow="The spirit of place"
        title={
          <>
            Come for the mountains.
            <br />
            <em>Stay for the welcome.</em>
          </>
        }
        intro="Lesotho is not only a landscape to pass through. It is a living culture of stories, craft, music, food, and generous hospitality."
      />

      <section className="intro-section section-pad">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow">A little context</p>
            <h2>
              Look closer.
              <br />
              <em>Listen longer.</em>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Basotho culture is deeply connected to the land. The blanket,
              the mokorotlo hat, the horse, and the village gathering each
              carry stories about resilience, identity, and belonging.
            </p>

            <p>
              Make time for a local guide, a museum visit, a craft market,
              or a meal shared around a fire. The best memories here are
              often the ones that were not on the original itinerary.
            </p>
          </div>
        </div>

        <div className="shell stat-row">
          <div>
            <strong>01</strong>
            <span>Ask a local guide for the story behind the place</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Leave time for craft, food, and conversation</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Travel gently and respect the highland rhythm</span>
          </div>
        </div>
      </section>

      <ActivitySection />
    </>
  )
}

function ActivitySection() {
  return (
    <section className="activity-strip section-pad">
      <div className="shell activity-layout">
        <SectionHeading
          eyebrow="Choose your pace"
          title="A day here can be many things."
          intro="Plan around what pulls you outside: a long view, a warm meal, a piece of history, or the quiet satisfaction of a road well travelled."
        />

        <div className="activity-list-large">
          <div>
            <span>01</span>
            <strong>Move</strong>
            <p>
              Hike, ride, ski, and follow the paths between mountain villages.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Listen</strong>
            <p>
              Meet the stories, songs, and craft traditions that give the
              landscape its meaning.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Stay</strong>
            <p>
              Make room for a slower morning, a local guide, and one more
              cup of tea.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [selectedAttraction, setSelectedAttraction] = useState(null)
  const [selectedDestination, setSelectedDestination] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute())
      setSelectedAttraction(null)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedAttraction(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const openEnquiry = (destination = '') => {
    setSelectedDestination(destination)
    setSelectedAttraction(null)
    window.location.hash = '#/enquire'
  }

  return (
    <>
    <Header isHome={route === 'home'} currentRoute={route} />

      <main>
        {route === 'home' && (
          <HomePage
            onViewDetails={setSelectedAttraction}
            onEnquire={openEnquiry}
          />
        )}

        {route === 'attractions' && (
          <>
            <PageBanner
              eyebrow="The destination index"
              title={
                <>
                  Go where the road gets <em>interesting.</em>
                </>
              }
              intro="Search the places worth putting on your map, filter by mood, and open a destination for the details that help you plan your next stop."
            />

            <AttractionsSection
              onViewDetails={setSelectedAttraction}
              onEnquire={openEnquiry}
            />
          </>
        )}

        {route === 'culture' && <CulturePage />}

        {route === 'enquire' && (
          <>
            <PageBanner
              eyebrow="Your next chapter"
              title={
                <>
                  Tell us where
                  <br />
                  <em>you want to go.</em>
                </>
              }
              intro="Share a few details and we’ll help you shape a highland itinerary with the right pace, places, and local context."
            />

            <EnquiryForm selectedDestination={selectedDestination} />
          </>
        )}
      </main>

      <Footer />

      <AttractionModal
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
        onEnquire={openEnquiry}
      />
    </>
  )
}

export default App