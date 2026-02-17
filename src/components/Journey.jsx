import { useEffect, useRef } from "react";

const timelineData = [
  { year: 1972, text: "Founded as Hilton Rubbers" },
  { year: 2005, text: "ISO & MSHA Certifications" },
  { year: 2010, text: "Entered Steel Cord Manufacturing" },
  { year: 2014, text: "Chevron Press Commissioned" },
  { year: 2016, text: "2500 mm Steel Cord Line" },
  { year: 2017, text: "Strategic CDI Collaboration" },
];

export default function Journey() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".timeline-item");
    const line = sectionRef.current.querySelector(".timeline-line");
    const title = sectionRef.current.querySelector(".journey-title");
    const subtitle = sectionRef.current.querySelector(".journey-subtitle");

    const resetAnimations = () => {
      // reset title
      title.classList.remove("animate-titleReveal");
      subtitle.classList.remove("animate-fadeIn");

      // reset line
      line.classList.remove("animate-lineGrow");
      line.style.width = "0";

      // reset items
      items.forEach((item) => {
        item.classList.add("opacity-0", "translate-y-12");
        item.classList.remove("opacity-100", "translate-y-0");
      });
    };

    const playAnimations = () => {
      title.classList.add("animate-titleReveal");
      subtitle.classList.add("animate-fadeIn");
      line.classList.add("animate-lineGrow");

      items.forEach((item, i) => {
        setTimeout(() => {
          item.classList.remove("opacity-0", "translate-y-12");
          item.classList.add("opacity-100", "translate-y-0");

          const yearEl = item.querySelector(".year");
          const end = Number(yearEl.dataset.year);
          let start = end - 15;

          const interval = setInterval(() => {
            start++;
            yearEl.innerText = start;
            if (start >= end) {
              yearEl.innerText = end;
              clearInterval(interval);
            }
          }, 35);
        }, i * 250);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          resetAnimations();
          setTimeout(playAnimations, 50);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="font-manrope bg-[#f4f6fb] text-[#111827]"
    >
      {/* HERO */}
      <section className="min-h-[45vh] py-28 flex items-center justify-center text-center text-white bg-[linear-gradient(120deg,#0b1c2d,#000)]">
        <div>
          <h1 className="journey-title text-[clamp(3rem,5vw,4.2rem)] font-extrabold">
            Our Journey
          </h1>
          <p className="journey-subtitle mt-5 opacity-85">
            Engineering scale, manufacturing strength, global trust
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 flex justify-center">
        <div className="relative w-[90%] max-w-[1400px] flex justify-between">

          {/* LINE */}
          <div className="timeline-line absolute top-1/2 left-0 h-1 w-0 bg-[linear-gradient(90deg,#c4161c,#ff4d4d)]" />

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-item relative w-[200px] text-center opacity-0 translate-y-12 transition-all duration-700"
            >
              {/* YEAR */}
              <div
                className="year absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c4161c] text-white px-4 py-2 rounded-full font-extrabold text-lg shadow-[0_0_20px_rgba(196,22,28,.7)]"
                data-year={item.year}
              >
                {item.year}
              </div>

              {/* CARD */}
              <div className="mt-[90px] bg-white p-5 rounded-xl shadow-[0_25px_50px_rgba(0,0,0,.15)] text-sm text-[#374151]">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
