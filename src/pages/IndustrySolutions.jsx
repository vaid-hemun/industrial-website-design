import miningImg from "../assets/industries/mining.jpg";
import cementImg from "../assets/industries/cement.jpg";
import quarryImg from "../assets/industries/quaryying.jpg";
import steelImg from "../assets/industries/steel.jpg";

import { useParams } from "react-router-dom";
import {
  FaMountain,
  FaFire,
  FaCogs,
  FaFlask,
  FaWind,
  FaShieldAlt,
  FaCompressArrowsAlt,
  FaThLarge,
} from "react-icons/fa";

const industryData = {
  "cement-power": {
    title: "Cement & Power",
    image:cementImg,
    highlight: "Built for heat, dust and continuous operation",
    intro:
      "Forech delivers engineered conveyor belts and rubber solutions designed for high-temperature, dusty and continuous-operation cement and power plants.",
    conveyor: [
      {
        icon: <FaFire />,
        challenge: "Fire risk during coal conveying",
        solution:
          "FR / FRAS grade textile conveyor belts ensure safe coal handling.",
      },
      {
        icon: <FaCogs />,
        challenge: "Continuous 24×7 coal transport",
        solution:
          "High-reliability conveyor belts support uninterrupted operation.",
      },
    ],
    rubber: [
      {
        icon: <FaFlask />,
        challenge: "Wear and corrosion in ash handling areas",
        solution:
          "Anti-corrosion rubber linings protect chutes and bunkers.",
      },
      {
        icon: <FaCompressArrowsAlt />,
        challenge: "Impact damage at loading zones",
        solution:
          "Impact bars and wear liners protect belts and structures.",
      },
    ],
  },
  "steel-metal": {
  title: "Steel & Metal",
  image:steelImg,
  highlight: "Engineered solutions for heat, impact and sharp materials",
  intro:
    "Forech provides conveyor belts and rubber wear solutions designed for extreme temperatures, sharp-edged materials, and heavy-duty steel handling operations.",

  image: steelImg, // ← add image import (see below)

  conveyor: [
    {
      icon: <FaFire />,
      challenge: "Hot material conveying",
      solution:
        "Heat-resistant conveyor belts ensure stable operation under high-temperature steel processing conditions.",
    },
    {
      icon: <FaShieldAlt />,
      challenge: "Cut damage from sharp-edged materials",
      solution:
        "Cut-resistant belt covers improve durability and belt life.",
    },
  ],

  rubber: [
    {
      icon: <FaCompressArrowsAlt />,
      challenge: "Pulley slippage under heavy loads",
      solution:
        "FORLAG ceramic pulley lagging improves traction and belt performance.",
    },
    {
      icon: <FaShieldAlt />,
      challenge: "Severe wear in material handling zones",
      solution:
        "Heat- and cut-resistant rubber liners protect equipment and structures.",
    },
  ],
},


  "quarrying-aggregates": {
    title: "Quarrying & Aggregates",
    image:quarryImg,
    highlight: "Designed for abrasion, impact and dust control",
    intro:
      "Forech provides rugged conveyor belts and wear protection systems for stone, sand and aggregate processing environments.",
    conveyor: [
      {
        icon: <FaMountain />,
        challenge: "Severe abrasion from sand, stone and aggregates",
        solution:
          "Abrasion-resistant conveyor belts extend belt service life.",
      },
      {
        icon: <FaCompressArrowsAlt />,
        challenge: "Heavy impact at crushers and transfer points",
        solution:
          "Reinforced conveyor belts absorb impact and reduce belt damage.",
      },
    ],
    rubber: [
      {
        icon: <FaShieldAlt />,
        challenge: "Rapid wear of chutes and hoppers",
        solution:
          "Anti-abrasive rubber liners protect high-wear zones.",
      },
      {
        icon: <FaWind />,
        challenge: "Dust generation and material spillage",
        solution:
          "Skirting rubber systems improve containment and dust control.",
      },
    ],
  },

  "mining-minerals": {
    title: "Mining & Minerals",
    image:miningImg,
    highlight: "Engineered for extreme abrasion and heavy-duty mining",
    intro:
      "Forech mining solutions are designed for sharp ores, heavy impact and long-distance conveying under extreme operating conditions.",
    conveyor: [
      {
        icon: <FaMountain />,
        challenge: "Handling sharp and heavy ores",
        solution:
          "Steel cord and heavy-duty textile conveyor belts resist extreme conditions.",
      },
      {
        icon: <FaCogs />,
        challenge: "Long-distance conveying with high tension",
        solution:
          "Steel cord belts provide high tensile strength and low elongation.",
      },
    ],
    rubber: [
      {
        icon: <FaShieldAlt />,
        challenge: "Extreme wear at transfer points",
        solution:
          "Rubber-ceramic liners and impact beds reduce damage.",
      },
      {
        icon: <FaThLarge />,
        challenge: "Screening efficiency loss",
        solution:
          "High-performance rubber screening mats improve separation.",
      },
    ],
  },
};

export default function IndustrySolutions() {
  const { slug } = useParams();
  const data = industryData[slug];

  if (!data) {
    return (
      <div className="py-32 text-center text-lg text-gray-600">
        Industry content coming soon
      </div>
    );
  }

  return (
    <section className="bg-[#F4F7FB] text-[#0B2A4A]">

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#0B2A4A] to-[#123B66] text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm text-orange-400 mb-4">
              Industry Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-orange-300 mb-6">
              {data.highlight}
            </p>
            <p className="text-white/80 max-w-xl">
              {data.intro}
            </p>
          </div>
<div className="relative h-[320px] rounded-3xl overflow-hidden shadow-xl">
  <img
    src={data.image}
    alt={data.title}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
</div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-32">

        {/* Conveyor */}
        <div>
          <h2 className="text-3xl font-semibold mb-12">
            Conveyor Belt Challenges & Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {data.conveyor.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl text-[#F47C20]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium mb-2">
                      {item.challenge}
                    </p>
                    <p className="text-gray-700">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rubber */}
        <div>
          <h2 className="text-3xl font-semibold mb-12">
            Rubber Sheets & Accessories Challenges & Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {data.rubber.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl text-[#1E4F8F]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium mb-2">
                      {item.challenge}
                    </p>
                    <p className="text-gray-700">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
