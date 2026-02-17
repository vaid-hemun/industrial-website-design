function Solutions() {
  return (
    <section id="solution" className="bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-36">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-24">
          <span className="block text-sm font-semibold text-brand-accent uppercase tracking-widest mb-6">
            Solutions
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8 text-slate-900">
            Engineered Solutions for <br />
            Bulk Material Handling
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl">
            Integrated systems and services engineered to improve reliability,
            safety and operational efficiency across critical bulk material
            handling environments.
          </p>
        </div>

        {/* SOLUTIONS LIST */}
        <div className="space-y-20">

          {/* ITEM 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2 text-slate-400 text-sm font-medium">
              01
            </div>
            <div className="md:col-span-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Conveying Systems
              </h3>
              <p className="text-slate-600 max-w-3xl leading-relaxed">
                High-capacity belt and pipe conveyor systems engineered for
                long-distance, continuous and dust-free bulk material transport
                across mining, cement and power plants.
              </p>
            </div>
          </div>

          {/* ITEM 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2 text-slate-400 text-sm font-medium">
              02
            </div>
            <div className="md:col-span-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Wear Protection Solutions
              </h3>
              <p className="text-slate-600 max-w-3xl leading-relaxed">
                Advanced wear liners, impact protection systems and chute
                solutions designed to extend equipment life and significantly
                reduce unplanned downtime.
              </p>
            </div>
          </div>

          {/* ITEM 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2 text-slate-400 text-sm font-medium">
              03
            </div>
            <div className="md:col-span-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Engineering & Services
              </h3>
              <p className="text-slate-600 max-w-3xl leading-relaxed">
                Custom engineering, system audits, installation support and
                lifecycle services tailored to site-specific operating
                conditions and performance requirements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Solutions;
