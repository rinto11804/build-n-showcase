"use client";

import IdeaCard from "@/app/_components/dashboard/idea-card";
import IdeaCreateForm from "@/app/_components/dashboard/idea-create-form";

export default function Dashboard() {
  return (
    <section className="p-7 grid lg:grid-cols-[auto_1fr]  grid-col-1  gap-10 w-full">
      <div className="">
        <IdeaCreateForm />
      </div>

      <div className="flex gap-3 flex-col items-start">
        <h2 className="font-semibold text-xl ">Ideas💡</h2>
        <IdeaCard title="AI-Powered Content Generator" />
      </div>
    </section>
  );
}
