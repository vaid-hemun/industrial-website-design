import { useEffect, useRef } from "react"

function Milestones() {
  const trackRef = useRef(null)

  useEffect(() => {
    let scrollAmount = 0
    const speed = 0.3

    const animate = () => {
      if (trackRef.current) {
        scrollAmount += speed
        if (scrollAmount >= trackRef.current.scrollWidth / 2) {
          scrollAmount = 0
        }
        trackRef.current.scrollLeft = scrollAmount
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const milestones = [
    { year: "2008", text: "Company Founded" },
    { year: "2012", text: "First Manufacturing Facility" },
    { year: "2015", text: "Mining Sector Expansion" },
    { year: "2018", text: "Pan-India Presence" },
    { year: "2021", text: "Global Exports Started" },
    { year: "2024", text: "Advanced Engineering Solutions" },
  ]

  return (
    <section id="milestones" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10">

        <div className="mb-16">
          <h2 className="text-3xl text-slate-900 mb-4">
            Our Journey
          </h2>
          <p className="text-slate-600 max-w-2xl">
            A timeline of growth and engineering excellence.
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex gap-10 overflow-hidden"
        >
          {[...milestones, ...milestones].map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white border border-slate-200 p-8"
            >
              <span className="text-brand-accent font-semibold block mb-2">
                {item.year}
              </span>
              <p className="text-sm text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Milestones
