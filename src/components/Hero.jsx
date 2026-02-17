import { useState } from "react";

const slides = [
  {
    title: "Engineering Reliability for\nBulk Material Handling",
    description:
      "Advanced conveyor belt solutions, wear protection systems and material handling accessories for critical industrial applications.",
    image: "/images/Hero.jpg",
  },
  {
    title: "Innovative Conveyor Systems\nfor Heavy Industries",
    description:
      "High-capacity conveying solutions engineered for mining, cement, steel and power industries worldwide.",
    image: "/images/hero2.jpg",
  },
  {
    title: "Proven Wear Protection\nand Engineering Services",
    description:
      "Extending equipment life and reducing downtime through engineered wear solutions and lifecycle services.",
    image: "/images/hero3.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={slides[current].image}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 md:px-12 flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 whitespace-pre-line">
            {slides[current].title}
          </h1>

          <p className="text-lg text-slate-200 mb-10">
            {slides[current].description}
          </p>

          <div className="flex items-center gap-6">
            <a className="px-7 py-3 bg-brand-accent text-white text-sm font-semibold">
              Explore Solutions
            </a>

            <a className="px-7 py-3 border border-white/60 text-white text-sm font-semibold">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* ARROW CONTROLS */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 border border-white/50 text-white
                   flex items-center justify-center hover:bg-white/20 transition"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 border border-white/50 text-white
                   flex items-center justify-center hover:bg-white/20 transition"
      >
        ›
      </button>
      {/* YOUTUBE CHANNEL BUTTON – BOTTOM RIGHT OF HERO */}
<a
  href="https://www.youtube.com/@Forech1"
  target="_blank"
  rel="noopener noreferrer"
  className="
    absolute bottom-8 right-8 z-30
    flex items-center gap-3
    px-4 py-3
    bg-white/90 backdrop-blur
    border border-white/40
    text-sm font-semibold text-slate-900
    hover:bg-white
    transition
  "
>
  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white text-base">
    ▶
  </span>
  YouTube
</a>

    </section>
  );
}
