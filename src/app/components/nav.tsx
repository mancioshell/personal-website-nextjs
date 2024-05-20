"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";

export enum Section {
  Profile = "profile",
  Skills = "skills",
  Experience = "experience",
  Education = "education",
}

export default function Nav({
  section = Section.Profile,
  scrollTo
}: {
  section: Section;
  scrollTo: (section: Section) => void;
}) {

  return (
    <nav
      className="flex-col gap-2 bg-white dark:bg-gray-800 h-fit hidden mt-20 p-2 rounded-lg shadow-md sticky top-8 w-max xl:flex"
      id="sidebar"
    >
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          scrollTo(Section.Profile)
        }}
        className={`rounded-lg transition h-10 inline-flex items-center justify-center w-10 ${
          section === Section.Profile ? "bg-indigo-600" : "hover:bg-indigo-600"
        }`}
        aria-label="Profile section"
      >
        <FontAwesomeIcon
          icon={faUser}
          className={`m-2   ${
            section === Section.Profile
              ? "text-white"
              : "text-slate-400 hover:text-white"
          }`}
        />
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          scrollTo(Section.Skills)
        }}
        className={`rounded-lg transition h-10 inline-flex items-center justify-center w-10 ${
          section === Section.Skills ? "bg-indigo-600" : "hover:bg-indigo-600"
        }`}
        aria-label="Skills section"
      >
        <FontAwesomeIcon
          icon={faBarsProgress}
          className={`m-2   ${
            section === Section.Skills
              ? "text-white"
              : "text-slate-400 hover:text-white"
          }`}
        />
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          scrollTo(Section.Experience)
        }}
        className={`rounded-lg transition h-10 inline-flex items-center justify-center w-10 ${
          section === Section.Experience
            ? "bg-indigo-600"
            : "hover:bg-indigo-600"
        }`}
        aria-label="Work experience section"
      >
        <FontAwesomeIcon
          icon={faBriefcase}
          className={`m-2   ${
            section === Section.Experience
              ? "text-white"
              : "text-slate-400 hover:text-white"
          }`}
        />
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          scrollTo(Section.Education)
        }}
        className={`rounded-lg transition h-10 inline-flex items-center justify-center w-10 ${
          section === Section.Education
            ? "bg-indigo-600"
            : "hover:bg-indigo-600"
        }`}
        aria-label="Education section"
      >
        <FontAwesomeIcon
          icon={faGraduationCap}
          className={`m-2   ${
            section === Section.Education
              ? "text-white"
              : "text-slate-400 hover:text-white"
          }`}
        />
      </a>
    </nav>
  );
}
