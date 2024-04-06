import heroImg from './assets/hero.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>

          <p>
            YOLO snackwave four dollar toast shoreditch williamsburg activated charcoal deep v vaporware craft beer food truck tbh palo santo waistcoat. Live-edge fanny pack JOMO shoreditch. Pitchfork food truck polaroid portland. Intelligentsia lo-fi pinterest bruh blue bottle you probably haven't heard of them.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt='woman and browser' className='img' />
        </div>

      </div>

    </section>
  )
}

export default Hero
