"use client"

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import About from "./about.client";

interface Social {
  attributes: {
    icon: string;
    name: string;
    url: string;
  };
}

interface LabelToIcon {
  [key: string]: any;
}

function Icons({ socials }: { socials: Social[] }) {
  const labelToIcon: LabelToIcon = {
    facebook: faFacebook,
    github: faGithub,
    linkedin: faLinkedinIn,
    xTwitter: faXTwitter,
  };
  return socials.map((social: Social) => {
    let icon = labelToIcon[social.attributes.icon];
    return (
      <a
        key={social.attributes.name}
        href={social.attributes.url}
        className="flex items-center bg-gray-100 rounded active:translate-y-px dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center text-gray-400 w-7"
        target="_blank"
        aria-label={social.attributes.name}
      >
        <FontAwesomeIcon icon={icon} className="m-1" />
      </a>
    );
  });
}

interface SoftSkill {
  name: string;
}

function SoftSkills({ skills }: { skills: SoftSkill[] }) {
  return skills.map((skill: SoftSkill) => {
    return (
      <div
        key={skill.name}
        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit"
      >
        {skill.name}
      </div>
    );
  });
}

interface Interests {
  name: string;
}

function Interests({ interests }: { interests: Interests[] }) {
  return interests.map((interest: Interests) => {
    return (
      <div
        key={interest.name}
        className="flex items-center bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit"
      >
        {interest.name}
      </div>
    );
  });
}

export default function Profile({ data }: { data: any}) { 

  let host = `${process.env.NEXT_PUBLIC_CMS_HOSTNAME}:${process.env.NEXT_PUBLIC_CMS_PORT}`

  const response = data.resume.data.attributes;
  let about = response.about;
  let jobRole = data.jobRole;
  let information = response.information;
  let contact = response.contact;
  let softSkills = response.softSkills;

  let name = information.name;
  let surname = information.surname;
  let city = information.location.city;
  let country = information.location.country;

  let phone = contact.phone;
  let email = contact.email;
  let socials = contact.socials;

  let interests = response.interests;  

  let photo = information.photo.data.attributes.formats;
  let photoUrl = `${host}${photo.medium.url}`;

  let cv = response.cv.data.attributes;
  let cvUrl = `${host}${cv.url}`;

  return (
    <div
      className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
      id="profile"
      data-type="section"
    >
      <div className="flex flex-col gap-6 items-start sm:flex-row">
        <div className="flex items-center gap-4 sm:flex-col">
          <Image
            alt={`${name} ${surname}`}
            decoding="async"
            height="320"
            loading="lazy"
            src={photoUrl}
            width="320"
            className="rounded-lg h-24 max-w-none md:h-52 md:w-52 sm:h-36 sm:w-36 w-24"
          />
          <a
            href={cvUrl}
            target="_blank"
            className="font-medium items-center active:translate-y-px bg-indigo-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-indigo-500 h-10 hover:bg-indigo-700 inline-flex px-4 rounded-md select-none shadow-sm text-base text-white"
            download={`CV-${name}-${surname}.pdf`}
          >
            Download CV
          </a>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col w-full gap-2 justify-between sm:flex-row">
            <div className="w-full">
              <h1 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl sm:text-4xl">
                {name} {surname}
              </h1>
              <h2 className="font-medium text-gray-700 dark:text-gray-100 sm:text-lg text-base">
                {jobRole}
              </h2>
            </div>
            <div className="flex gap-3 flex-wrap sm:flex-nowrap">
              {socials ? <Icons socials={socials.data} /> : null}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="inline-grid xl:grid-cols-[auto_auto]">
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300 text-base">
                  Phone:
                </span>{" "}
                <a
                  href="tel:605 475 6961"
                  className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base underline"
                  target="_self"
                >
                  {phone}
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300 text-base">
                  Email:
                </span>{" "}
                <a
                  href={`mailto:${email}`}
                  className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base underline"
                  target="_self"
                >
                  {email}
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300 text-base">
                  From:
                </span>{" "}
                <span className="font-normal text-gray-500 dark:text-gray-400 text-base">
                  {city}, {country}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="dark:text-gray-300 text-sm font-normal text-gray-500 leading-relaxed sm:leading-relaxed sm:text-base description">
                <About about={about} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-lg">
                  Soft Skills
                </h3>
                <div className="flex gap-3 flex-wrap mt-2">
                  <SoftSkills skills={softSkills} />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-gray-900 dark:text-gray-100 font-extrabold text-lg">
                  Interests
                </h3>
                <div className="flex gap-3 flex-wrap mt-2">
                  <Interests interests={interests} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
