import { site } from '../data/site'
import { directions } from '../lib/links'
import Slide from './Slide'
import R from './R'

function MapsIcon() {
  return (
    <svg className="nav-icon maps-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M12 2.2a7.1 7.1 0 0 0-7.1 7.1c0 5.1 7.1 12.5 7.1 12.5s7.1-7.4 7.1-12.5A7.1 7.1 0 0 0 12 2.2Z"/>
      <path fill="#34A853" d="M12 2.2a7.1 7.1 0 0 0-7.1 7.1c0 1.8.9 4 2.1 6.1l5-5Z"/>
      <path fill="#FBBC04" d="M6.9 15.4 12 21.8s7.1-7.4 7.1-12.5c0-1.8-.7-3.5-1.9-4.8Z"/>
      <circle cx="12" cy="9.3" r="2.6" fill="#fff"/>
    </svg>
  )
}

function WazeIcon() {
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#33C6F4" d="M12 2.4c-5.1 0-9.1 3.6-9.1 8.1 0 2.1.9 3.8 2.5 5.1l-.8 3.2 3.5-1.1c1.2.5 2.5.8 3.9.8 5.1 0 9.1-3.6 9.1-8.1S17.1 2.4 12 2.4Z"/>
      <path fill="#fff" d="M7.3 9.1a1.3 1.3 0 1 1 2.6 0v.2H7.3Zm6.8 0a1.3 1.3 0 1 1 2.6 0v.2h-2.6Z"/>
      <path d="M7.4 12.2c1.1 1.3 2.6 2 4.6 2s3.5-.7 4.6-2" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="8.4" cy="18.4" r="1.5" fill="#33C6F4"/>
      <circle cx="16.2" cy="18.4" r="1.5" fill="#33C6F4"/>
    </svg>
  )
}

function AppleMapsIcon() {
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#f4f7fb"/>
      <path d="M4 16 9 7l4 4 3-3 4 8" fill="none" stroke="#4AAE72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m4 16 5-2 4 2 7-2" fill="none" stroke="#4A91E2" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 5.1c-1.7 0-2.9 1.2-2.9 2.8 0 2 2.9 5 2.9 5s2.9-3 2.9-5c0-1.6-1.2-2.8-2.9-2.8Z" fill="#E85D5D"/>
      <circle cx="12" cy="7.9" r=".9" fill="#fff"/>
    </svg>
  )
}

export default function Info({ onActive }) {
  return (
    <Slide id="info" className="tint" onActive={onActive}>
      <div className="wrap cols2">
        <div>
          <R as="h2" i={0}>Good to know</R>
          <R i={1}>
            {site.faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </R>
        </div>
        <div>
          <R as="h2" i={1}>Getting here</R>
          <R as="p" i={2}>{site.address}. {site.gettingHere}</R>
          <R i={3} className="map">
            <iframe
              title="Map showing The Grand Guest House"
              src={directions.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </R>
          <R i={4}>
            <p className="directions-label">Choose your navigation app</p>
            <nav className="dir" aria-label="Open directions in a navigation app">
              <a className="nav-link" href={directions.google} target="_blank" rel="noopener noreferrer" aria-label="Get directions with Google Maps" title="Google Maps">
                <MapsIcon /><span>Google Maps</span>
              </a>
              <a className="nav-link" href={directions.waze} target="_blank" rel="noopener noreferrer" aria-label="Get directions with Waze" title="Waze">
                <WazeIcon /><span>Waze</span>
              </a>
              <a className="nav-link" href={directions.apple} target="_blank" rel="noopener noreferrer" aria-label="Get directions with Apple Maps" title="Apple Maps">
                <AppleMapsIcon /><span>Apple Maps</span>
              </a>
            </nav>
          </R>
        </div>
      </div>
    </Slide>
  )
}
