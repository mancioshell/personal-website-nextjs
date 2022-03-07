const Interest = ({ interests }: any) => {
  return (
    <section className="mt-5 pr-5 pl-5 font-sans mb-10" id="interests">
      <h2 className="text-3xl font-bold">Interests</h2>
      <hr className="mt-3 w-24 !h-1 bg-[#149ddd] rounded-full"></hr>

      <div className="flex mt-10 flex-wrap">
        {interests?.map((interest: any, index: number) => (
          <div className="flex flex-col lg:basis-1/3" key={index}>
            <div className="flex flex-col flex-wrap mb-4 md:mb-12 lg:mr-5 mr-5">
              <div className="flex flex-row mb-3 items-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#149ddd] mr-5">
                  <i
                    className={`${interest?.attributes?.icon} text-white fa-xl`}
                  ></i>
                </div>
                <h4 className="text-2xl font-bold">
                  {interest?.attributes?.type}
                </h4>
              </div>

              <div className="">
                <p className="text-justify">
                  {interest?.attributes.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Interest;
