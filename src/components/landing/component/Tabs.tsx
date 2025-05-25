"use client";

import { Section } from "../../common/Section";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/Button";

const productItems = [
  {
    imgSrc: "/assets/product1.png",
    title: "Anker 20W USB-C Punjač",
    description: "Brzi punjač sa PowerIQ tehnologijom",
    price: "1.999 RSD",
  },
  {
    imgSrc: "/assets/product2.png",
    title: "Anker PowerCore 10000mAh Baterija",
    description: "Kompaktna i lagana baterija za punjenje u pokretu",
    price: "3.499 RSD",
  },
  {
    imgSrc: "/assets/product1.png",
    title: "Anker USB-C to Lightning Kabl",
    description: "Brzi i izdržljivi kabl za punjenje i sinhronizaciju",
    price: "1.299 RSD",
  },
  {
    imgSrc: "/assets/product2.png",
    title: "Anker Nebula Capsule Projektor",
    description: "Portabilni projektor sa Android TV-om",
    price: "39.999 RSD",
  },
  {
    imgSrc: "/assets/product1.png",
    title: "Anker Soundcore Slušalice",
    description: "Bežične slušalice sa dugim vremenom trajanja baterije",
    price: "5.999 RSD",
  },
  {
    imgSrc: "/assets/product2.png",
    title: "Anker Dodatna oprema za punjenje",
    description: "Različiti dodaci za poboljšanje vašeg iskustva punjenja",
    price: "999 RSD",
  },
];

function FirstTabContent() {
  return (
    <div className="no-scrollbar flex snap-x gap-6 overflow-x-auto">
      {productItems.map((item, index) => (
        <div
          key={index}
          className="w-[270px] flex-none snap-center flex-col bg-gray-200 p-5 lg:w-[470px]"
        >
          <div className="mb-4 flex justify-center">
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={300}
              height={300}
              className="w-[140px] lg:w-auto"
            />
          </div>
          <h3 className="text-xl">{item.title}</h3>
          <p className="text-md mt-2 text-gray-600">{item.description}</p>
          <p className="mt-4 text-lg font-bold">{item.price}</p>
          <Button className="mt-4">Dodaj u korpu</Button>
        </div>
      ))}
    </div>
  );
}

const tabContent = [
  {
    id: "punjaci",
    title: "Punjači",
    content: <FirstTabContent />,
  },
  {
    id: "baterije",
    title: "Baterije",
    content: <div>Content for baterije tab...</div>,
  },
  {
    id: "kablovi",
    title: "Kablovi",
    content: <div>Content for kablovi tab...</div>,
  },
  {
    id: "projektori",
    title: "Projektori",
    content: <div>Content for projektori tab...</div>,
  },
  {
    id: "slusalice",
    title: "Slušalice",
    content: <div>Content for slušalice tab...</div>,
  },
];

export function Tabs() {
  const [activeTab, setActiveTab] = useState(tabContent[0].id);

  return (
    <Section
      title={
        <>
          Izdvajamo <span className="text-anker">"Must have"</span>
          <br /> Anker proizvode
        </>
      }
    >
      <div className="mb-10">
        <div
          role="tablist"
          className="mb-6 flex gap-x-8 overflow-x-scroll overflow-y-hidden border-b border-gray-300 pb-2 xl:mb-14 xl:gap-x-14"
          aria-label="Anker proizvodi"
        >
          {tabContent.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              className={`relative cursor-pointer ${activeTab === tab.id ? "after:bg-anker after:absolute after:bottom-[-9px] after:left-0 after:h-[2px] after:w-[100%]" : ""}`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {tabContent.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            tabIndex={0}
            hidden={activeTab !== tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </Section>
  );
}
