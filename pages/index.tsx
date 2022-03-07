/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

import Head from "next/head";

import axios from "axios";
import Typewriter from "typewriter-effect/dist/core";
import { useState, useRef, useEffect } from "react";

import HamburgerMenu from "../components/HamburgerMenu";
import Menu from "../components/Menu";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";

const Home: NextPage = ({
  personalInformation,
  socialMedias,
  summary,
  educations,
  languages,
  professionalExperiences,
  certifications,
  skills,
  interests,
}: any) => {
  const spanRef = useRef(null);

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const typewriter = new Typewriter(spanRef.current, {
      loop: true,
      delay: 75,
    });

    const writer = typewriter
      .typeString("a Full Stack Developer")
      .pauseFor(300)
      .deleteAll()
      .typeString("a DevOps Engineer")
      .pauseFor(300)
      .deleteAll()
      .typeString("a Roman History Addict")
      .pauseFor(300)
      .deleteAll()
      .typeString("a Technology Lover")
      .pauseFor(1000);

    writer.start();

    return () => writer.stop();
  }, []);

  const onClickMenu = () => {
    if (isVisible) setVisible(!isVisible);
  };

  return (
    <>
      <Head>
        <title>Alessandro Mancini</title>
        <meta name="description" content="Alessandro Mancini Personal Website" />
        <meta property="og:title" content="Alessandro Mancini Personal Website" />
        <meta property="og:url" content="https://personal-website-nextjs-fawn.vercel.app/" />
        <meta property="og:description" content="Alessandro Mancini Personal Website" />
        <meta property="og:image" content="/2076833.jfif" />
      </Head>

      <div className="h-screen">
        <div className={`flex flex-row`}>
          <header
            className={`md:basis-1/5 bg-black md:block ${
              isVisible ? "fixed overflow-y-auto z-10 h-screen w-4/5" : "hidden"
            }`}
          >
            <Profile
              personalInformation={personalInformation}
              socialMedias={socialMedias}
            ></Profile>

            <Menu onClickMenu={onClickMenu}></Menu>
          </header>

          <div className={`md:basis-4/5 ${isVisible ? "fixed" : ""}`}>
            <HamburgerMenu
              isVisible={isVisible}
              onClickMenu={() => setVisible(!isVisible)}
            ></HamburgerMenu>

            <Hero
              personalInformation={personalInformation}
              spanRef={spanRef}
            ></Hero>

            <main>
              <About
                personalInformation={personalInformation}
                summary={summary}
                languages={languages}
              ></About>

              <Resume
                educations={educations}
                certifications={certifications}
                professionalExperiences={professionalExperiences}
              ></Resume>

              <Skills skills={skills}></Skills>

              <Interest interests={interests}></Interest>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const url = process.env.CMS_URL;
  const apiKey = process.env.API_KEY;

  let response = await axios({
    method: "GET",
    url: `${url}api/personal-informations?populate=*`,
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  const personalInformation = response.data.data[0].attributes;

  const socialMedias = personalInformation?.social_medias?.data;

  response = await axios({
    method: "GET",
    url: `${url}api/resumes/1?populate=*`,
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  const resume = response.data.data.attributes;

  const summary = resume.summary;
  const educations = resume.educations?.data;
  const languages = resume.languages?.data;
  const professionalExperiences = resume.professional_experiences?.data;
  const certifications = resume.certifications?.data;
  const skills = resume.skills?.data;
  const interests = resume.interests?.data;

  return {
    props: {
      personalInformation,
      socialMedias,
      summary,
      educations,
      languages,
      professionalExperiences,
      certifications,
      skills,
      interests,
    },
  };
}

export default Home;
