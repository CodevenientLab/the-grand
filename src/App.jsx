import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Inside from './components/Inside'
import Info from './components/Info'
import Contact from './components/Contact'
import SlideDots from './components/SlideDots'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  const [active, setActive] = useState('top')
  const onActive = useCallback((id) => setActive(id), [])

  return (
    <>
      <Header active={active} />
      <SlideDots active={active} />
      <main id="main" tabIndex={-1}>
        <Hero onActive={onActive} />
        <About onActive={onActive} />
        <Rooms onActive={onActive} />
        <Inside onActive={onActive} />
        <Info onActive={onActive} />
        <Contact onActive={onActive} />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} The Grand Guest House. All rights reserved.</p>
          <nav aria-label="Legal and guest information">
            <a href="./terms.html">Terms &amp; Conditions</a>
            <a href="./booking-policy.html">Booking &amp; Cancellation</a>
            <a href="./privacy.html">Privacy Notice</a>
            <a href="./house-rules.html">House Rules</a>
          </nav>
        </div>
      </footer>
      <WhatsAppFab />
    </>
  )
}
