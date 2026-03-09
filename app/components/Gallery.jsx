export default function Gallery() {

  const images = [
    "/precise.jpg",
    "/traditional-cut.jpg",
    "/cutting-sharp.jpg",
    "/common-laser.jpg",
    "/blue-cnc.jpg",
    "/laser.jpg"
  ]

  return (
    // <section id="gallery" className="py-20 px-6">

    //   <h2 className="text-3xl font-bold text-center mb-12">
    //     Our Works
    //   </h2>

    //   <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    //     {images.map((img, i) => (
    //       <img
    //         key={i}
    //         src={img}
    //         className="rounded-xl shadow hover:scale-105 transition"
    //       />
    //     ))}

    //   </div>

    // </section>

    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        <div className="md:sticky md:top-24 h-fit">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Works</h2>
          <p className="text-gray-600">
            Explore precision laser cutting works, industrial parts, and custom fabrication projects by SMLS.
          </p>
        </div>

        <div className="space-y-6">
          <img src="/precise.jpg" className="w-full h-[300px] object-cover rounded-xl shadow-md" />
          <img src="/traditional-cut.jpg" className="w-full h-[300px] object-cover rounded-xl shadow-md" />
          <img src="/cutting-sharp.jpg" className="w-full h-[300px] object-cover rounded-xl shadow-md" />
          <img src="/common-laser.jpg" className="w-full h-[300px] object-cover rounded-xl shadow-md" />
          <img src="/blue-cnc.jpg" className="w-full h-[300px] object-cover rounded-xl shadow-md" />
          <img src="/laser.jpg" className="w-full h-[300px] object-cover rounded-xl shadow-md" />
        </div>

      </div>
    </section>
  )
}