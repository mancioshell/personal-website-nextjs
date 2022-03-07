/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";

const Profile = ({ personalInformation, socialMedias }: any) => {
  return (
    <section id="profile" className="flex flex-col">
      <div className="flex flex-col items-center">
        <div id="avatar" className="mt-10 mx-5">
          <img
            src="/2076833.jfif"
            className="rounded-full ring-8 ring-light-black"
            alt="Alessandro Mancini"
          ></img>
        </div>
        <h1 className="mt-10 text-white text-xl font-sans">
          {personalInformation?.name}{" "}
          {personalInformation?.surname}
        </h1>
      </div>

      <div
        id="social"
        className="mt-5 mx-8 flex flex-row justify-around social"
      >
        {socialMedias?.map((social: any, index: number) => (
          <a
            href={social.attributes.url}
            target="_blank"
            className="flex items-center justify-center bg-light-black  w-10 h-10 rounded-full md:mr-2"
            key={index}
            rel="noreferrer"
          >
            <i className={`fa-brands fa-${social.attributes.type}`}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profile;
