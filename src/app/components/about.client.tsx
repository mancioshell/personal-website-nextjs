"use client";

import Markdown from "marked-react";

export default function About({ about }: { about: string }) {
  const renderer = {
    text(text: string) {
      return <p className="text-justify">{text}</p>;
    },
  };

  return (
    <div className="text-justify">
      <Markdown value={about} gfm={true} breaks={true}></Markdown>
    </div>
  );
}
