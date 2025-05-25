import { Section } from "../../common/Section";
import Image from "next/image";
import { IoIosArrowForward as ArrowRight } from "react-icons/io";

const categories = [
  {
    title: "Punjači",
    amount: 120,
    imgSrc: "/assets/hub.png",
  },
  {
    title: "Baterije",
    amount: 80,
    imgSrc: "/assets/charger.png",
  },
  {
    title: "Kablovi",
    amount: 150,
    imgSrc: "/assets/hub.png",
  },
  {
    title: "Projektori",
    amount: 60,
    imgSrc: "/assets/charger.png",
  },
  {
    title: "Slušalice",
    amount: 90,
    imgSrc: "/assets/hub.png",
  },
  {
    title: "Dodatna oprema",
    amount: 110,
    imgSrc: "/assets/charger.png",
  },
];

export function Categories() {
  return (
    <Section
      title={
        <>
          Istrazite najbolje proizvode
          <br />
          <span className="text-anker">Ankera</span> po kategorijama
        </>
      }
    >
      <div className="no-scrollbar grid auto-cols-[400px] grid-flow-col gap-x-4 overflow-x-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group hover:bg-anker border-anker border-b-2 bg-gray-200 px-8 pt-8 pb-4 transition-all"
          >
            <div className="flex justify-between">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="mb-2 text-2xl text-neutral-700 transition-colors group-hover:text-white">
                    {category.title}
                  </h3>
                  <p className="text-anker text-xs font-bold transition-colors group-hover:text-white">
                    {category.amount} proizvoda
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium transition-colors group-hover:text-white hover:underline"
                >
                  Istrazite
                  <ArrowRight className="ml-1 size-5" />
                </a>
              </div>
              <Image
                src={category.imgSrc}
                alt={category.title}
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
