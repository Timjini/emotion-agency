import React from 'react'

function Error() {
  return (
    <div className="flex flex-col h-screen bg-white">
        <div className="ImgNotFound">
  {/* <img
    src="../static/img/beach2.jpg"
    alt=""
    className="object-cover w-full h-64"
  /> */}
  </div>

 
    <div className="errorContent">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        We can't find that page.
      </h1>

      <p className="mt-4 text-gray-500">
        Try searching again, or return home to start from the beginning.
      </p>

      <a
        href="/"
        className="custom-btn btn-15 my-5"
      >
        Go Back Home
      </a>
    </div>
</div>

  )
}

export default Error