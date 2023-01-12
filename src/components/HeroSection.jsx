import React from 'react'

function HeroSection() {
  return (
    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 ">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-xl text-center sm:text-left">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p class="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
        duis.
      </p>

      <div class="mt-4 md:mt-8">
        <a
          href="#"
          class="custom-btn btn-15"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt="Student"
    src="../public/static/img/carpets-market-morocco.jpg"
    class="h-56 w-full object-cover sm:h-full"
  />
</section>

  )
}

export default HeroSection