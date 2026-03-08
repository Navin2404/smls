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
    <section id="gallery" className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-12">
        Our Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-xl shadow hover:scale-105 transition"
          />
        ))}

      </div>

    </section>
  )
}