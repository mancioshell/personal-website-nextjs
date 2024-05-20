"use client";

import { getEducations } from "@/app/actions";
import useSWR from "swr";
import Image from "next/image";
import Markdown from "marked-react";

async function fetchData() {
  const { data, error } = await getEducations();
  if (error) {
    throw new Error("Error fetching data");
  }
  const response = data.resume.data.attributes;
  const educations = response.educations.data;

  return {
    educations,
  };
}

interface Education {
  attributes: {
    institute: string;
    description: string;
    title: string;
    year: number;
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
  };
}

function Education({ experience }: { experience: Education }) {
  let host = `${process.env.NEXT_PUBLIC_CMS_HOSTNAME}:${process.env.NEXT_PUBLIC_CMS_PORT}`;

  let logo = experience.attributes.logo.data?.attributes;
  let logoUrl = `${host}${logo?.url}`;

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 justify-between w-full">
          <div className="flex gap-6">
            {logo ? (
              <Image
                alt={`${experience.attributes.institute}`}
                width={128}
                height={69}
                loading="eager"
                src={logoUrl}
                className=""
              />
            ) : null}
            <div className="flex flex-col">
              <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-xl">
                {experience.attributes.title}
              </h3>
              <p className="text-gray-900 dark:text-gray-100 font-semibold leading-snug mb-0.5 text-base">
                {experience.attributes.institute}
              </p>
              <p className="font-medium text-gray-700 text-sm dark:text-gray-100">
                {experience.attributes.year}
              </p>
            </div>
          </div>
        </div>
        <div className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description">
          <p>
            <Markdown>{experience.attributes.description}</Markdown>
          </p>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-gray-600 h-px last:hidden w-full"></div>
    </>
  );
}

export default function Educations() {
  const { data } = useSWR("educations", fetchData, { suspense: true });

  const educations = data.educations;

  let educationList = educations
    .sort(
      (educationA: Education, educationB: Education) =>
        educationB.attributes.year - educationA.attributes.year
    )
    .map((education: Education) => {
      return (
        <Education
          key={education.attributes.institute}
          experience={education}
        />
      );
    });

  return (
    <div
      className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
      id="education"
      data-type="section"
    >
      <h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl">
        Education
      </h2>
      {educationList}
    </div>
  );
}
