import { Classes } from "./_components/classes";
import { FloatingButton } from "./_components/floating-button";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Programs } from "./_components/programs";
import { Qualities } from "./_components/qualities";
import { Contact } from "./_components/contact";
import { Stats } from "./_components/stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-kiddy-purple to-kiddy-light font-[family-name:var(--font-mono)]">
      <Hero />
      <Programs />
      <Qualities />
      <Stats />
      <Classes />
      <Contact />
      <Footer />
      <FloatingButton />
    </div>
  );
}
