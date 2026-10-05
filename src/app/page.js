'use client';

import InfiniteCrowsel from "@/components/InfiniteCrowsel";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="h-screen flex items-center w-full">
      <InfiniteCrowsel projets={projects}/>
    </main>
  );
}
