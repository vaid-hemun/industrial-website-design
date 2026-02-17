function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-4 gap-12">

        <div>
          <img
            src="/images/Logo.png"
            alt="Forech Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm">
            Engineering reliable solutions for bulk material handling
            industries worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Conveyor Belts</li>
            <li>Wear Protection</li>
            <li>Material Handling</li>
            <li>Engineering Services</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Industries</h4>
          <ul className="space-y-2 text-sm">
            <li>Mining</li>
            <li>Cement</li>
            <li>Steel</li>
            <li>Power</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">
            info@forech.com<br />
            +91-XXXXXXXXXX
          </p>
        </div>

      </div>

      <div className="border-t border-slate-800 text-center py-6 text-sm">
        © {new Date().getFullYear()} Forech. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
