import { TfiArrowCircleRight as ArrowRight } from "react-icons/tfi";
import { TfiArrowCircleLeft as ArrowLeft } from "react-icons/tfi";
import Image from "next/image";

const newsItems = [
  {
    imgSrc: "/assets/news1.jpg",
    description: "5 najboljih prenosnih punjača za iPad: Vodic za kupce",
  },
  {
    imgSrc: "/assets/news2.jpg",
    description: "5 najboljih prenosnih punjača za iPad: Vodic za kupce",
  },
  {
    imgSrc: "/assets/news1.jpg",
    description: "5 najboljih prenosnih punjača za iPad: Vodic za kupce",
  },
  {
    imgSrc: "/assets/news2.jpg",
    description: "5 najboljih prenosnih punjača za iPad: Vodic za kupce",
  },
];

export function News() {
  return (
    <div className="container mt-0 mb-10 md:mt-16 lg:mt-42 xl:mb-30">
      <div className="relative bg-gray-200 px-6 py-10 md:overflow-x-clip md:py-30 lg:px-20 lg:py-50">
        <div className="flex flex-col">
          <div className="mb-5 md:mb-0">
            <h3 className="mb-2 text-xl md:mb-5 lg:text-4xl">
              Saveti i novosti <br />
              iz sveta <span className="text-anker">punjaca</span>
            </h3>
            <div className="flex cursor-pointer gap-x-2">
              <ArrowLeft className="size-8" />
              <ArrowRight className="size-8" />
            </div>
          </div>
          <div className="no-scrollbar top-[-4rem] right-[-10rem] flex gap-5 overflow-scroll md:absolute md:max-w-[80%]">
            {newsItems.map((item, index) => (
              <div key={index} className="min-w-[230px] lg:min-w-[380px]">
                <Image
                  src={item.imgSrc}
                  alt={`News item ${index + 1}`}
                  width={380}
                  height={380}
                  className="mb-3"
                />
                <p className="text-md text-gray-500 lg:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
