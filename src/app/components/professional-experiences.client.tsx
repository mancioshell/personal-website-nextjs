"use client";

import { getProfessionalExperiences } from "@/app/actions";
import useSWR from "swr";
import Image from "next/image";
import Markdown from "marked-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngular, faAws, faCss3, faDocker, faEthereum, faGolang, faHive, faJava, faJs, faMicrosoft, faPhp, faReact, faRust } from "@fortawesome/free-brands-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

async function fetchData() {
  const { data, error } = await getProfessionalExperiences();
  if (error) {
    throw new Error("Error fetching data");
  }
  const response = data.resume.data.attributes;
  const experiences = response.professionalExperiences.data;

  return {
    experiences,
  };
}

interface ProfessionalExperience {
  attributes: {
    company: string;
    description: string;
    title: string;
    startYear: number;
    endYear: number;
    location: {
      city: string;
      country: string;
    };
    logo: {
      data: {
        attributes: {
          formats: any;
          url: string;
        };
      };
    };
    technologies: {
      data: Technologies[];
    };
  };
}

interface Technologies {
  attributes: {
    name: string;
    icon: string;
  };
}

interface LabelToIcon {
  [key: string]: any;
}

const labelToIcon: LabelToIcon = {
  aws: faAws,
  react: faReact,
  angular: faAngular,
  blockchain: faHive,
  smartContract: faEthereum,
  java: faJava,
  javascript: faJs,
  golang: faGolang,
  rust: faRust,
  php: faPhp,
  css: faCss3,
  azure: faMicrosoft,
  microservices: faMicrochip,
  kubernetes: faDocker
};

function TechnologyList({ technologies }: { technologies: Technologies[] }) {
  return technologies.map((technology: Technologies) => {
    let icon = labelToIcon[technology.attributes.icon];
    return (
      <div
        key={technology.attributes.name}
        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit"
      >
        <FontAwesomeIcon icon={icon} className="mx-1" />
        {technology.attributes.name}
      </div>
    );
  });
}

function ProfessionaExperience({
  experience,
}: {
  experience: ProfessionalExperience;
}) {
  let host = `${process.env.NEXT_PUBLIC_CMS_HOSTNAME}:${process.env.NEXT_PUBLIC_CMS_PORT}`;

  let logo = experience.attributes.logo.data?.attributes;
  let logoUrl = `${host}${logo?.url}`;

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 justify-between w-full">
          <div className="flex gap-4">
            {logo ? (
              <Image
                alt={`${experience.attributes.company}`}
                height={72}
                loading="eager"
                src={logoUrl}
                width={128}
                className="rounded-sm"
              />
            ) : null}
            <div className="flex flex-col">
              <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-xl">
                {experience.attributes.title}
              </h3>
              <p className="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base">
                {experience.attributes.company}
              </p>
              <p className="font-medium text-gray-700 text-sm dark:text-gray-100">
                {experience.attributes.startYear} -{" "}
                {experience.attributes.endYear || "Present"}
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            {/* <a
              href="#"
              className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
              target="_blank"
              aria-label="Facebook"
              data-tooltip="Facebook"
              aria-describedby="tooltip-luE8_wND"
            ></a>
            <a
              href="#"
              className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
              target="_blank"
              aria-label="LinkedIn"
              data-tooltip="LinkedIn"
              aria-describedby="tooltip-DCkz3tl3"
            ></a> */}
          </div>
        </div>
        <div className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description mb-3">
          <Markdown>{experience.attributes.description}</Markdown>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="font-medium text-gray-700 dark:text-gray-300 text-base">
            Technologies:
          </span>
          <div className="flex gap-3 flex-wrap">
            <TechnologyList
              technologies={experience.attributes.technologies.data}
            ></TechnologyList>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"></div>
    </>
  );
}

export default function ProfessionalExperiences() {
  const { data } = useSWR("experiences", fetchData, { suspense: true });

  const experiences = data.experiences;

  let experienceList = experiences
    .sort(
      (
        experienceA: ProfessionalExperience,
        experienceB: ProfessionalExperience
      ) =>
        (experienceB.attributes.endYear || Infinity) -
        (experienceA.attributes.endYear || Infinity)
    )
    .map((experience: ProfessionalExperience) => {
      return (
        <ProfessionaExperience
          key={experience.attributes.company}
          experience={experience}
        />
      );
    });

  return (
    <div
      className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
      id="experience"
      data-type="section"
    >
      <h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
        Work experience
      </h2>
      <div className="flex flex-col gap-8"></div>
      {experienceList}
    </div>
  );
}
