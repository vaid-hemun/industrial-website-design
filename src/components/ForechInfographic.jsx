import { useEffect, useRef, useState } from "react";

export default function ForechInfographic() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          animateCards();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  const animateCards = () => {
    cardsRef.current.forEach((card, i) => {
      setTimeout(() => {
        card.classList.remove("opacity-0", "translate-y-16", "scale-90");
        card.classList.add("opacity-100", "translate-y-0", "scale-100");
        countUp(card);
      }, i * 250);
    });
  };

  const countUp = (card) => {
    const el = card.querySelector(".value");
    const target = parseInt(card.dataset.value);
    let current = 0;
    const step = Math.max(1, target / 50);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.innerText =
        Math.floor(current) + (el.innerText.includes("mm") ? " mm" : "+");
    }, 30);
  };

  const cardStyle =
    "bg-white rounded-[26px] p-10 text-center shadow-[0_40px_80px_rgba(0,0,0,.14)] " +
    "relative overflow-hidden opacity-0 translate-y-16 scale-90 transition-all duration-[900ms]";

  return (
    <>
      {/* HERO */}
      <section className="h-[70vh] bg-gradient-to-br from-[#0b1c2d] to-black flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold">
            Built for Global Industries
          </h1>
          <p className="mt-5 max-w-[700px] opacity-80">
            Advanced conveyor solutions trusted across mining, cement and bulk
            handling sectors worldwide
          </p>
        </div>
      </section>

      {/* INFOGRAPHIC */}
      <section
        ref={sectionRef}
        className="max-w-[1200px] mx-auto -mt-24 mb-36 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {[
          { icon: "🌍", value: 50, label: "Countries Served", desc: "Reliable supply partner to global industrial clients" },
          { icon: "🏭", value: 1000, label: "Skilled Workforce", desc: "Manufacturing excellence driven by people" },
          { icon: "⚙️", value: 2500, label: "Engineering Capability", desc: "Heavy-duty steel cord conveyor belts", unit: "mm" },
          { icon: "📈", value: 50, label: "Years of Expertise", desc: "Consistent growth through innovation" }
        ].map((item, i) => (
          <div
            key={i}
            data-value={item.value}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`${cardStyle} animate-float`}
            style={{
              background:
                "radial-gradient(circle at top right, rgba(196,22,28,.08), white 60%)"
            }}
          >
            <div className="text-5xl mb-6">{item.icon}</div>
            <div className="value text-[3.2rem] font-extrabold text-[#0b1c2d]">
              0{item.unit === "mm" ? " mm" : "+"}
            </div>
            <div className="mt-2 font-bold">{item.label}</div>
            <div className="mt-3 text-sm text-gray-500">{item.desc}</div>
          </div>
        ))}
      </section>
    </>
  );
}
