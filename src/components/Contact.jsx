import { useState } from 'react'
import { site } from '../data/site'
import { waLink, mailLink } from '../lib/links'
import Slide from './Slide'
import R from './R'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

function EnquiryForm() {
  const [v, setV] = useState({ name: '', contact: '', message: '' })
  const [bad, setBad] = useState({})
  const [status, setStatus] = useState('')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [sending, setSending] = useState(false)

  const set = (k) => (e) => {
    const value = e.target.value
    setV((current) => ({ ...current, [k]: value }))
    if (value.trim()) setBad((current) => ({ ...current, [k]: false }))
    setStatus('')
  }
  const text = () => `Hi, my name is ${v.name.trim()}. ${v.message.trim()} You can reach me on ${v.contact.trim()}.` 

  const valid = () => {
    const b = {}
    for (const k of ['name', 'contact', 'message']) if (!v[k].trim()) b[k] = true
    if (!privacyAccepted) b.privacy = true
    setBad(b)
    if (Object.keys(b).length) {
      setStatus('Please complete the required fields and confirm the Privacy Notice.')
      return false
    }
    return true
  }

  const viaWhatsApp = () => {
    if (!valid()) return
    setStatus('Opening WhatsApp. Press send there to finish.')
    window.open(waLink(text()), '_blank', 'noopener')
  }
  const viaEmail = () => {
    if (!valid()) return
    setStatus(`Opening your email app. If nothing opens, write to ${site.email}.`)
    window.open(mailLink(`Enquiry from ${v.name.trim()}`, text()), '_blank')
  }
  const submit = async (e) => {
    e.preventDefault()
    if (!ENDPOINT) return viaWhatsApp()
    if (!valid()) return
    setSending(true)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(v),
      })
      if (!res.ok) throw new Error('bad response')
      setStatus('Thank you. We have your enquiry and will reply shortly.')
      setV({ name: '', contact: '', message: '' })
    } catch {
      setStatus('That did not send. Please use WhatsApp or email instead.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="enq" onSubmit={submit} noValidate>
      <div>
        <label htmlFor="en">Your name</label>
        <input id="en" name="name" autoComplete="name" aria-invalid={Boolean(bad.name)} aria-describedby={bad.name ? 'en-error' : undefined} className={bad.name ? 'invalid' : ''} value={v.name} onChange={set('name')} required />
        {bad.name && <small id="en-error" className="field-error">Please enter your name.</small>}
      </div>
      <div>
        <label htmlFor="ec">Phone or email</label>
        <input id="ec" name="contact" autoComplete="on" inputMode="text" aria-invalid={Boolean(bad.contact)} aria-describedby={bad.contact ? 'ec-error' : undefined} className={bad.contact ? 'invalid' : ''} value={v.contact} onChange={set('contact')} required />
        {bad.contact && <small id="ec-error" className="field-error">Please enter a phone number or email address.</small>}
      </div>
      <div>
        <label htmlFor="em">Your message</label>
        <textarea id="em" name="message" rows={3} aria-invalid={Boolean(bad.message)} aria-describedby={bad.message ? 'em-error' : undefined} className={bad.message ? 'invalid' : ''} value={v.message} onChange={set('message')} required placeholder="Dates, number of guests, number of rooms, and anything we should know" />
        {bad.message && <small id="em-error" className="field-error">Please tell us a little about your enquiry.</small>}
      </div>
      <div className="privacy-consent">
        <label className="consent-label" htmlFor="privacyAccepted">
          <input id="privacyAccepted" type="checkbox" checked={privacyAccepted} onChange={(e) => { setPrivacyAccepted(e.target.checked); if (e.target.checked) setBad((current) => ({ ...current, privacy: false })); setStatus('') }} aria-invalid={Boolean(bad.privacy)} aria-describedby={bad.privacy ? 'privacy-error' : undefined} />
          <span>I have read the <a href="./privacy.html" target="_blank" rel="noopener noreferrer">Privacy Notice</a> and understand my details will be used to respond to this enquiry.</span>
        </label>
        {bad.privacy && <small id="privacy-error" className="field-error">Please confirm that you have read the Privacy Notice.</small>}
      </div>
      {ENDPOINT ? (
        <>
          <button className="btn arrow" type="submit" disabled={sending}>{sending ? 'Sending' : 'Send enquiry'}</button>
          <button className="btn line" type="button" onClick={viaWhatsApp}>Send on WhatsApp</button>
        </>
      ) : (
        <>
          <button className="btn arrow" type="submit">Send on WhatsApp</button>
          <button className="btn line" type="button" onClick={viaEmail}>Send by email</button>
        </>
      )}
      <p className="stat" role="status" aria-live="polite">{status}</p>
    </form>
  )
}

export default function Contact({ onActive }) {
  return (
    <Slide id="contact" className="navy" onActive={onActive}>
      <div className="wrap two">
        <div>
          <R as="h2" i={0}>Talk to us</R>
          <R as="a" i={1} className="big" href={`tel:${site.phone.tel}`}>{site.phone.display}</R>
          <R i={2} className="contact-cta">
            <a className="btn arrow" href={waLink()}>WhatsApp us</a>
            <a className="btn ghost" href={`tel:${site.phone.tel}`}>Call</a>
          </R>
          <R as="dl" i={3} className="c">
            <dt>Second number</dt><dd><a href={`tel:${site.phone2.tel}`}>{site.phone2.display}</a></dd>
            <dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            <dt>Facebook</dt><dd><a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">The Grand Guest House Mafikeng</a></dd>
          </R>
          <R as="p" i={4} className="end">
            {site.name}, 1496 Mosetlhi Close, Mmabatho, Mafikeng. Your comfortable home away from home.
          </R>
        </div>
        <R i={2} className="panel">
          <h3>Send an enquiry</h3>
          <EnquiryForm />
        </R>
      </div>
      <div className="flag" aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }} />
    </Slide>
  )
}
