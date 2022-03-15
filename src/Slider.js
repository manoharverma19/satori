import React from 'react'

function Slider() {
  return (
        <>
        <section id="hero">
        <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            {/* Slide 1 */}
            <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/slide/slide-1.jpg)'}}>
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp text-center">
                  <h1 className='clr'>Welcome to <span>Satori</span></h1>
                  <h2>The working world is going remote. Don’t fall behind.
</h2>
                  <div className="text-center"><a href className="btn-get-started">Enroll Now</a></div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-2.jpg)'}}>
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>Lorem Ipsum Dolor</h2>
                  <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <div className="text-center"><a href className="btn-get-started">Read More</a></div>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-3.jpg)'}}>
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>Sequi ea ut et est quaerat</h2>
                  <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <div className="text-center"><a href className="btn-get-started">Read More</a></div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
          </a>
          <ol className="carousel-indicators" id="hero-carousel-indicators" />
        </div>
      </section>
        </>
  )
}

export default Slider