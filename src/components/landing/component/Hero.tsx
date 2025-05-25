import Image from "next/image";
import { Button } from "../../common/Button";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-violet-100 to-pink-100 py-10 lg:py-30">
      <div className="container">
        <div className="flex">
          <div>
            <p className="mb-2 text-sm text-orange-400">
              Akcija traje to 15.6.2025.
            </p>
            <h1 className="mb-3 text-xl font-bold">
              Best chargers for
              <br /> Mother's Day
            </h1>
            <p className="mb-12">
              Get up to 25% off! <br />
              Plus a limited time offer on Gift Cards
            </p>
            <Button>Pogledajte proizvode</Button>
          </div>
          <div className="right-20 bottom-10 lg:absolute">
            <Image
              src="/assets/hero.png"
              width={580}
              height={200}
              alt="hero image"
              className="hidden sm:block sm:max-w-[400px] md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
