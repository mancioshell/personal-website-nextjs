const Skills = ({ skills }: any) => {
  return (
    <section className="mt-5 pb-5 pt-3 font-sans bg-[#f5f8fd]" id="skills">
      <div className="pl-5">
        <h2 className="text-3xl font-bold">Skills</h2>
        <hr className="mt-3 w-24 !h-1 bg-[#149ddd] rounded-full"></hr>
      </div>

      <div className="flex mt-10 flex-wrap mr-6">
        {skills?.map((skill: any, index: number) => (
          <div
            className="flex flex-col basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            key={index}
          >
            <div className="mt-2 ml-5">
              <span className="block pb-2">
                {skill.attributes.name}{" "}
                <i className="float-right">{skill.attributes.percentage}%</i>
              </span>
              <div className={`bg-[#dce8f8] h-2.5`}>
                <div
                  className={`bg-[#149ddd] h-2.5`}
                  style={{ width: `${skill.attributes.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
