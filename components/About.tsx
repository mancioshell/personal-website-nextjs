/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown";

const About = ({ personalInformation, summary, languages }: any) => {
  const address = personalInformation?.address?.data?.attributes;

  const languageInfos = languages.map((language: any, index: number) => (
    <li className="mb-3" key={index}>
      <i className="fa-solid fa-caret-right mr-2"></i>{" "}
      <b>{language?.attributes?.name}</b>: {language?.attributes?.level}
    </li>
  ));

  return (
    <section className="pt-3 pb-4 pl-5 pr-5 font-sans bg-[#f5f8fd]" id="about">
      <h2 className="text-3xl font-bold">About</h2>
      <hr className="mt-3 w-24 !h-1 bg-[#149ddd] rounded-full"></hr>

      <ReactMarkdown className="mt-3 text-justify">{summary}</ReactMarkdown>

      <figure className="mt-4 flex flex-wrap">
        <img
          className="rounded-xl lg:basis-1/3 mx-auto"
          src="/2076833.jfif"
          alt="Alessandro Mancini"
        ></img>
        <div className="flex flex-col pt-2 lg:p-8 lg:basis-2/3">
          <h2 className="mt-4 xl:!mt-0 text-3xl font-bold">
            Personal Information
          </h2>

          <div className="flex flex-wrap mt-4">
            <ul className="xl:basis-1/2">
              <li className="mb-3">
                <i className="fa-solid fa-caret-right mr-2"></i> <b>Name</b>:{" "}
                {personalInformation?.name}
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-caret-right mr-2"></i> <b>Surname</b>:{" "}
                {personalInformation?.surname}
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-caret-right mr-2"></i> <b>Email</b>:{" "}
                {personalInformation?.email}
              </li>
            </ul>

            <ul className="xl:basis-1/2">
              <li className="mb-3">
                <i className="fa-solid fa-caret-right mr-2"></i> <b>Country</b>:{" "}
                {address.country}
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-caret-right mr-2"></i> <b>City</b>:{" "}
                {address?.city}
              </li>
            </ul>
          </div>

          <h2 className="mt-4 text-3xl font-bold">Languages</h2>

          <div className="flex flex-wrap mt-4">
            <ul className="">{languageInfos}</ul>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default About;
