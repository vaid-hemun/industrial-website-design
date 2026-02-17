import { Link } from "react-router-dom";
import mining from "../assets/mining.jpg";
import cement from "../assets/cement.jpg";
import steel from "../assets/steel.jpg";
import quarrying from "../assets/quarrying.jpg";









export default function Industries() {
  const industries = [
    {
      name: "Mining & Minerals",
      slug:"mining-minerals",
      img: mining,
      desc: "Heavy-duty belts and wear solutions for extreme mining conditions",
    },
    {
      name: "Cement & Power",
      slug:"cement-power",
      img: cement,
      desc: "High-temperature and abrasion resistant conveyor systems",
    },
    {
      name: "Steel & Metal",
      slug:"steel-metal",
      img: steel,
      desc: "Reliable conveying for steel plants and metal processing",
    },
    {
      name: "Quarrying & Aggregates",
      slug:"quarrying-aggregates",
      img: quarrying ,
      desc: "Rugged belts for stone, sand and aggregate handling",
    },
  ];

  return (
    <section id= "industries" className="py-24 bg-[#0b1c2d] section-padding">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">
            Industries We Serve
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            FORECH delivers engineered conveyor and wear solutions across the
            world’s most demanding industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {industries.map((ind, i) => (
           <Link
  to={`/industries/${ind.slug}`}
  key={ind.slug}
  className="group relative h-[360px] rounded-3xl overflow-hidden shadow-2xl block"
>

              {/* Background */}
              <img
                src={ind.img}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition duration-[1200ms]"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold">{ind.name}</h3>
                <p className="mt-2 text-sm opacity-80 max-w-sm">
                  {ind.desc}
                </p>

                <button className="mt-4 inline-block border border-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-black transition">
  Explore Industry
</button>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

