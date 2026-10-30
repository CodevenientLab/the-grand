import { site } from '../data/site'
import Slide from './Slide'
import R from './R'

export default function About({ onActive }) {
  return (
    <Slide id="about" onActive={onActive}>
      <div className="wrap two">
        <div>
          <R as="h2" i={0}>About the guest house</R>
          {site.about.map((p, k) => (
            <R as="p" i={k + 1} key={k}>{p}</R>
          ))}
        </div>
        <R as="dl" i={2} className="glance">
          {site.glance.map(([k, v]) => (
            <div key={k} style={{ display: 'contents' }}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </R>
      </div>
    </Slide>
  )
}
