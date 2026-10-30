import { useMemo, useState } from 'react'
import { site } from '../data/site'
import { waLink } from '../lib/links'
import Slide from './Slide'
import R from './R'

function CheckForm() {
  const today = useMemo(() => {
    const now = new Date()
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    return local.toISOString().slice(0, 10)
  }, [])
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [room, setRoom] = useState(site.rooms[0].name)
  const [guests, setGuests] = useState('2')
  const [roomCount, setRoomCount] = useState('1')
  const [error, setError] = useState('')

  const nextDay = from ? new Date(Date.parse(from) + 86400000).toISOString().slice(0, 10) : today
  const nights = from && to ? Math.round((Date.parse(to) - Date.parse(from)) / 86400000) : 0
  const rate = Number(site.rooms.find((r) => r.name === room)?.price.replace(/[^0-9.]/g, ''))
  const estimate = nights > 0 ? nights * rate * Number(roomCount) : 0
  const money = (amount) => new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(amount)
  const onFrom = (v) => {
    setFrom(v)
    if (to && to <= v) setTo('')
  }
  const submit = (e) => {
    e.preventDefault()
    if (!from || !to || from < today || to <= from) {
      setError('Choose an arrival date from today onwards and a later leaving date.')
      return
    }
    setError('')
    let m = `Hi, I would like to enquire about the ${room}. Guests: ${guests}. Number of rooms: ${roomCount}.`
    if (from) m += ` from ${from}`
    if (to) m += ` to ${to}`
    m += ' Please confirm availability, the total price, and whether this room suits our group. I understand this is an enquiry and the booking is not confirmed until the guest house replies.'
    window.open(waLink(m), '_blank', 'noopener')
  }

  return (
    <form className="check" onSubmit={submit} aria-label="Check a date">
      <div>
        <label htmlFor="in">Arriving</label>
        <input type="date" id="in" required min={today} value={from} onChange={(e) => onFrom(e.target.value)} />
      </div>
      <div>
        <label htmlFor="out">Leaving</label>
        <input type="date" id="out" required min={nextDay} value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div>
        <label htmlFor="guests">Guests</label>
        <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
          {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((n) => <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="roomCount">Number of rooms</label>
        <select id="roomCount" value={roomCount} onChange={(e) => setRoomCount(e.target.value)}>
          {Array.from({ length: 8 }, (_, i) => String(i + 1)).map((n) => <option key={n} value={n}>{n} {n === '1' ? 'room' : 'rooms'}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="room">Room type</label>
        <select id="room" value={room} onChange={(e) => setRoom(e.target.value)}>
          {site.rooms.map((r) => (
            <option key={r.name}>{r.name}</option>
          ))}
        </select>
      </div>
      {estimate > 0 && <div className="stay-estimate" aria-live="polite"><span>{nights} {nights === 1 ? 'night' : 'nights'} · {roomCount} {roomCount === '1' ? 'room' : 'rooms'}</span><strong>{money(estimate)}</strong><small>Indicative accommodation total. Final rate and occupancy confirmed by the guest house.</small></div>}
      <button className="btn full arrow" type="submit">Ask on WhatsApp</button>
      <p className="form-error" role="alert">{error}</p>
    </form>
  )
}

export default function Rooms({ onActive }) {
  return (
    <Slide id="rooms" className="tint" onActive={onActive}>
      <div className="wrap two">
        <div>
          <R as="h2" i={0}>Rooms and prices</R>
          {site.rooms.map((r, k) => (
            <R i={k + 1} className="room" key={r.name}>
              <h3>{r.name}</h3>
              <div className="price">{r.price}<small>a night</small></div>
              <p>{r.desc}</p>
            </R>
          ))}
          <R as="p" i={4} className="fine">{site.roomNote}</R>
        </div>
        <R i={3} className="panel">
          <h3>Plan your stay</h3>
          <CheckForm />
          <p className="alt">
            Prices shown are indicative. Please confirm the rate, occupancy and total cost for your dates directly with the guest house. An enquiry is not a confirmed booking. We reply to confirm the room is free. Prefer to book online?{' '}
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">We are also on Booking.com.</a>
          </p>
        </R>
      </div>
    </Slide>
  )
}
