import { waLink } from '../lib/links'
import { ChatIcon } from './Icons'

export default function WhatsAppFab() {
  return (
    <a className="wa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us">
      <ChatIcon />
      <span>WhatsApp</span>
    </a>
  )
}
