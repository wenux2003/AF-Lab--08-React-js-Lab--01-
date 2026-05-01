function Card({ image, title, description }) {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Card
