import { PiChargingStationLight as Feature1Icon } from "react-icons/pi";
import { GiStumpRegrowth as Feature2Icon } from "react-icons/gi";
import { TfiWorld as Feature3Icon } from "react-icons/tfi";
import { PiUsersFourLight as Feature4Icon } from "react-icons/pi";

const featuresItems = [
  {
    title: "200 Miliona+",
    description: "Preko 200 miliona prodatih proizvoda sirom sveta",
    icon: <Feature1Icon className="size-20" />,
  },
  {
    title: "12 godina inovacija",
    description: "Pioniri u tehnologiji punjenja vec 12 godina",
    icon: <Feature2Icon className="size-20" />,
  },
  {
    title: "146 Drzava",
    description: "Dostupni u 146 zemalja",
    icon: <Feature3Icon className="size-20" />,
  },
  {
    title: "100 miliona",
    description: "100 miliona globalnih kupaca",
    icon: <Feature4Icon className="size-20" />,
  },
];

export function Features() {
  return (
    <div className="bg-anker py-10 md:py-15">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuresItems.map((item, index) => (
            <div key={index} className="flex">
              <div className="mr-4 text-white">{item.icon}</div>
              <div>
                <h3 className="relative mb-2 text-xl text-white after:absolute after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[80px] after:bg-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
