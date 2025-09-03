import React from 'react'

const home = () => {
  return (
    <div>
      <div className="container  home-container ">
        <div className="container home-hero mb-5">
          <div className=" home-bg mt-5">
            <img src={background} alt="" />
          </div>
          <div className="col-12 hero-items">
            <h1>
              YOUR VISION, <br />
              OUR CREATIVE EXPRTISE
            </h1>
            <button className="contactButton">
              {/* <Link to="/contact">Contact</Link> */}
            </button>
          </div>
        </div>
        <div className="container home-mid mt-5">
          <h1>
            ESY DESIGNS <hr />
            WORLDWIDE © 2024 <hr />
            BRAND DESIGN <hr />& ALL CREATIVE WORKS
          </h1>
        </div>
        <div className="container  home-bottom my-5">
          <h1>WHY YOU SHOULD WORK WITH ME?</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5 col-12 m-2 p-3">
              <h2>01</h2>
              <h5>Creative Expertise</h5>
              <p>
                With years of experience in graphic design, I bring a wealth of
                creativity and technical skill to every project. My portfolio
                showcases a diverse range of styles and innovative solutions
                tailored to meet each client's unique needs.
              </p>
            </div>
            <div className="col-lg-5 col-12 m-2 p-3">
              <h2>02</h2>
              <h5>Client-Centered Approach</h5>
              <p>
                Your vision is my priority. I take the time to understand your
                brand, goals, and audience, ensuring that the final design
                reflects your identity and message. Collaboration and
                communication are key elements of my process.
              </p>
            </div>
            <div className="col-lg-5 col-12 m-2 p-3">
              <h2>03</h2>
              <h5>Timely Delivery</h5>
              <p>
                I understand the importance of deadlines. My project management
                skills ensure that your designs are delivered on time without
                compromising on quality. You can rely on me to meet your
                timeline and keep you updated throughout the project.
              </p>
            </div>
            <div className="col-lg-5 col-12 m-2 p-3">
              <h2>04</h2>
              <h5>Comprehensive Services</h5>
              <p>
                From logo design to full-scale marketing materials, I offer a
                wide range of graphic design services. Whether you need a brand
                refresh or a complete visual identity, I have the expertise to
                handle projects of any size and complexity.
              </p>
            </div>
          </div>
        </div>
        <div className="container d-none mt-5 home-clients">
          <div className="col-4 px-5">
            <p>
              Working With the Best <b>Clients</b> and <b>Partners</b>.
            </p>
          </div>
        </div>
        <div className="container py-5 my-5 home-test">
          {/* <Testimonial /> */}
        </div>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default home
