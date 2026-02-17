import { useState } from "react";

// Conveyor images
import textile from "../assets/products/conveyor/textile.jpg";
import steelcord from "../assets/products/conveyor/steelcord.jpg";
import bucket from "../assets/products/conveyor/bucket.jpg";
import chevron from "../assets/products/conveyor/chevron.jpg";
import sidewall from "../assets/products/conveyor/sidewall.jpg";
import pipe from "../assets/products/conveyor/pipe.jpg";

// Rubber images
import forline from "../assets/products/conveyor/rubber/forline.jpg";
import forlineFDA from "../assets/products/conveyor/rubber/forline-fda.jpg";
import forchem from "../assets/products/conveyor/rubber/forchem.jpg";
import forseal from "../assets/products/conveyor/rubber/forseal.jpg";
import forlag from "../assets/products/conveyor/rubber/forlag.jpg";
import forlagCeramic from "../assets/products/conveyor/rubber/forlag-ceramic.jpg";
import forwear from "../assets/products/conveyor/rubber/forwear.jpg";
import forcord from "../assets/products/conveyor/rubber/forcord.jpg";
import repair from "../assets/products/conveyor/rubber/repair.jpg";
import impact from "../assets/products/conveyor/rubber/impact-bar.jpg";

const PRODUCTS = {
  conveyor: {
    title: "Conveyor Belts",
    desc:
      "High-performance conveyor belts engineered for mining, cement, power and bulk material handling.",
    items: [
      { name: "Textile Conveyor Belts", img: textile },
      { name: "Steel Cord Conveyor Belts", img: steelcord },
      { name: "Bucket Elevator Belts", img: bucket },
      { name: "Chevron Conveyor Belts", img: chevron },
      { name: "Sidewall Conveyor Belts", img: sidewall },
      { name: "Pipe Conveyor Belts", img: pipe },
    ],
  },

  rubber: {
    title: "Rubber Lining Sheets & Accessories",
    desc:
      "Advanced rubber sheets, liners and accessories for abrasion, corrosion and impact protection.",
    items: [
      { name: "FORLINE® – Anti-Abrasive Rubber Sheets", img: forline },
      { name: "FORLINE® FDA – Food Grade Rubber Sheets", img: forlineFDA },
      { name: "FORCHEM® – Chemical Resistant Rubber Sheets", img: forchem },
      { name: "FORSEAL® – Industrial Rubber Sheets", img: forseal },
      { name: "FORLAG® – Pulley Lagging", img: forlag },
      { name: "FORLAG® Ceramic – Ceramic Lagging", img: forlagCeramic },
      { name: "FORWEAR® – Rubber & Ceramic Liners", img: forwear },
      { name: "FORCORD® – Screening Mats", img: forcord },
      { name: "FORECH® – Belt Repair Materials", img: repair },
      { name: "FORGLIDE® – Impact Bars", img: impact },
    ],
  },
};

export default function ProductEcosystem() {
  const [activeTab, setActiveTab] = useState("conveyor");
  const [activeProduct, setActiveProduct] = useState(null);

  const data = PRODUCTS[activeTab];

  return (
    <section className="bg-[#F4F7FB] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-semibold text-[#0B2A4A] mb-4">
            Product Ecosystem
          </h2>
          <p className="text-gray-600">
            Integrated conveyor systems and engineered rubber solutions designed
            for demanding industrial applications.
          </p>
        </div>

        {/* TABS */}
        <div className="flex gap-6 mb-14">
          {Object.keys(PRODUCTS).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setActiveProduct(null);
              }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition
                ${
                  activeTab === key
                    ? "bg-[#F47C20] text-white"
                    : "bg-white text-[#0B2A4A] shadow"
                }`}
            >
              {PRODUCTS[key].title}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* PRODUCT CARDS */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {data.items.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveProduct(item)}
                className="cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="font-semibold text-[#0B2A4A]">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* DETAILS PANEL */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            {activeProduct ? (
              <>
                <h3 className="text-2xl font-semibold text-[#0B2A4A] mb-4">
                  {activeProduct.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  Detailed product information will appear here. This panel can
                  later include specifications, applications, datasheets and
                  enquiry CTAs.
                </p>
                <button className="text-[#F47C20] font-semibold hover:underline">
                  View Product Details →
                </button>
              </>
            ) : (
              <p className="text-gray-500">
                Click on a product to view details
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
