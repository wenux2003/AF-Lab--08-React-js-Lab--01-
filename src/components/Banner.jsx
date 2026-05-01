import Button from './Button.jsx'

function Banner() {
  return (
    <section className="banner">
      <div>
        <p className="eyebrow">Special Offer</p>
        <h2>Build clean React components faster</h2>
        <p>Simple reusable sections make every page easier to update and improve.</p>
      </div>
      <Button href="#services" variant="light">
        Explore
      </Button>
    </section>
  )
}

export default Banner
