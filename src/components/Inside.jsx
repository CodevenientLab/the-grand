import { useRef, useState } from 'react'
import { site } from '../data/site'
import Slide from './Slide'
import R from './R'
import gate from '../assets/gate-sign.jpg'
import bed from '../assets/room-bed.jpg'
import desk from '../assets/room-desk.jpg'
import twin from '../assets/room-twin-throws.jpg'

const photos = [
  [gate, 'The Grand Guest House sign at the gate, among garden plants'],
  [bed, 'A bed with a red headboard and white linen'],
  [desk, 'A room with a desk, chair, TV, small fridge and kettle'],
  [twin, 'Two beds with burgundy throws and a patterned rug'],
]

export default function Inside({ onActive }) {
  const [selected, setSelected] = useState(0)
  const dialog = useRef(null)
  const show = (index) => { setSelected(index); dialog.current.showModal() }
  return (
    <Slide id="inside" onActive={onActive}>
      <div className="wrap two">
        <div className="inside-text">
          <R as="h2" i={0}>What is in the room</R>
          {site.inside.map((p, k) => (
            <R as="p" i={k + 1} key={k}>{p}</R>
          ))}
        </div>
        <div className="gallery">
          {photos.map(([src, alt], k) => (
            <R as="button" type="button" className="photo-button" i={k + 1} key={src} onClick={() => show(k)} aria-label={`Enlarge photo: ${alt}`}><img src={src} alt={alt} loading="lazy" /><span>View photo ↗</span></R>
          ))}
        </div>
      </div>
      <dialog ref={dialog} className="photo-dialog" aria-label="Guest house photo gallery" onClick={(e) => { if (e.target === e.currentTarget) dialog.current.close() }}>
        <button className="photo-close" autoFocus onClick={() => dialog.current.close()} aria-label="Close photo">Close ×</button>
        <img src={photos[selected][0]} alt={photos[selected][1]} />
        <div className="photo-controls"><button onClick={() => setSelected((selected + photos.length - 1) % photos.length)}>← Previous</button><p>{selected + 1} / {photos.length}</p><button onClick={() => setSelected((selected + 1) % photos.length)}>Next →</button></div>
        <p>{photos[selected][1]}</p>
      </dialog>
    </Slide>
  )
}
