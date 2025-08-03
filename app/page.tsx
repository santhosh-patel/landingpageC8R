import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { MotionPills } from "@/components/main/MotionPills";
import { Projects } from "@/components/main/projects";
import { Highlights } from "@/components/main/Highlights";
import { Roadmap } from "@/components/main/roadmap";
import { Mintstep } from "@/components/main/mintstep";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col relative">
        <Hero />
        <MotionPills />
        <Highlights />
        <Roadmap />
        <Mintstep />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}