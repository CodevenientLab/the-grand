// All business content lives here. Edit this file, not the components.
export const site = {
  name: 'The Grand Guest House',
  tagline: 'Home away from home in Mmabatho, Mafikeng.',
  phone: { display: '079 587 5820', tel: '+27795875820', wa: '27795875820' },
  phone2: { display: '063 232 7755', tel: '+27632327755' },
  email: 'booking@thegrandguesthouse.co.za',
  address: '1496 Mosetlhi Close, Unit 6, Mmabatho, Mafikeng, 2790',
  // Confirm this pin lands on the front gate before launch.
  coords: { lat: -25.82003, lng: 25.62713 },
  bookingUrl: 'https://www.booking.com/hotel/za/the-grand-guest-house.html',
  facebookUrl: 'https://web.facebook.com/p/The-Grand-Guest-House-Mafikeng-61576052252634/',
  checkIn: 'From 16:00',
  checkOut: 'By 09:00',

  about: [
    'The Grand Guest House is a 2-star TGCSA graded guest house in Mmabatho Unit 6, Mafikeng. We have eight en-suite rooms and a guest lounge, with secure parking for your car. Every room has a TV with DStv, a desk and free wifi, and the rooms are self-catering.',
    'Families, business and corporate travellers, government guests and work crews all stay with us. Reception is open 24 hours, so you can arrive when your day ends. Reach us by WhatsApp, phone or email.',
  ],
  glance: [
    ['Grading', '2-star TGCSA'],
    ['Rooms', '8, all en-suite'],
    ['Shared space', 'Guest lounge'],
    ['Parking', 'Secure and free'],
    ['Wifi', 'Free'],
    ['Television', 'DStv'],
    ['Meals', 'Self-catering'],
    ['Reception', 'Open 24 hours'],
    ['Check-in', 'From 16:00'],
    ['Check-out', 'By 09:00'],
  ],

  // Confirm prices (per night) and the contractors' room rate with the owner.
  rooms: [
    { name: 'Family room', price: 'R900', desc: 'One queen bed and two single beds. Sleeps 2 adults and 2 children.' },
    { name: 'Queen room', price: 'R500', desc: 'One queen bed, for one or two guests.' },
    { name: 'Contractors’ shared room', price: 'R900', desc: 'For work crews staying together. Ask about longer stays.' },
  ],
  roomNote: 'Every room is self-contained, with its own bathroom.',

  inside: [
    'Each room has an en-suite bathroom, a desk and chair, a flat-screen TV with DStv, and free wifi. Toiletries and slippers are supplied, and you can ask for an iron.',
    'Rooms are self-catering, so there is a kitchen and a microwave. The guest lounge is open to everyone staying.',
  ],

  faq: [
    ['Can I arrive late?', 'Yes. The guest house is open 24 hours. Tell us when you expect to arrive.'],
    ['Is there parking?', 'Yes, parking is secure and free.'],
    ['Can I cook my own meals?', 'The rooms are self-catering. Ask us which room suits you when you book.'],
    ['Do you take work crews and longer stays?', 'Yes. We have a shared room for contractors and work crews. Message us about longer stays.'],
    ['How do I book?', 'Send your dates on WhatsApp, call 079 587 5820, or book through Booking.com.'],
  ],

  gettingHere:
    'About a 4-minute drive from Mmabatho Palms Hotel Casino Convention Resort, 1.5 km from Mmabatho Stadium and about 5 km from the Mafikeng Museum.',
}
