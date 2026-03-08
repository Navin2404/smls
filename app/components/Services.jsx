export default function Services() {
  return (
    <section className="py-20 px-6 bg-gray-100">

    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        What We Do
    </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <div className="bg-white shadow rounded-xl p-4 text-center">
          <img src="/semi-work.jpg" className="rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold">Laser Cutting</h3>
          <p className="text-gray-600 mt-2">
            High precision metal and sheet laser cutting.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 text-center">
          <img src="/laser-cut.jpg" className="rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold">Custom Fabrication</h3>
          <p className="text-gray-600 mt-2">
            Custom designed metal products and structures.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 text-center">
          <img src="/cutting-sharp.jpg" className="rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold">Industrial Parts</h3>
          <p className="text-gray-600 mt-2">
            Precision parts manufacturing for industries.
          </p>
        </div>

      </div>
    </section>
  )
}