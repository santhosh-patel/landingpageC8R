import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { MotionPills } from "@/components/main/MotionPills";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col relative ">
        <Hero />
        <MotionPills />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
