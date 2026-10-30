import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { waLink } from '../lib/links'
import Slide from './Slide'
import R from './R'
import heroPhoto from '../assets/room-twin-red.jpg'

export default function Hero({ onActive }) {
  const [gone, setGone] = useState(false)
  useEffect(() => {
    const onScroll = () => setGone(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Slide id="top" className="hero" onActive={onActive}>
      <div className="wrap">
        <div>
          <R as="p" i={0} className="hello">Dumela, and welcome.</R>
          <R as="h1" i={1}>{site.name}</R>
          <R as="p" i={2} className="tag">{site.tagline}</R>
          <R i={3} className="amenity-strip"><span>Free Wi-Fi</span><span>Secure parking</span><span>En-suite rooms</span></R>
          <R i={4} className="cta">
            <a className="btn arrow" href={waLink()}>Enquire on WhatsApp</a>
            <a className="btn ghost" href="#rooms">Rooms and prices</a>
          </R>
        </div>
        <div className="house">
          <R i={2} className="sun" aria-hidden="true" />
          <R i={1} className="roof" aria-hidden="true" />
          <R as="img" i={1} src={heroPhoto} alt="A room with two beds, red headboards and burgundy throws" />
        </div>
      </div>
      <a className={`hint${gone ? ' gone' : ''}`} href="#about" aria-label="Scroll to the next section">
        Scroll
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </a>
    </Slide>
  )
}
