import { Footer } from "../common/Footer";
import { Navigation } from "../common/Navigation";
import { Categories } from "./component/Categories";
import { Features } from "./component/Features";
import { Hero } from "./component/Hero";
import { News } from "./component/News";
import { Solutions } from "./component/Solutions";
import { Tabs } from "./component/Tabs";

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <Hero />
      <Features />
      <Categories />
      <Solutions />
      <Tabs />
      <News />
      <Footer />
    </div>
  );
}
