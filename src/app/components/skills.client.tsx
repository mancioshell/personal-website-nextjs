"use client";

import Image from "next/image";
import { getSkills } from "@/app/actions";
import useSWR from "swr";

interface ProgrammingLanguage {
  attributes: {
    name: string;
    level: number;
  };
}

interface Language {
  attributes: {
    name: string;
    level: number;
    initials: string;
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface ProfessionalSkill {
  name: string;
}

function SkillBar({ level }: { level: number }) {
  let fullBarCount = Math.ceil(level / 0.2);
  let emptyBarCount = 5 - fullBarCount;

  let fullBar = Array.from({ length: fullBarCount }, (_, i) => (
    <div
      key={i}
      className="first:rounded-l-sm first:rounded-r-none h-2 last:rounded-l-none last:rounded-r-sm w-9 bg-gray-500 dark:bg-gray-300"
    ></div>
  ));

  let emptyBar = Array.from({ length: emptyBarCount }, (_, i) => (
    <div
      key={i}
      className="first:rounded-l-sm first:rounded-r-none h-2 last:rounded-l-none last:rounded-r-sm w-9 bg-gray-200 dark:bg-gray-500"
    ></div>
  ));
  return (
    <>
      {fullBar}
      {emptyBar}
    </>
  );
}

function Languages({ languages }: { languages: Language[] }) {
  let languageList = languages.map((language: Language) => {
    let host = `${process.env.NEXT_PUBLIC_CMS_HOSTNAME}:${process.env.NEXT_PUBLIC_CMS_PORT}`;
    let logo = language.attributes.logo.data.attributes
    let logoUrl = `${host}${logo?.url}`;
    return (
      <div
        key={language.attributes.name}
        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit"
      >
        <Image
          alt={`${language.attributes.name} ${language.attributes.level}`}
          decoding="async"
          height="20"
          loading="lazy"
          src={logoUrl}
          width="20"
          className="rounded-lg"
        />
        {language.attributes.name} - {language.attributes.level}
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-lg">
        I speak
      </h3>

      <div className="flex gap-3 flex-wrap">{languageList}</div>
    </div>
  );
}

function ProfessionalSkills({
  professionalSkills,
}: {
  professionalSkills: ProfessionalSkill[];
}) {
  let professionalSkillList = professionalSkills.map(
    (professionalSkill: ProfessionalSkill) => {
      return (
        <div
          key={professionalSkill.name}
          className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit"
        >
          {professionalSkill.name}
        </div>
      );
    }
  );

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-lg">
        Professional Skills
      </h3>

      <div className="flex gap-3 flex-wrap">{professionalSkillList}</div>
    </div>
  );
}

function ProgrammingLanguageList({
  languages,
}: {
  languages: ProgrammingLanguage[];
}) {
  return languages.map((language: ProgrammingLanguage) => {
    let name = language.attributes.name;
    let level = language.attributes.level;
    return (
      <div key={name} className="flex flex-col gap-2">
        <div className="flex items-center h-5 justify-between">
          <a
            href="https://reactjs.org/"
            className="flex gap-2 h-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-gray-700 text-sm dark:text-gray-300">
              {name}
            </span>
          </a>
          <div
            className="flex h-3.5 w-3.5"
            data-tooltip="Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut."
            data-tooltip-placement="top"
            aria-describedby="tooltip-YkqQGC6j"
          ></div>
        </div>
        <div className="flex gap-1">
          <SkillBar level={level}></SkillBar>
        </div>
      </div>
    );
  });
}

async function fetchData() {
  const { data, error } = await getSkills();
  if (error) {
    throw new Error("Error fetching data");
  }
  const response = data.resume.data.attributes;
  const programmingLanguages = response.programmingLanguages.data;
  const professionalSkills = response.professionalSkills;
  const languages = response.languages.data;

  return {
    languages,
    programmingLanguages,
    professionalSkills,
  };
}

export default function Skills() {
  const { data } = useSWR("skills", fetchData, { suspense: true });

  const programmingLanguages = data.programmingLanguages;
  const languages = data.languages;
  const professionalSkills = data.professionalSkills;

  return (
    <div
      className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
      id="skills"
      data-type="section"
    >
      <h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
        Skills
      </h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-lg">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-8">
            <ProgrammingLanguageList
              languages={programmingLanguages}
            ></ProgrammingLanguageList>
          </div>
        </div>
        <ProfessionalSkills
          professionalSkills={professionalSkills}
        ></ProfessionalSkills>
        <Languages languages={languages}></Languages>
      </div>
    </div>
  );
}
