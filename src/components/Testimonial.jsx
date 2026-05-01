function Testimonial({ quote, name, photo }) {
  return (
    <figure className="testimonial">
      <img src={photo} alt={name} />
      <blockquote>{quote}</blockquote>
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export default Testimonial
