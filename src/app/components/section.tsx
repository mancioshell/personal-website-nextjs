"use client";

import Skills from "@/app/components/skills.client";
import Skeleton from "@/components/skeleton";
import ObserverWrapper from "@/components/observer-wrapper";
import ProfessionalExperiences from "@/app/components/professional-experiences.client";
import Educations from "@/app/components/educations.client";

import { useRef, useState } from "react";
import { Section } from "@/app/components/nav";
import Nav from "@/app/components/nav";

export default function SectionPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const experiencesRef = useRef<HTMLElement | null>(null);
  const educationsRef = useRef<HTMLElement | null>(null);

  const [section, setSection] = useState<Section>(Section.Profile);

  const scrollTo = (section: Section) => {
    switch (section) {
      case Section.Profile:
        profileRef.current?.scrollIntoView({ behavior: "smooth" });
        setSection(Section.Profile);
        break;
      case Section.Skills:
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        setSection(Section.Skills);
        break;
      case Section.Experience:
        experiencesRef.current?.scrollIntoView({ behavior: "smooth" });
        setSection(Section.Experience);
        break;
      case Section.Education:
        educationsRef.current?.scrollIntoView({ behavior: "smooth" });
        setSection(Section.Education);
        break;
    }
  };

  return (
    <>
      <main className="lg:py-20 lg:space-y-8 max-w-5xl px-2 py-3 sm:px-8 sm:py-12 sm:space-y-6 space-y-4 w-full">
        <ObserverWrapper
          initialInView={true}
          fallback={<Skeleton title="Profile" />}
          ref={profileRef}
          onTrigger={() => setSection(Section.Profile)}
        >
          {children}
        </ObserverWrapper>

        <ObserverWrapper
          initialInView={true}
          fallback={<Skeleton title="Skills" />}
          ref={skillsRef}
          onTrigger={() => setSection(Section.Skills)}
        >
          <Skills />
        </ObserverWrapper>

        <ObserverWrapper
          fallback={<Skeleton title="Work experience" />}
          ref={experiencesRef}
          onTrigger={() => setSection(Section.Experience)}
        >
          <ProfessionalExperiences />
        </ObserverWrapper>

        <ObserverWrapper
          fallback={<Skeleton title="Education" />}
          ref={educationsRef}
          onTrigger={() => setSection(Section.Education)}
        >
          <Educations />
        </ObserverWrapper>
      </main>

      <Nav section={section} scrollTo={scrollTo}></Nav>
    </>
  );
}
