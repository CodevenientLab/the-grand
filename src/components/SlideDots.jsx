export const SECTIONS = [
  { id: 'top', label: 'Welcome' },
  { id: 'about', label: 'About' },
  { id: 'rooms', label: 'Rooms and prices' },
  { id: 'inside', label: 'Inside' },
  { id: 'info', label: 'Good to know and directions' },
  { id: 'contact', label: 'Contact' },
]

export default function SlideDots({ active }) {
  return (
    <nav className="dots" aria-label="Page sections">
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'on' : ''} aria-label={s.label} title={s.label} />
      ))}
    </nav>
  )
}
