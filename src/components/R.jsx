// Scroll-reveal wrapper. The parent <Slide> adds the "in" class when visible.
export default function R({ as: Tag = 'div', i = 0, className = '', style, ...props }) {
  return <Tag className={`rv ${className}`.trim()} style={{ '--i': i, ...style }} {...props} />
}
