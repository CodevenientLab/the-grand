import { useState } from 'react'
import { site } from '../data/site'
import logo from '../assets/logo.png'
import logoDark from '../assets/logo-dark.png'

const links = [['about', 'Our guest house'], ['rooms', 'Rooms & rates'], ['inside', 'Gallery'], ['info', 'Guest guide'], ['contact', 'Contact']]
export default function Header({ active }) {
  const [open, setOpen] = useState(false)
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="flag" aria-hidden="true" />
    <header><div className="wrap">
      <a className="logo" href="#top" aria-label={`${site.name}, home`} onClick={() => setOpen(false)}>
        <img className="lt" src={logo} alt="The Grand Guest House" /><img className="dk" src={logoDark} alt="" aria-hidden="true" />
      </a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu ☰'}</button>
      <nav id="main-nav" className={`main-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="btn sm header-book" href="#rooms">Plan your stay</a>
    </div></header>
  </>
}
