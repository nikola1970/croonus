import { Button } from "../../common/Button";
import { Section } from "../../common/Section";
import Image from "next/image";

const solutions = [
  {
    title: "Apple resenja za punjenje",
    description: "Pouzdano punjenje za ceo Apple ekosistem.",
    imgSrc: "/assets/solution1.png",
  },
  {
    title: "Kucni bioskop projektor",
    description:
      "Istrazite bioskopske projektore velikog platna sa prikazon do 4k rezolucije.",
    imgSrc: "/assets/solution2.png",
  },
  {
    title: "SmartHome obezbeđenje",
    description:
      "Pokrece ga eufy ExpertSecure sistem - prvi sistem koji radi 24/7",
    imgSrc: "/assets/solution2.png",
  },
  {
    title: "Osnazite avanture",
    description:
      "napajajte svoju strast prema prirodi pomocu nasih pouzdanih i prenosivih elektrana",
    imgSrc: "/assets/solution1.png",
  },
];

export function Solutions() {
  return (
    <Section
      title={
        <>
          Uvek i svuda sa
          <br />
          <span className="text-anker">pametnim</span> uredjajima
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="group relative flex aspect-[4/3] max-w-[880px] items-end overflow-hidden p-5"
          >
            <Image
              src={solution.imgSrc}
              alt={solution.title}
              width={880}
              height={650}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative z-10 duration-300 group-hover:translate-y-0 lg:translate-y-[60px] lg:transition-transform">
              <h3 className="mb-2 text-3xl text-white">{solution.title}</h3>
              <p className="mb-4 text-sm text-white">{solution.description}</p>
              <Button href="#" className="px-14">
                Saznaj vise
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
