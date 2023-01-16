import React from 'react'
import {motion} from 'framer-motion'

function Destinations() {
  return (
    <section className="destinations">
    <div className='destinations-container'>
        <div className='title'>
            <h2 className=''>Our tours</h2>

        </div>
        <div className="card">
        <div className='cardContent' >
        <img
            alt="Lava"
            src="../static/img/city-decoration-mosque-arabian-ornament.jpg"
            class="h-80 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div class="p-4">
            <a href="#">
            <h3 class="text-lg font-medium text-gray-900">
            Cultural Tours
            </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corp 
            </p>
        </div>
        </div>
        <div className='cardContent'>
                <img
                    alt="Lava"
                    src="../static/img/carpets-market-marrakech.jpg"
                    class="h-80 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <div class="p-4">
                    <a href="#">
                    <h3 class="text-lg font-medium text-gray-900">
                    Imperial Cities Tour
                    </h3>
                    </a>

                    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corp 
                    </p>
                </div>
        </div>
        <div className='cardContent'>
        <img
            alt="Lava"
            src="../static/img/south.jpg"
            class="h-80 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div class="p-4">
            <a href="#">
            <h3 class="text-lg font-medium text-gray-900">
            Magic of The South Tour
            </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corp 
            </p>
        </div>

        </div>
        <div className='cardContent'>
        <img
            alt="Lava"
            src="../static/img/sea-side.jpg"
            class="h-80 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div class="p-4">
            <a href="#">
            <h3 class="text-lg font-medium text-gray-900">
            From the Atlantic to The desert Tour
            </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corp 
            </p>
        </div>

        </div>
        <div className='cardContent'>
        <img
            alt="Lava"
            src="https://images.unsplash.com/photo-1610872853577-98ffd151ff2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            class="h-80 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div class="p-4">
            <a href="#">
            <h3 class="text-lg font-medium text-gray-900">
            Andalusia-Morocco Tours
            </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corp 
            </p>
        </div>

        </div>
        <div className='cardContent'>
        <img
            alt="Lava"
            src="../static/img/emirates-palace-hotel.jpg"
            class="h-80 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div class="p-4">
            <a href="#">
            <h3 class="text-lg font-medium text-gray-900">
            Luxury Holidays
            </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corp 
            </p>
        </div>

        </div>
        </div>
    </div>
    </section>
  )
}

export default Destinations