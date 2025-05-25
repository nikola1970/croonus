import Image from "next/image";
import { Button } from "./Button";

function FooterLinks(props: { links: { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
      {props.links.map((link, index) => (
        <li
          key={index}
          className={`${index < props.links.length - 1 ? "xl:border-anker xl:border-r xl:pr-4" : ""} ${index === 0 ? "xl:pl-0" : ""}`}
        >
          <a className="hover:underline" href={link.href}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="p-5 text-white sm:p-8 xl:p-12">
          <div className="border-anker flex flex-wrap items-center justify-between border-b pb-3">
            <div className="mb-4 flex flex-wrap items-end lg:mb-0">
              <Image
                src="/assets/anker-logo.svg"
                width={200}
                height={40}
                alt="Anker logo"
                className="mr-8"
              />
              <div className="flex text-xs">
                <p className="border-anker mr-4 border-r pr-4">
                  Pozovite nas:
                  <br />
                  +38111 200 200
                </p>
                <p>
                  Anker experience store:
                  <br />
                  TC Galerija, 2. sprat, Beograd
                </p>
              </div>
            </div>
            <div>
              <FooterLinks
                links={[
                  { href: "#", label: "Instagram" },
                  { href: "#", label: "Facebook" },
                  { href: "#", label: "Youtube" },
                ]}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-2">
            <div className="flex-1">
              <FooterLinks
                links={[
                  { href: "#", label: "Uslovi koriscenja" },
                  { href: "#", label: "Reklamacije" },
                  { href: "#", label: "Pravo na odustajanje" },
                  { href: "#", label: "Zamena artikla" },
                  { href: "#", label: "Kako kupiti" },
                  { href: "#", label: "O nama" },
                  { href: "#", label: "Kontakt" },
                ]}
              />
              <p className="mt-4 text-xs xl:max-w-[50%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex flex-1 xl:justify-end">
              <div>
                <p className="mb-3 text-xs">
                  Prijavite se i prvi saznajte za nove proizvode,
                  <br />
                  tehnologije, akcije i sadrzaje na online prodavnici
                </p>
                <div className="flex flex-wrap items-stretch">
                  <input
                    type="text"
                    className="mb-2 h-[40px] w-full min-w-0 bg-white px-2 text-black xl:mb-0 xl:h-auto xl:w-[300px]"
                  />
                  <Button className="w-auto py-3 lg:w-[140px]">
                    Prijavi se
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
