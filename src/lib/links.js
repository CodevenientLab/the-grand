import { site } from '../data/site'

export const waLink = (text = 'Hi, I would like to make a booking.') =>
  `https://wa.me/${site.phone.wa}?text=${encodeURIComponent(text)}`

export const mailLink = (subject, body) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

const { lat, lng } = site.coords
export const directions = {
  google: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
  waze: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
  apple: `https://maps.apple.com/?daddr=${lat},${lng}`,
  embed: `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`,
}
