import { useState, useEffect } from "react";

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [showMiniLogo, setShowMiniLogo] = useState(false);

  // Show mini logo on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowMiniLogo(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* FULL HEADER (SCROLLS NORMALLY) */}
      <header className="relative z-40 w-full bg-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT : LOGO */}
          <img
            src="/images/Logo.png"
            alt="Home"
            className="h-14 w-auto cursor-pointer"
          />

          {/* CENTER : NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-800">

            {/* ABOUT US */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="cursor-pointer hover:text-brand-accent">
                About Us
              </span>

              {aboutOpen && (
                <div className="absolute left-0 top-full mt-3 w-48 bg-white shadow-xl rounded-md p-4 z-50">
                  <a href="#milestones" className="block py-2 hover:text-brand-accent">
                    Milestones
                  </a>
                </div>
              )}
            </div>

            {/* PRODUCT */}
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <span className="cursor-pointer hover:text-brand-accent">
                Product
              </span>

              {productOpen && (
                <div className="absolute left-0 top-full mt-3 w-72 bg-white shadow-xl rounded-md p-4 z-50">
                  <a href="#belts" className="block py-2 hover:text-brand-accent">
                    Conveyor Belts
                  </a>
                  <a href="#rubber" className="block py-2 hover:text-brand-accent">
                    Rubber Lining, Sheets & Accessories
                  </a>
                </div>
                
              )}
            </div>
            

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionOpen(true)}
              onMouseLeave={() => setSolutionOpen(false)}
            >
              <span className="cursor-pointer hover:text-brand-accent">
                Solutions
              </span>

              {solutionOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 bg-white shadow-xl rounded-md p-4 z-50">
                  <a href="#industries" className="block py-2 hover:text-brand-accent">
                    Industries
                  </a>
                  <a href="#materials" className="block py-2 hover:text-brand-accent">
                    Materials
                  </a>
                </div>
              )}
            </div>

            {/* CASE STUDY */}
            <a href="#case-study" className="hover:text-brand-accent">
              Case Study
            </a>

            {/* CONTACT */}
            <a href="#contact" className="hover:text-brand-accent">
              Contact Us
            </a>
          </nav>

          {/* RIGHT : ACTIONS */}
          <div className="hidden lg:flex items-center gap-5">

            {/* SEARCH */}
            <button className="hover:text-brand-accent">🔍</button>

            {/* LANGUAGE */}
            <select className="text-sm border border-slate-300 rounded px-2 py-1">
              <option>EN</option>
              <option>HI</option>
            </select>

            {/* SEND ENQUIRY */}
            <a
              href="#enquiry"
              className="px-5 py-2 bg-brand-accent text-white text-sm font-semibold rounded hover:opacity-90"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </header>

      {/* FIXED LOGO ONLY (ON SCROLL) */}
      <div
        className={`
          fixed top-5 left-6 z-50
          transition-opacity duration-300
          ${showMiniLogo ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <img
          src="/images/Logo.png"
          alt="Home"
          className="h-9 bg-white px-3 py-2 rounded-md shadow-md"
        />
      </div>
    </>
  );
}
