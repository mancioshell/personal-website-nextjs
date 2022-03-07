import ReactMarkdown from "react-markdown";

const Resume = ({ educations, certifications, professionalExperiences }: any) => {
    return (
        <section className="mt-5 ml-5 mr-5 font-sans" id="resume">
        <h2 className="text-3xl font-bold">Resume</h2>
        <hr className="mt-3 w-24 !h-1 bg-[#149ddd] rounded-full"></hr>

        <div className="mt-4 flex flex-wrap">
          <div className="flex flex-col lg:basis-1/2">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            {educations?.map((education: any, index: number) => (
              <div
                className="pl-7  border-l-2 border-blue-800 before:border-blue-800 before:bg-white before:absolute before:border-2 before:w-6 before:h-6 before:rounded-full before:-ml-10"
                key={index}
              >
                <h4 className="-mt-1 text-xl">
                  {education.attributes.title}
                </h4>
                <h5 className="mt-2  text-xl">
                  {education.attributes.achievement_year}
                </h5>
                <p className="mt-2">{education.attributes.institute}</p>
                <ReactMarkdown className="mt-2 mb-4 md:mr-10 text-justify">
                  {education.attributes.description}
                </ReactMarkdown>
              </div>
            ))}

            <div className="flex flex-col lg:basis-1/2 mt-5">
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>

              {certifications?.map(
                (certification: any, index: number) => (
                  <div
                    className="pl-7 border-l-2 border-blue-800 before:border-blue-800 before:bg-white before:absolute before:border-2 before:w-6 before:h-6 before:rounded-full before:-ml-10"
                    key={index}
                  >
                    <h4 className="-mt-1 text-xl">
                      {certification.attributes.name}
                    </h4>
                    {certification.attributes.level ? (
                      <h5 className="mt-2 text-xl">
                        Level: {certification.attributes.level}
                      </h5>
                    ) : null}
                    <p className="mt-2 mb-4 md:mr-10 text-justify">
                      {certification.attributes.institute}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col lg:basis-1/2 mt-5 lg:!mt-0">
            <h3 className="text-2xl font-bold mb-4">
              Professional Experience
            </h3>
            {professionalExperiences?.map(
              (experience: any, index: number) => (
                <div
                  className="pl-7 border-l-2 border-blue-800 before:border-blue-800 before:bg-white before:absolute before:border-2 before:w-6 before:h-6 before:rounded-full before:-ml-10"
                  key={index}
                >
                  <h4 className="-mt-1 text-xl">
                    {experience.attributes.title}
                  </h4>
                  <h5 className="mt-2  text-xl">
                    {experience.attributes.start_year} -{" "}
                    {experience.attributes.end_year}
                  </h5>
                  <p className="mt-2">{experience.attributes.company}</p>
                  <ReactMarkdown className="mt-2 mb-4 text-justify">
                    {experience.attributes.resume}
                  </ReactMarkdown>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    )
}

export default Resume