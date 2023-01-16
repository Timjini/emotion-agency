import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50 hero">
  <div
    className="heroContainer"
  >
    <div className="heroContent">
      <p className='herolead'>EXPLORE</p>
      <h1 className="heroTitle">
        MOROCCO
      </h1>
    </div>
    <div className='heroCards '>
      <div className='Emcard'>
        <h2 className='heroCardTitle'>Cultural Tours</h2>
      </div>
      <div className='Emcard'>
        <h2 className='heroCardTitle'>City Breaks</h2>
      </div>
      <div className='Emcard'>
       <h2 className='heroCardTitle'>Tailor Made Tours</h2>
      </div>
  </div>
      <div className='socialmedia'>
        <a href='#'><i class="fa-brands fa-facebook social"></i></a>
        <a href='#'><i class="fa-brands fa-instagram social"></i></a>
        <a href="#"><i class="fa-solid fa-envelope social"></i>  </a>  
      </div>

  </div>
</section>

  )
}

export default Hero